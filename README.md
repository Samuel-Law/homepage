 "animation": "fadeInDown" // 向下淡入
 "animation": "fadeInLeft" // 向左淡入
 "animation": "fadeInRight" // 向右淡入
 "animation": "fadeInUp" // 向上淡入



type: "carousel"  // 轮播图
type: "imgBox"    // 图片框
type: "banner"    // banner横条单图  
type: "banner2"   // banner横条多图
type: "example"   // 示例
type: "about"     // 关于我们
type: "bussiness" // 企业信息
type: "bigImage"  // 大图

示例：
{
  "header": {
    "title": "珠海市佳创兴精密机械有限公司",
    "desc": "公司主营：食品机械生产、来料加工、非标零件加工、不锈钢搅龙",
    "phone": "000-000-000"
  },

  "showList": [
    {
      "type": "carousel",
      "animation": false,
      "images": [
        "/images/carousel_1.png",
        "/images/carousel_1.png",
        "/images/carousel_1.png"
      ]
    },
    {
      "type": "imgBox",
      "title": "加工环境",
      "animation": "fadeInU",
      "images": [
        "/images/carousel_1.png",
        "/images/carousel_1.png",
        "/images/carousel_1.png"
      ]
    },
    {
      "type": "bigImage",
      "url": "/images/description.jpg"
    },
    {
      "type": "banner2",
      "title": "XX市XX区",
      "text": "数据系统 恒温烤制",
      "desc": "数据系统 恒温烤制",
      "images": [
        "/images/carousel_1.png",
        "/images/carousel_1.png",
        "/images/carousel_1.png"
      ]
    },
    {
      "type": "imgBox",
      "title": "企业文化",
      "images": [
        "/images/carousel_1.png",
        "/images/carousel_1.png",
        "/images/carousel_1.png",
        "/images/carousel_1.png"
      ]
    },
    {
      "type": "banner",
      "title": "XX市XX区",
      "text": "数据系统 恒温烤制",
      "desc": "数据系统 恒温烤制",
      "images": "/images/carousel_1.png"
    },
    {
      "type": "example",
      "title": "客户案例",
      "images": [
        { "url": "/images/carousel_1.png", "text": "希尔顿酒店购买烙馍机" },
        { "url": "/images/carousel_1.png", "text": "希尔顿酒店购买烙馍机" },
        { "url": "/images/carousel_1.png", "text": "希尔顿酒店购买烙馍机" },
        { "url": "/images/carousel_1.png", "text": "希尔顿酒店购买烙馍机" }
      ]
    },
    {
      "type": "about",
      "title": "关于我们",
      "animation": "fadeInUp",
      "text": "XX机械厂是从事食品机械研发、生产、销售的企业。公司成立于20XX年，主营食品机械、来料加工、非标零件加工、不锈钢搅龙、upe搅龙等销售业务。公司坚持以质量求生存，以效益谋发展，以服务求信誉的经营策略。不断研发新产品，扩展经营领域，推动企业发展。 公司秉承“顾客上，锐意进取”的经营理念，为广大客户提供优质的服务。我们一直以饱满的热情、完善的服务、真诚的合作态度，热忱欢迎新老用户前来...",
      "images": [
        "/images/carousel_1.png",
        "/images/carousel_1.png",
        "/images/carousel_1.png"
      ]
    },
    {
      "type": "banner",
      "title": "XX市XX区",
      "text": "数据系统 恒温烤制",
      "images": ""
    },
    {
      "type": "bussiness",
      "title": "企业名片",
      "label": "珠海市佳创兴精密机械有限公司",
      "content": [
        {
          "label": "地址",
          "text": "XXX省XXX市XXX县XXX路XXX号"
        },
        {
          "label": "联系人",
          "text": "周经理"
        },
        {
          "label": "地址",
          "text": "XXX省XXX市XXX县XXX路XXX号"
        },
        {
          "label": "电话",
          "text": "XXX省XXX市XXX县XXX路XXX号"
        },
        {
          "label": "地址",
          "text": "XXX省XXX市XXX县XXX路XXX号"
        }
      ]
    }
  ],
  "footer": "珠海市佳创兴精密机械有限公司"
}
