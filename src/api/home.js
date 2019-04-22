import http from '../services/request';

export function geTotalRevenueStatics(params) {
  return http.post('/api/geTotalRevenueStatics',params)
}

