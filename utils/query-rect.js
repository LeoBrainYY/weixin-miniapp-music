export default function (selector) {
  // 获取图片高度(image组件的宽度和高度)
  return new Promise((resolve) => {
    const query = wx.createSelectorQuery()
    query.select(selector).boundingClientRect()
    query.exec((res) => {
      // 矩形
      // const rect = res[0]
      // console.log(rect.height);
      // 动态赋值轮播图组件image的的高度
      // this.setData({swiperHeight: rect.height})
      resolve(res)
    })
  })
}