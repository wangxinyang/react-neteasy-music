/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { HotRecommandedWrapper } from './style';
import ThemeHeader from '../../../../../../componets/theme-header';
import SongCover from '../../../../../../componets/song-cover';
import { getHotRecommandedAction } from '../../store/actionCreator';
import { HOT_RECOMMEND_LIMIT } from '../../../../../../common/constants';

function HotRecommanded(props) {
  const { dispatch, hotRecommandeds } = props;
  useEffect(() => {
    dispatch(getHotRecommandedAction(HOT_RECOMMEND_LIMIT));
  }, []);

  return (
    <HotRecommandedWrapper>
      {/* 共通的头部组件 */}
      <ThemeHeader
        title="热门推荐"
        keywords={['华语', '流行', '摇滚', '民谣', '电子']}
      />
      {/* 列表的内容 */}
      <div className="recommend-list">
        {hotRecommandeds &&
          hotRecommandeds.map((item, index) => {
            return (
              <SongCover key={item.id} info={item} className="recommend-list">
                {item.name}
              </SongCover>
            );
          })}
      </div>
    </HotRecommandedWrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    hotRecommandeds: state.recommendReducer.hotRecommandeds,
  };
};

export default connect(mapStateToProps)(memo(HotRecommanded));
