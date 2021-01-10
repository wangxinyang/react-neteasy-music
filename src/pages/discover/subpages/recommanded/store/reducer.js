import * as actionTypes from './actionTypes';

const initalData = {
  topBanners: [],
  hotRecommandeds: [],
  newAlbum: [],
  upRanking: {},
  newRanking: {},
  originRanking: {},
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
    case actionTypes.GET_NEW_ALBUM:
      if (action.newAlbum) {
        let newAlbumData = [...action.newAlbum];
        return Object.assign({}, state, {
          newAlbum: newAlbumData,
        });
      } else {
        return state;
      }
    case actionTypes.GET_UP_RANKING:
      if (action.upRanking) {
        let upRanking = { ...action.upRanking };
        return Object.assign({}, state, {
          upRanking,
        });
      } else {
        return state;
      }
    case actionTypes.GET_NEW_RANKING:
      if (action.newRanking) {
        let newRanking = { ...action.newRanking };
        return Object.assign({}, state, {
          newRanking,
        });
      } else {
        return state;
      }
    case actionTypes.GET_ORIGIN_RANKING:
      if (action.originRanking) {
        let originRanking = { ...action.originRanking };
        return Object.assign({}, state, {
          originRanking,
        });
      } else {
        return state;
      }
    default:
      return state;
  }
}

export default reducer;
