const menuList = [
    {
      key: 'hot',
      title: '热销top',
      type: '热销',
      checked: false,
      goodList: [
          
      ]
    },
    {
        key: 'package1',
        title: '套餐一',
        type: '套餐一',
        checked: false,
        goodList: []
    },
    {
        key: 'package2',
        title: '套餐二',
        type: '套餐二',
        checked: false,
        goodList: []
    },
    {
        key: 'normal',
        title: '正常',
        type: '正常',
        checked: false,
        goodList: []
    },
    {
        key: 'rich',
        title: '高价',
        type: '高价',
        checked: false,
        goodList: []
    }
  ]
  for(const item of menuList) {
      const title = item.title
      item.goodList = [
        {
          num: 200,
          up: 30,
          price: '20.00',
          origin_price: '30.00',
          exist: true,
          selected_price: 1,
          desc: `辣椒炒肉${title}`,
          title: `辣椒炒肉${title}`,
          checked: true,
          month_sales: 500,
          praise: 20,
          thumb: '//s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/7a5ff05b334e0debdd10954a7f5d4789.png'
        },
        {
          num: 200,
          up: 30,
          price: '18.00',
          selected_price: 0,
          origin_price: '26.00',
          desc: `香干炒肉${title}`,
          title: `香干炒肉${title}`,
          month_sales: 500,
          praise: 20,
          checked: false,
          thumb: 'https://p0.meituan.net/business/80cee9b7af5ee27849993c1ac7723eec519456.png@180w_132h_1e_1c?cimage=true'
        },
        {
          num: 200,
          up: 30,
          price: '30.00',
          selected_price: 1,
          origin_price:'46.00',
          desc: `豆鼓油鸡${title}`,
          title: `豆鼓油鸡${title}`,
          month_sales: 500,
          praise: 20,
          checked: false,
          thumb: 'https://p0.meituan.net/business/482b302d6ae573c92300ec47828b0544147081.jpg@180w_132h_1e_1c?cimage=true'
        },
        {
          num: 200,
          up: 30,
          price: '12.00',
          selected_price: 0,
          origin_price: '26.00',
          desc: `油豆腐${title}`,
          title: `油豆腐${title}`,
          month_sales: 500,
          praise: 20,
          checked: false,
          thumb: 'https://p0.meituan.net/business/482b302d6ae573c92300ec47828b0544147081.jpg@180w_132h_1e_1c?cimage=true'
        }
      ]
    } 
  
  export default menuList;