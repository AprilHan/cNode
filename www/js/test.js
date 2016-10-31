define(['vue','vueRouter'],function(Vue,VueRouter){
      Vue.use(VueRouter);

      var GOOD = new Vue({
           el:'#inner-cell',
           data: {
               items: [
                   { message: 'Foo' },
                   { message: 'Bar' }
               ]
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
