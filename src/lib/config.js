export default {
  api_url: "//test-api-ywfy.hztywl.cn/app",
  base_params: {
    channel: "23",
    format: "JSON",
    oper: "127.0.0.1",
    random: "1234",
    sign: "3f52f63fad63c5dd209d28420977fb5d",
    spid: "1001",
  },
  nav:[
    {name: "home", value: "首页"},
    {name: "my-doc", value: "患者"},
    {name: "health", value: "健康"},
    {name: "my", value: "我的"}
  ],
  my_pat_nav: [
    {name: "guide", value: "群发消息"},
    {name: "book", value: "患者管理",route:"/patientList"},
    {name: "queuing", value: "医生圈"}
  ],
  base_home:[
    {
      value:"图文咨询",
      name:"guide"
    }, {
      value:"视频咨询",
      name: "book",
    }, {
      value:"远程会诊",
      name: "queuing",
    }, {
      value:"远程办公",
      name: "payment",
    }, {
      value:"停诊公告",
      name: "report",
    }, {
      value:"我的名片",
      name: "steward",
    }, {
      value:"我的团队",
      name: "help",
    }, {
      value:"更多",
      name: "more"
    }
  ]
}
