import http from '../services/request';

export function getOrderList(params) {
  return http.get('/api/getOrderList', {params})
}

