// pages-mx/pages/index/index.js
Page({
  data: {
    pageUrl: "https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/c2b/zy-fe/amp-images/ad1.jpg"
  },
  onLoad: function (options) {
    // TODO 请求数据
    setTimeout(() => {
      this.setData({
        pageUrl: "https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/c2b/zy-fe/amp-images/ad1.jpg"
      })
    }, 1000)
  }
})
