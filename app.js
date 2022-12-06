// app.js
App({
  onLaunch: function() {
    const info = wx.getSystemInfoSync()
    this.globalData.screenHeight = info.screenHeight
    this.globalData.screenWidth = info.screenWidth
    console.log(info)
  },

  globalData: {
    screenWidth: 0,
    screenHeight: 0
  }

})
