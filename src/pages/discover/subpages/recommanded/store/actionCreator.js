import {
  getTopBanners,
  getHotRecommanded,
  getNewAlbum,
  getRanking,
} from '../../../../../service/recommanded';
import * as actionTypes from './actionTypes';

// 获取轮播图banner的action
export const topBannerAction = (res) => ({
  type: actionTypes.GET_TOP_BANNERS,
  topBanners: res.banners,
});

// 获取热门推荐的action
export const hotRecommandedAction = (res) => ({
  type: actionTypes.GET_HOT_RECOMMANDED,
  hotRecommandeds: res.result,
});

// 获取热门推荐的action
export const newAlbumAction = (res) => ({
  type: actionTypes.GET_NEW_ALBUM,
  newAlbum: res.albums,
});

// 获取飙升榜的action
export const upRankingAction = (res) => ({
  type: actionTypes.GET_UP_RANKING,
  upRanking: res.playlist,
});

// 获取新歌榜的action
export const newRankingAction = (res) => ({
  type: actionTypes.GET_NEW_RANKING,
  newRanking: res.playlist,
});

// 获取原创榜的action
export const originRankingAction = (res) => ({
  type: actionTypes.GET_ORIGIN_RANKING,
  originRanking: res.playlist,
});

// --------------------------------------------------------------
// 发送网络请求将结果传递给派发的Action中 (react-redux可以让该函数返回一个函数而不是返回一个对象: redux-thunk使用)
// 轮播图network request
export const getTopBannersAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(topBannerAction(res));
    });
  };
};

// 热门推荐请求
export const getHotRecommandedAction = (limit) => {
  return (dispatch) => {
    getHotRecommanded(limit).then((res) => {
      dispatch(hotRecommandedAction(res));
    });
  };
};

// 新碟上架请求
export const getNewAlbumAction = () => {
  return (dispatch) => {
    getNewAlbum().then((res) => {
      dispatch(newAlbumAction(res));
    });
  };
};

// 排行榜请求
export const getRankingAction = (index) => {
  return (dispatch) => {
    getRanking(index).then((res) => {
      switch (index) {
        case 19723756:
          dispatch(upRankingAction(res));
          break;
        case 3779629:
          dispatch(newRankingAction(res));
          break;
        case 2884035:
          dispatch(originRankingAction(res));
          break;
        default:
      }
    });
  };
};
