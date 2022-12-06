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

export function getSomeMenu(cat="全部", limit=6, offset=0) {
  return cyRequest.get('/top/playlist', {
    cat,
    limit,
    offset
  })
}