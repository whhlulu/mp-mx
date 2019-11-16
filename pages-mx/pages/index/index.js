// pages-mx/pages/index/index.js
Page({
  data: {
    bottomTips: '@《萌心童乐·新年盛典》组委会', // 底部文案
    imgList: [], // 首页轮播数据
  },
  onLoad: function (options) {
    // TODO 请求数据
    setTimeout(() => {
      this.setData({
        bottomTips: '@《萌心童乐·新年盛典》组委会', // 底部文案
        imgList: ['https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/c2b/zy-fe/amp-images/top.png'], // 首页轮播数据
        pageUrl: {
          notice: 'https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/c2b/zy-fe/amp-images/ad2.jpg',
          advert: 'https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/c2b/zy-fe/amp-images/ad1.jpg',
          about: 'https://aihuishou-internal.oss-cn-hangzhou.aliyuncs.com/c2b/zy-fe/amp-images/ad3.jpg'
        },
      })
    }, 1000)

  }
})
