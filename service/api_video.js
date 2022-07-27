import cyRequest from './index'

export function getTopMV(offset, limit = 10) {
  return cyRequest.get("/top/mv", {
    offset, 
    limit
  })
}

/**
 * 请求MV播放地址
 * @param {number} id mv 
 */
export function getMVURL(id) {
  return cyRequest.get("/mv/url", {
    id
  })
}

/**
 * 请求MV详情页
 * @param {number} mvid 
 */
export function getMVDetail(mvid) {
  return cyRequest.get("/mv/detail", {
    mvid
  })
}

/**
 * 请求相关视频列表
 * @param {*} id 
 */
export function getRelatedVideo(id) {
  return cyRequest.get("/related/allvideo", {
    id
  })
}