import http from '../services/request';

export function getOrderList(params) {
  return http.get('/api/getOrderList', { params });
}

export function insertOrder(params) {
  return http.post('/api/insertOrder', params);
}


export function getPhoneNumList(params) {
  return http.get('/api/getPhoneNumberList', { params });
}

export function getSaleByList(params) {
  return http.get('/api/getSaleByList', { params });
}


export function removeOrderById(params) {
  return http.post('/api/removeOrderById', params);
}



