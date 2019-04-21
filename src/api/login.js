import http from '../services/request';

export function userLogin(params) {
  return http.post('/api/login', params);
}

export function showUserList(params) {
  return http.get('/api/getUserList', { params });
}
