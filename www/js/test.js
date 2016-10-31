define(['vue','vueRouter','vueResource'],function(Vue,VueRouter,VueResource){
      Vue.use(VueRouter);
      Vue.use(VueResource);
      var GOOD = new Vue({
           el:'#inner-cell',
           data: function(){
               var response = '';
               this.$http.jsonp('https://cnodejs.org/api/v1/topics/?page=1&tab=ask&limit=1').then(function(response){
                   // 响应成功回调
                   console.log(response);
                   response = JSON.parse(response);
               }, function(response){
                   // 响应错误回调
               });
               return  {"list": response};
           }
      });
    var ASK = new Vue({
           el:'#inner-cell',
           data: {
               items: [
                   { message: 'ss' },
                   { message: 'ss' }
               ]
           }
      });
    const routes = [
        { path: '/good', component: GOOD },
        //{ path: '/share', component: SHARE },
        //{ path: '/job', component: JOB },
        { path: '/ask', component: ASK },
        {path: '*', redirect: '/good'}
    ];
    const router = new VueRouter({
        routes // （缩写）相当于 routes: routes
    });

    const app = new Vue({
        router
    }).$mount('#app')
});
