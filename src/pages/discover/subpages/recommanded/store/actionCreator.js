import {
  getTopBanners,
  getHotRecommanded,
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

//
export const getHotRecommandedAction = (limit) => {
  return (dispatch) => {
    getHotRecommanded(limit).then((res) => {
      dispatch(hotRecommandedAction(res));
    });
  };
};
