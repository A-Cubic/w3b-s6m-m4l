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
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    routes: [
      // 全部分类
      {
        path: '/category',
        name: 'category',
        routes: [
          {
            icon: 'smile',

            path: '/category/from/:category/:con',
            name:'from',
            target: '_blank',
            // hideInMenu: true,
            component: './Category/Category',
          },
          {
            icon: 'smile',
            path: '/category/mu/:category=1',
            name:'mu',
            target: '_blank',
            component: './Category/Category',
          },
          {
            icon: 'coffee',
            path: '/category/jia/:category=2',
            name:'jia',
            component: './Category/Category',
          },
          {
            icon: 'user',
            path: '/category/ge',
            name:'ge',
            component: './Category/Category',
          },
          {
            icon: 'heart',
            path: '/category/mei',
            name:'mei',
            component: './Category/Category',
          },
          {
            icon: 'safety',
            path: '/category/shi',
            name:'shi',
            component: './Category/Category',
          },
          {
            icon: 'skin',
            path: '/category/fu',
            name:'fu',
            component: './Category/Category',
          },
        ],
      },
      // Home
      {
        name: 'Home',
        path: '/home',
        component: './Home/Home',
      },
      // JapanPavilion
      {
        name: 'JapanPavilion',
        path: '/JapanPavilion',
        // hideChildrenInMenu: true,
        routes: [
          {
            path: '/JapanPavilion',
            redirect: '/JapanPavilion/JapanPavilion',
          },
          {
            path: '/JapanPavilion/JapanPavilion',
            component: './JapanPavilion/JapanPavilion',
            hideInMenu: true,
          },
        ],
      },
      //韩国馆
      {
        name: 'KoreaPavilion',
        path: '/KoreaPavilion',
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
      //   path: '/PromotionArea',
      //   component: './PromotionArea/PromotionArea',
      // },
      //商品详情
      {
          path: '/goodsDetails/:barcode',
          name: 'goodsDetails',
          component: './GoodsDetails/GoodsDetails',
      },
      //品牌页
      {
          path: '/brand/:brandsName',
          name: 'brand',
          component: './Brand/Brand',
      },
      //搜索结果页
      {

          path: '/search/:value',
          name: 'search',
          component: './Search/Search',
      },
      //收藏的商品
      {

          path: '/collectionGoods',
          name: 'collectionGoods',
          component: './CollectionGoods/CollectionGoods',
      },
      //关注的品牌
      {
          path: '/attentionBrand',
          name: 'attentionBrand',
          component: './AttentionBrand/AttentionBrand',
      },
      // dashboard
      { path: '/mall', redirect: '/home' },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        routes: [
          {
            path: '/dashboard/analysis',
            name: 'analysis',
            component: './Dashboard/Analysis',
          },
          {
            path: '/dashboard/monitor',
            name: 'monitor',
            component: './Dashboard/Monitor',
          },
          {
            path: '/dashboard/workplace',
            name: 'workplace',
            component: './Dashboard/Workplace',
          },
        ],
      },
      // forms
      {
        path: '/form',
        icon: 'form',
        name: 'form',
        routes: [
          {
            path: '/form/basic-form',
            name: 'basicform',
            component: './Forms/BasicForm',
          },
          {
            path: '/form/step-form',
            name: 'stepform',
            component: './Forms/StepForm',
            hideChildrenInMenu: true,
            routes: [
              {
                path: '/form/step-form',
                redirect: '/form/step-form/info',
              },
              {
                path: '/form/step-form/info',
                name: 'info',
                component: './Forms/StepForm/Step1',
              },
              {
                path: '/form/step-form/confirm',
                name: 'confirm',
                component: './Forms/StepForm/Step2',
              },
              {
                path: '/form/step-form/result',
                name: 'result',
                component: './Forms/StepForm/Step3',
              },
            ],
          },
          {
            path: '/form/advanced-form',
            name: 'advancedform',
            // authority: ['admin'],
            component: './Forms/AdvancedForm',
          },
        ],
      },
      // list
      {
        path: '/list',
        icon: 'table',
        name: 'list',
        routes: [
          {
            path: '/list/table-list',
            name: 'searchtable',
            component: './List/TableList',
          },
          {
            path: '/list/basic-list',
            name: 'basiclist',
            component: './List/BasicList',
          },
          {
            path: '/list/card-list',
            name: 'cardlist',
            component: './List/CardList',
          },
          {
            path: '/list/search',
            name: 'searchlist',
            component: './List/List',
            routes: [
              {
                path: '/list/search',
                redirect: '/list/search/articles',
              },
              {
                path: '/list/search/articles',
                name: 'articles',
                component: './List/Articles',
              },
              {
                path: '/list/search/projects',
                name: 'projects',
                component: './List/Projects',
              },
              {
                path: '/list/search/applications',
                name: 'applications',
                component: './List/Applications',
              },
            ],
          },
        ],
      },
      {
        path: '/profile',
        name: 'profile',
        icon: 'profile',
        routes: [
          // profile
          {
            path: '/profile/basic',
            name: 'basic',
            component: './Profile/BasicProfile',
          },
          {
            path: '/profile/advanced',
            name: 'advanced',
            // authority: ['admin'],
            component: './Profile/AdvancedProfile',
          },
        ],
      },
      {
        name: 'result',
        icon: 'check-circle-o',
        path: '/result',
        routes: [
          // result
          {
            path: '/result/success',
            name: 'success',
            component: './Result/Success',
          },
          { path: '/result/fail', name: 'fail', component: './Result/Error' },
        ],
      },
      {
        name: 'exception',
        icon: 'warning',
        path: '/exception',
        routes: [
          // exception
          {
            path: '/exception/403',
            name: 'not-permission',
            component: './Exception/403',
          },
          {
            path: '/exception/404',
            name: 'not-find',
            component: './Exception/404',
          },
          {
            path: '/exception/500',
            name: 'server-error',
            component: './Exception/500',
          },
          {
            path: '/exception/trigger',
            name: 'trigger',
            hideInMenu: true,
            component: './Exception/TriggerException',
          },
        ],
      },
      {
        name: 'account',
        icon: 'user',
        path: '/account',
        routes: [
          {
            path: '/account/center',
            name: 'center',
            component: './Account/Center/Center',
            routes: [
              {
                path: '/account/center',
                redirect: '/account/center/articles',
              },
              {
                path: '/account/center/articles',
                component: './Account/Center/Articles',
              },
              {
                path: '/account/center/applications',
                component: './Account/Center/Applications',
              },
              {
                path: '/account/center/projects',
                component: './Account/Center/Projects',
              },
            ],
          },
          {
            path: '/account/settings',
            name: 'settings',
            component: './Account/Settings/Info',
            routes: [
              {
                path: '/account/settings',
                redirect: '/account/settings/base',
              },
              {
                path: '/account/settings/base',
                component: './Account/Settings/BaseView',
              },
              {
                path: '/account/settings/security',
                component: './Account/Settings/SecurityView',
              },
              {
                path: '/account/settings/binding',
                component: './Account/Settings/BindingView',
              },
              {
                path: '/account/settings/notification',
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
