import http from '../services/request';

export function getStatics(params) {
  return http.get('/api/littleOrder/getStatics', { params });
}
