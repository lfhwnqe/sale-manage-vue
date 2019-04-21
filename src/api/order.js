import http from '../services/request';

export function getOrderList(params) {
  return http.get('/api/getOrderList', {params})
}

export function insertOrder(params) {
  return http.post('/api/insertOrder', params)
}
