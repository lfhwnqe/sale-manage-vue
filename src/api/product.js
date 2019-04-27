import http from '../services/request';

export function insertProductType(params) {
  return http.post('/api/insertProductType', params);
}

export function getProductTypeList(params) {
  return http.post('/api/getProductTypeList', params);
}

export function removeProductTypeList(params) {
  return http.post('/api/removeProductTypeList', params);
}

