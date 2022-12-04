import cyRequest from './index'

export function getBanners() {
  return cyRequest.get('/banner', {
    type: 2
  })
}

export function getRankings() {
  return cyRequest.get('/top/list', {
    id: 2884035
  })
}