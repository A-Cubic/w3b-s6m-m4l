export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      { path: '/user/register', component: './User/Register' },
      { path: '/user/register-result', component: './User/RegisterResult' },
    ],
  },
  // app
  {
    path: '/mall',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // 全部分类
      {
        path: '/mall/category',
        name: 'category',
        routes: [
          {
            icon: 'smile',
            path: '/mall/category/from/:category',
            name:'from',
            target: '_blank',
            // hideInMenu: true,
            component: './Category/Category',
          },
          {
            icon: 'smile',
            path: '/mall/category/mu/:category=1',
            name:'mu',
            target: '_blank',
            component: './Category/Category',
          },
          {
            icon: 'coffee',
            path: '/mall/category/jia/:category=2',
            name:'jia',
            component: './Category/Category',
          },
          {
            icon: 'user',
            path: '/mall/category/ge',
            name:'ge',
            component: './Category/Category',
          },
          {
            icon: 'heart',
            path: '/mall/category/mei',
            name:'mei',
            component: './Category/Category',
          },
          {
            icon: 'safety',
            path: '/mall/category/shi',
            name:'shi',
            component: './Category/Category',
          },
          {
            icon: 'skin',
            path: '/mall/category/fu',
            name:'fu',
            component: './Category/Category',
          },
        ],
      },
      // Home
      {
        name: 'Home',
        path: '/mall/home',
        component: './Home/Home',
      },
      // JapanPavilion
      {
        name: 'JapanPavilion',
        path: '/mall/JapanPavilion',
        // hideChildrenInMenu: true,
        routes: [
          {
            path: '/mall/JapanPavilion',
            redirect: '/mall/JapanPavilion/JapanPavilion',
          },
          {
            path: '/mall/JapanPavilion/JapanPavilion',
            component: './JapanPavilion/JapanPavilion',
            hideInMenu: true,
          },
        ],
      },
      //韩国馆
      {
        name: 'KoreaPavilion',
        path: '/mall/KoreaPavilion',
        component: './KoreaPavilion/KoreaPavilion',
      },
      //欧美馆
      // {
      //   name: 'EuropeanAmericanPavilion',
      //   path: '/EuropeanAmericanPavilion',
      //   component: './EuropeanAmericanPavilion/EuropeanAmericanPavilion',
      // },
      //临期促销专区
      // {
      //   name: 'PromotionArea',
      //   path: '/mall/PromotionArea',
      //   component: './PromotionArea/PromotionArea',
      // },
      //商品详情
      {
          path: '/mall/goodsDetails/:barcode',
          name: 'goodsDetails',
          component: './GoodsDetails/GoodsDetails',
      },
      //品牌页
      {
          path: '/mall/brand/:brandsName',
          name: 'brand',
          component: './Brand/Brand',
      },
      //搜索结果页
      {
          path: '/mall/search',
          name: 'search',
          component: './Search/Search',
      },
      // dashboard
      { path: '/mall', redirect: '/mall/home' },
      {
        path: '/mall/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          {
            path: '/mall/dashboard/analysis',
            name: 'analysis',
            component: './Dashboard/Analysis',
          },
          {
            path: '/mall/dashboard/monitor',
            name: 'monitor',
            component: './Dashboard/Monitor',
          },
          {
            path: '/mall/dashboard/workplace',
            name: 'workplace',
            component: './Dashboard/Workplace',
          },
        ],
      },
      // forms
      {
        path: '/mall/form',
        icon: 'form',
        name: 'form',
        routes: [
          {
            path: '/mall/form/basic-form',
            name: 'basicform',
            component: './Forms/BasicForm',
          },
          {
            path: '/mall/form/step-form',
            name: 'stepform',
            component: './Forms/StepForm',
            hideChildrenInMenu: true,
            routes: [
              {
                path: '/mall/form/step-form',
                redirect: '/form/step-form/info',
              },
              {
                path: '/mall/form/step-form/info',
                name: 'info',
                component: './Forms/StepForm/Step1',
              },
              {
                path: '/mall/form/step-form/confirm',
                name: 'confirm',
                component: './Forms/StepForm/Step2',
              },
              {
                path: '/mall/form/step-form/result',
                name: 'result',
                component: './Forms/StepForm/Step3',
              },
            ],
          },
          {
            path: '/mall/form/advanced-form',
            name: 'advancedform',
            // authority: ['admin'],
            component: './Forms/AdvancedForm',
          },
        ],
      },
      // list
      {
        path: '/mall/list',
        icon: 'table',
        name: 'list',
        routes: [
          {
            path: '/mall/list/table-list',
            name: 'searchtable',
            component: './List/TableList',
          },
          {
            path: '/mall/list/basic-list',
            name: 'basiclist',
            component: './List/BasicList',
          },
          {
            path: '/mall/list/card-list',
            name: 'cardlist',
            component: './List/CardList',
          },
          {
            path: '/mall/list/search',
            name: 'searchlist',
            component: './List/List',
            routes: [
              {
                path: '/mall/list/search',
                redirect: '/mall/list/search/articles',
              },
              {
                path: '/mall/list/search/articles',
                name: 'articles',
                component: './List/Articles',
              },
              {
                path: '/mall/list/search/projects',
                name: 'projects',
                component: './List/Projects',
              },
              {
                path: '/mall/list/search/applications',
                name: 'applications',
                component: './List/Applications',
              },
            ],
          },
        ],
      },
      {
        path: '/mall/profile',
        name: 'profile',
        icon: 'profile',
        routes: [
          // profile
          {
            path: '/mall/profile/basic',
            name: 'basic',
            component: './Profile/BasicProfile',
          },
          {
            path: '/mall/profile/advanced',
            name: 'advanced',
            // authority: ['admin'],
            component: './Profile/AdvancedProfile',
          },
        ],
      },
      {
        name: 'result',
        icon: 'check-circle-o',
        path: '/mall/result',
        routes: [
          // result
          {
            path: '/mall/result/success',
            name: 'success',
            component: './Result/Success',
          },
          { path: '/mall/result/fail', name: 'fail', component: './Result/Error' },
        ],
      },
      {
        name: 'exception',
        icon: 'warning',
        path: '/mall/exception',
        routes: [
          // exception
          {
            path: '/mall/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/mall/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/mall/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/mall/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
        ],
      },
      {
        name: 'account',
        icon: 'user',
        path: '/mall/account',
        routes: [
          {
            path: '/mall/account/center',
            name: 'center',
            component: './Account/Center/Center',
            routes: [
              {
                path: '/mall/account/center',
                redirect: '/mall/account/center/articles',
              },
              {
                path: '/mall/account/center/articles',
                component: './Account/Center/Articles',
              },
              {
                path: '/mall/account/center/applications',
                component: './Account/Center/Applications',
              },
              {
                path: '/mall/account/center/projects',
                component: './Account/Center/Projects',
              },
            ],
          },
          {
            path: '/mall/account/settings',
            name: 'settings',
            component: './Account/Settings/Info',
            routes: [
              {
                path: '/mall/account/settings',
                redirect: '/mall/account/settings/base',
              },
              {
                path: '/mall/account/settings/base',
                component: './Account/Settings/BaseView',
              },
              {
                path: '/mall/account/settings/security',
                component: './Account/Settings/SecurityView',
              },
              {
                path: '/mall/account/settings/binding',
                component: './Account/Settings/BindingView',
              },
              {
                path: '/mall/account/settings/notification',
                component: './Account/Settings/NotificationView',
              },
            ],
          },
        ],
      },
      {
        component: '404',
      },
    ],
  },
];
