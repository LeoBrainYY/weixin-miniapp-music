// pages/home-music/index.js
import { rankingStore } from '../../store/index'

import { getBanners, getSomeMenu } from '../../service/api_music'
import queryRect from '../../utils/query-rect'
import throttle from '../../utils/throttle'

const throttleQueryRect = throttle(queryRect)

Page({
  data: {
    banners: [],
    swiperHeight: 60,
    hotSomeMenu: [],
    recommendSomeMenu: [],

    recommendSongs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获取页面数据
    this.getPageData()

    // sending sharing data(发起共享数据)
    rankingStore.dispatch('getRankingDataAction')

    // get data from store of sharing
    rankingStore.onState('hotRanking', (res) => {
      // console.log(res, 'homemusic')
      // 如果没有值 直接return
      if (!res.tracks) return 
      const recommendSongs = res.tracks.slice(0, 6)
      // console.log(recommendSongs)
      this.setData({ recommendSongs })
    })
  },

  // 网络请求
  getPageData: function() {
    getBanners().then(res => {
      // setData再设置data数据上 是同步的
      // 通过最新的数据对wxml进行渲染 渲染的过程是异步的
      this.setData({ banners: res.banners})
    })

    getSomeMenu().then(res => {
      this.setData({ hotSomeMenu: res.playlists })
    })
  },

  // 事件处理
  handleSearchClick: function() {
    wx.navigateTo({
      url: '/pages/detail-search/index',
    })
  },

  handleSwiperImageLoaded: function() {
    throttleQueryRect('.swiper-image').then((res) => {
      const rect = res[0]
      // console.log(rect.height);
      // 动态赋值轮播图组件image的的高度
      this.setData({swiperHeight: rect.height})
    })
  }
  
})
