// pages-mx/pages/index/index.js
Page({
  imgList: [],
  onLoad: function (options) {
    // TODO 请求数据
    setTimeout(() => {
      this.setData({
        imgList: [
          {
            url: "https://sr.aihuishou.com/image/56a1eef53267ea3042000055.png"
          },
          {
            url: "https://sr.aihuishou.com/image/56a1eef53267ea3042000055.png"
          },
          {
            url: "https://sr.aihuishou.com/image/56a1eef53267ea3042000055.png"
          },
          {
            url: "https://sr.aihuishou.com/image/56a1eef53267ea3042000055.png"
          },
          {
            url: "https://sr.aihuishou.com/image/56a1eef53267ea3042000055.png"
          },
          {
            url: "https://sr.aihuishou.com/image/56a1eef53267ea3042000055.png"
          },
          {
            url: "https://sr.aihuishou.com/image/56a1eef53267ea3042000055.png"
          },
          {
            url: "https://sr.aihuishou.com/image/56a1eef53267ea3042000055.png"
          },
          {
            url: "https://sr.aihuishou.com/image/56a1eef53267ea3042000055.png"
          },
          {
            url: "https://sr.aihuishou.com/image/56a1eef53267ea3042000055.png"
          },
          {
            url: "https://sr.aihuishou.com/image/56a1eef53267ea3042000055.png"
          },
          {
            url: "https://sr.aihuishou.com/image/56a1eef53267ea3042000055.png"
          },
          {
            url: "https://sr.aihuishou.com/image/56a1eef53267ea3042000055.png"
          },
          {
            url: "https://sr.aihuishou.com/image/56a1eef53267ea3042000055.png"
          },
        ]
      })
    }, 1000)
  },
  previewImage: function(e) {
    let data = e.currentTarget.dataset
    data.list = data.list.map(item => item.url)
    wx.previewImage({
      current: data.url, // 当前显示图片的http链接
      urls: data.list // 需要预览的图片http链接列表
    })
  }
})
