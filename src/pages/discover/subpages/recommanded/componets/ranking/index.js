/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { RankingWrapper } from './style';
import { getRankingAction } from '../../store/actionCreator';
import ThemeHeader from '../../../../../../componets/theme-header';
import TopList from '../../../../../../componets/top-list';

function Ranking(props) {
  const {
    dispatch,
    upRanking = [],
    originRanking = [],
    newRanking = [],
  } = props;

  useEffect(() => {
    dispatch(getRankingAction(19723756));
  }, []);

  useEffect(() => {
    dispatch(getRankingAction(3779629));
  }, []);

  useEffect(() => {
    dispatch(getRankingAction(2884035));
  }, []);

  return (
    <RankingWrapper>
      {/* 共通的头部组件 */}
      <ThemeHeader title="榜单" />
      <div className="blist">
        <TopList info={upRanking} />
        <TopList info={originRanking} />
        <TopList info={newRanking} />
      </div>
    </RankingWrapper>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    upRanking: state.recommendReducer.upRanking,
    originRanking: state.recommendReducer.originRanking,
    newRanking: state.recommendReducer.newRanking,
  };
};

export default connect(mapStateToProps)(memo(Ranking));
