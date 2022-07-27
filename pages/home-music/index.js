// pages/home-music/index.js
import { getBanners } from '../../service/api_music'
import queryRect from '../../utils/query-rect'

Page({
  data: {
    banners: [],
    swiperHeight: 60
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获取页面数据
    this.getPageData()
  },

  // 网络请求
  getPageData: function() {
    getBanners().then(res => {
      this.setData({ banners: res.banners})
    })
  },

  // 事件处理
  handleSearchClick: function() {
    wx.navigateTo({
      url: '/pages/detail-search/index',
    })
  },

  handleSwiperImageLoaded: function() {
    queryRect('.swiper-image').then((res) => {
      const rect = res[0]
      // console.log(rect.height);
      // 动态赋值轮播图组件image的的高度
      this.setData({swiperHeight: rect.height})
    })
  }
  
})