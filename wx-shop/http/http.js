const api = require('./api');
let p=require('./fetch');
let baseUrl="https://api-hmugo-web.itheima.net/api/public/v1";
function banner(){
  return p(baseUrl+api.swiper,{},'get')
}
function cate(){
  return p(baseUrl+api.cate,{},'get')
}
function floor(){
  return p(baseUrl+api.floordata,{},"get")
}
function categories(){
  return p(baseUrl+api.categories,{},"get")
}
function qsearch(){
  return p(baseUrl+api.qsearch,{},"get")
}
module.exports={
  banner,cate,floor,categories,qsearch
}