// pages/home-video/index.js
import { getTopMV } from '../../service/api_video'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topMVs: [],
    hasMore: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // getTopMV(0).then(res => {
    //   this.setData({ topMVs: res.data })
    // })

    // async await
    // const res = await getTopMV(0)
    // this.setData({ topMVs: res.data})
    // console.log(res);

    this.getTopMVData(0)
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },
  // 封装网络请求的方法
  getTopMVData: async function (offset) {
    // 判断是否可以请求
    if(!this.data.hasMore) return 

    // 展示加载动画
    wx.showNavigationBarLoading()

    // 真正请求数据
    const res = await getTopMV(offset)
    // console.log(this.data.topMVs); //[]
    let newData = this.data.topMVs
    if(offset === 0) {
      newData = res.data
    } else {
      newData = newData.concat(res.data)
    }
    this.setData({ topMVs: newData})
    this.setData({ hasMore: res.hasMore})
    wx.hideNavigationBarLoading()

    if(offset == 0) {
      wx.stopPullDownRefresh()
    }
  },

  // 封装事件处理
  handleItemVideoClick: function (event) {
    // 获取点击id
    const id = event.currentTarget.dataset.item.id
    wx.navigateTo({
      url: '/pages/detail-video/index?id=' + id,
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: async function() {
    // 下拉刷新重新获取数据
    // 直接覆盖原数组的数据
    // const res = await getTopMV(0)
    // this.setData({ topMVs: res.data})

    this.getTopMVData(0)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: async function() {
    // 判断数据是否已获取完
    // hasMore参数为false时，数据已经获取完
    // if(!this.data.hasMore) return 
    // 偏移量就是获取数据长度
    // const res = await getTopMV(this.data.topMVs.length)
    // this.setData({ topMVs: this.data.topMVs.concat(res.data) })
    // this.setData({ hasMore: res.hasMore})
    this.getTopMVData(this.data.topMVs.length)
  }
})