const router = new VueRouter({
  // al activar el mode: 'history no renderiza'
  // mode: 'history',
  // base: document.location.pathname,
  // base: 'C:/repositorio/vue/invieVue/index.html/',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '',
          name: 'guitarWe',
          component: GuitarWe,
          meta: {
            title: 'InvieVue | Tus Mejores Guitarras Invie-sibles'
          }
        },
        {
          path: 'precio',
          name: 'price',
          component: GuitarWePrice,
          meta: {
            title: 'Precios | Tus Mejores Guitarras Invie-sibles'
          }
        }
      ]
    }
  ],
})
const DEFAULT_TITLE = 'InvieVue'
router.afterEach((to, from) => {
  document.title = to.meta.title || DEFAULT_TITLE
})
