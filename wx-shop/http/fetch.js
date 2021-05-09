module.exports=(url,data,method)=>{
  let p=new Promise((resolve,reject)=>{
    wx.request({
      url: url,
      data:data,
      method:method,
      success(res){
        resolve(res)
      },
      fail(err){
        reject(err)
      }
    })
  })
  return p
}