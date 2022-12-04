// const BASE_URL = "http://123.207.32.32:9001"
// const BASE_URL = "https://coderwhy-music.vercel.app"
const BASE_URL = "http://codercba.com:9002"

class CYRequest {
  request(url, method, params) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: BASE_URL + url,
        method: method,
        data: params,
        success: function(res) {
          resolve(res.data)
        },
        fail: function(err) {
          reject(err)
        }
      })
    })
  }

  get(url, params) {
    return this.request(url, "GET", params)
  }

  post(url, data) {
    return this.request(url, "POST", data)
  }
}

const cyRequest = new CYRequest()

export default cyRequest
