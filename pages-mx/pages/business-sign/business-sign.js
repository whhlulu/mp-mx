Page({
  data: {
    signTypeItems: [
      "舞蹈", "语音", "模特", "曲艺", "其他"
    ],
    businessList: [
      { id: 1, name: '我是机构一' },
      { id: 2, name: '我是机构2' },
      { id: 3, name: '我是机构3' },
      { id: 4, name: '我是机构4' }
    ], // 需要从接口获取机构列表
    businessIndex: -1, // 当前选中的机构列表
    region: ['江西省', '南昌市', '东湖区'],
    customItem: '全部'
  },
  onLoad: function (options) {

  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e)
    this.setData({
      businessIndex: e.detail.value
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
})
