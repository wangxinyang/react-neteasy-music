import http from './http';

export function getTopBanners() {
  return http.get('/banner');
}
