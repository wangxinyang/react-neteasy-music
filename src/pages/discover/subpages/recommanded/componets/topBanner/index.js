import React, { useRef, useEffect, useState, useCallback, memo } from 'react';
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style';
import { connect } from 'react-redux';
import { getTopBannersAction } from '../../store/actionCreator';
import { Carousel } from 'antd';

function TopBanner(props) {
  const { dispatch, topBanners } = props;
  // 使用hooks来像原来的生命周期函数一样使用
  useEffect(() => {
    dispatch(getTopBannersAction());
  }, [dispatch]);

  const carouselRef = useRef();

  const [currentIndex, setCurrentIndex] = useState(0);

  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, []);

  const bgImage =
    topBanners &&
    topBanners[currentIndex] &&
    topBanners[currentIndex].imageUrl + '?imageView&blur=40x20';

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay={true}
            ref={carouselRef}
            beforeChange={bannerChange}
          >
            {topBanners &&
              topBanners.map((item) => {
                return (
                  <div key={item.imageUrl}>
                    <img src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                );
              })}
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <a
            href="https://music.163.com/#/download"
            target="_blank"
            rel="noreferrer"
          >
            下载客户端
          </a>
          <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
        </BannerRight>
        <BannerControl>
          <button
            className="btn"
            onClick={() => carouselRef.current.prev()}
          ></button>
          <button
            className="btn"
            onClick={() => carouselRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
}

//把store中的数据映射到这个组件变成props
const mapStateToProps = (state) => {
  return {
    topBanners: state.recommendReducer.topBanners,
  };
};

export default connect(mapStateToProps)(memo(TopBanner));
