import cyRequest from './index'

export function getBanners() {
  return cyRequest.get('/banner', {
    type: 2
  })
}