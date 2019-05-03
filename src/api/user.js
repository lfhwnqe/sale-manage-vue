import http from '../services/request';

/** 管理员创建用户 **/
export function createUser(params) {
  return http.post('/api/createUser', params);
}

/** 管理员获取下属用户列表 **/
export function getUserList(params) {
  return http.get('/api/getUserList', params);
}
