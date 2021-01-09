import React, { useEffect, useRef, memo } from 'react';
import { connect } from 'react-redux';
import { NewAlbumWrapper } from './style';
import { getNewAlbumAction } from '../../store/actionCreator';
import ThemeHeader from '../../../../../../componets/theme-header';
import AlbumCover from '../../../../../../componets/album-cover';
import { Carousel } from 'antd';

function NewAlbum(props) {
  const { dispatch, newAlbum } = props;

  const albumRef = useRef();

  useEffect(() => {
    dispatch(getNewAlbumAction());
  }, [dispatch]);

  return (
    <NewAlbumWrapper>
      {/* 共通的头部组件 */}
      <ThemeHeader title="新碟上架" />
      {/* 列表的内容 */}
      <div className="content">
        <div className="inner">
          <Carousel dots={false} ref={albumRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="album-items">
                  {newAlbum &&
                    newAlbum
                      .slice(item * 5, (item + 1) * 5)
                      .map((cItem, index) => {
                        return (
                          <AlbumCover
                            key={cItem.id}
                            info={cItem}
                            width="118px"
                            height="150px"
                            position="-570px"
                            size={100}
                          >
                            {cItem.name}
                          </AlbumCover>
                        );
                      })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <div
          className="sprite_02 arrow arrow-left"
          onClick={(e) => albumRef.current.prev()}
        ></div>
        <div
          className="sprite_02 arrow arrow-right"
          onClick={(e) => albumRef.current.next()}
        ></div>
      </div>
    </NewAlbumWrapper>
  );
}

const mapStateToProps = (state) => {
  console.log(state.recommendReducer.newAlbum);
  return {
    newAlbum: state.recommendReducer.newAlbum,
  };
};

export default connect(mapStateToProps)(memo(NewAlbum));
