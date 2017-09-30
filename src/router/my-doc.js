export default[
  {
    path: '/my-doc',
    component: () => import("../pages/my-pat/index.vue")
},{
    path: '/patientList',
    component: () => import("../pages/my-pat/patientList.vue")
},
]