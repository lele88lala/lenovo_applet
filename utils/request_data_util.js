//统一网络请求接口
function request(url, success, method = "", header = {},data) {
  wx.request({
    url: url,
    // data: {userName:'呵呵'},
    data:data,
    method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
    header: header ? header : "application/json", // 设置请求的 header
    success: function (res) {
      success(res);
    },
    fail: function () {
      // fail
    },
    complete: function () {
      // complete
    }
  })
}
module.exports = {
  request: request
}