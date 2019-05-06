import http from '../services/request';

export function insertProductType(params) {
  return http.post('/api/insertProductType', params);
}

export function getProductTypeList(params) {
  return http.post('/api/getProductTypeList', params);
}

export function removeProductType(params) {
  return http.post('/api/removeProductType', params);
}


export function insertProduct(params) {
  return http.post('/api/insertProduct', params);
}

export function getProductList(params) {
  return http.post('/api/getProductList', params);
}

export function removeProduct(params) {
  return http.post('/api/removeProduct', params);
}
