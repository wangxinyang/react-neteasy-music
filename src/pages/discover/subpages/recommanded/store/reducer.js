import * as actionTypes from './actionTypes';

const initalData = {
  topBanners: [],
  hotRecommandeds: [],
};

function reducer(state = initalData, action) {
  switch (action.type) {
    case actionTypes.GET_TOP_BANNERS:
      if (action.topBanners) {
        let topBannersData = [...action.topBanners];
        return Object.assign({}, state, { topBanners: topBannersData });
      } else {
        return state;
      }
    case actionTypes.GET_HOT_RECOMMANDED:
      if (action.hotRecommandeds) {
        let hotRecommandedsData = [...action.hotRecommandeds];
        return Object.assign({}, state, {
          hotRecommandeds: hotRecommandedsData,
        });
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default reducer;
