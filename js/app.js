var app=angular.module("app",[
  'ui.router',
  'app.controllers',
  'app.services',
  'ng.ueditor'
  ])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('home',{
    url:'/home',
    views:{
      'main':{
        templateUrl:'templates/home/index.html'
      }
    }
  })
  .state('project',{
    url:'/project',
    views:{
      'main':{
        templateUrl:'templates/project/tab.html'
      }
    }
  })
  .state('project.list',{
    url:'/list',
    views:{
      'sub':{
        templateUrl:'templates/project/index.html',
        controller:"projectCtrl"
      }
    }
  })
  .state('project.edit',{
    url:'/edit',
    views:{
      'sub':{
        templateUrl:'templates/project/edit.html',
        controller:'projectEditCtrl'
      }
    }
  })
  .state('article',{
    url:'/article',
    views:{
      'main':{
        templateUrl:'templates/article/index.html',
        controller:"articleCtrl"
      }
    }
  })
  .state('collection',{
    url:'/collection',
    views:{
      'main':{
        templateUrl:'templates/collection/index.html'
      }
    }
  })
  .state('community',{
    url:'/community',
    views:{
      'main':{
        templateUrl:'templates/community/index.html',
        controller:"communityCtrl"
      }
    }
  })
  .state('myhome',{
    url:'/myhome',
    views:{
      'main':{
        templateUrl:'templates/myhome/index.html'
      }
    }
  })
  .state('notice',{
    url:'/notice',
    views:{
      'main':{
        templateUrl:'templates/notice/index.html'
      }
    }
  })
  .state('phone',{
    url:'/phone',
    views:{
      'main':{
        templateUrl:'templates/phone/index.html'
      }
    }
  })
  .state('publish',{
    url:'/publish',
    views:{
      'main':{
        templateUrl:'templates/publish/index.html',
        controller:"publishCtrl"
      }
    }/*,
    按需加载编辑器样式和js
    resolve:{
      ladMyCtrl:['$ocLazyLoad',function($ocLazyLoad){
        return $ocLazyLoad.load(['js/trix.js','css/trix.css'])
      }]
    }*/
  })
  .state('setting',{
    url:'/setting',
    views:{
      'main':{
        templateUrl:'templates/setting/index.html'
      }
    }
  })
  .state('wechat',{
    url:'/wechat',
    views:{
      'main':{
        templateUrl:'templates/wechat/index.html'
      }
    }
  })
  $urlRouterProvider.otherwise("/home");
})