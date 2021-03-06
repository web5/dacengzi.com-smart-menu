import navsidler from './navsider'

const goodList = {}
for(const item of navsidler) {
  const key = item.key
  goodList[key] = [
    {
      key: `001${key}`,
      num: 200,
      up: 30,
      price: '20.00',
      desc: `辣椒炒肉${key}`,
      title: `辣椒炒肉${key}`,
      checked: 1,
      month_sales: 500,
      praise: 20,
      thumb: '//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/7a5ff05b334e0debdd10954a7f5d4789.png'
    },
    {
      key: `002${key}`,
      num: 200,
      up: 50,
      price: '18.00',
      desc: `香干炒肉${key}`,
      title: `香干炒肉${key}`,
      month_sales: 500,
      praise: 20,
      checked: 0,
      thumb: 'https://p0.meituan.net/business/80cee9b7af5ee27849993c1ac7723eec519456.png@180w_132h_1e_1c?cimage=true'
    },
    {
      key: `003${key}`,
      num: 200,
      up: 30,
      price: '30.00',
      desc: `豆鼓油鸡${key}`,
      title: `豆鼓油鸡${key}`,
      month_sales: 500,
      praise: 20,
      checked: 0,
      thumb: 'https://p0.meituan.net/business/482b302d6ae573c92300ec47828b0544147081.jpg@180w_132h_1e_1c?cimage=true'
    }
  ]
} 
export default goodList;