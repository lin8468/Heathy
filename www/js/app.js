var app = angular.module('starter', ['ionic','ngCordova'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) { 
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

// $stateProvider 只负责路由切换
.config(['$stateProvider','$urlRouterProvider','$ionicConfigProvider',function($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
  


 //Modify the tabs of android display position! start
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');

  $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  $ionicConfigProvider.platform.android.navBar.alignTitle('center');

  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');
  //Modify the tabs of android display position! end







  $stateProvider
  // tabs 选项卡
  .state('tabs',{    
    url:'/tab',
    templateUrl:'templates/tabs.html',
  })
  .state('tabs.home',{
    url:'/home',
    views:{
      'home-tab':{
        templateUrl:'templates/home.html'
      }
    }
  })

  .state('tabs.more',{
    url:'/more',
    views:{
      'home-tab':{
        templateUrl:'templates/more.html'
      }
    }
  })
  .state('tabs.retail',{
    url:"/retail",
    views:{
      'home-tab':{
        templateUrl:"templates/retail.html"
      }
    }
  })
  // 发现
  .state('tabs.search',{
    url:'/search',
    views:{
      'search-tab':{
        templateUrl:'templates/search.html'
      }
    }
  })
  .state('tabs.skin',{
    url:'/skin',
    views:{
      'skin-tab':{
        templateUrl:'templates/skin.html'
      }
    }
  })
  .state('tabs.zuofa',{
    url:'/zuofa',
    views:{
      'skin-tab':{
        templateUrl:'templates/zuofa.html'
      }
    }
  })
  .state('tabs.mine',{
    url:'/mine',
    views:{
      'mine-tab':{
        templateUrl:'templates/mine.html'
      }
    }
  })
  .state('tabs.login',{
    url:'/login',
    views:{
      'mine-tab':{
        templateUrl:'templates/login.html'
      }
    }
  })
  .state('tabs.register',{
    url:'/register',
    views:{
      'mine-tab':{
        templateUrl:'templates/register.html'
      }
    }
  })

  $urlRouterProvider.otherwise('/tab/home');
}])
