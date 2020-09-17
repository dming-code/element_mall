import {request} from './request'

export function getCategory(type, pagenum, pagesize) {
  return request({
    url: '/categories',
    method: 'get',
    params: {
      type,
      pagenum,
      pagesize
    }
  })
}

export function getCateList(type) {
  return request({
    url: 'categories',
    method: 'get',
    params: {
      type
    }
  })
}

export function addCateList(data) {
  return request({
    url: 'categories',
    method: 'post',
    data
  })
}