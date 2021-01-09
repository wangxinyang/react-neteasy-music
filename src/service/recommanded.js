import http from './http';

// 发起请求轮播图的request
export function getTopBanners() {
  return http.get('/banner');
}

// 发起请求热门推荐的request
export function getHotRecommanded(limit) {
  return http.get('/personalized', { params: { limit: limit } });
}

// 发起请求新碟上架的request
export function getNewAlbum() {
  return http.get('/album/newest');
}
