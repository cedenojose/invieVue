const App = {
  name: 'App',
  template:
  `
    <div id="App">
      <template v-if="coverPageShow">
        <TheCoverPage></TheCoverPage>
      </template>

      <template v-else>
        <TheHeader class="container-fluid bg-encabezado"></TheHeader>
      </template>

      <router-view></router-view>
      
      <footer class="footer">
       <TheFooter></TheFooter>
      </footer>
    </div>
  `,
  components: {
    TheCoverPage,
    TheHeader,
    TheFooter
  },
  data () {
    return {
      coverPageShow: undefined
    }
  },
  created() {
    this.coverPageShow = router.currentRoute.path === '/'
  },
  watch: {
    $route(to, from) {
      this.coverPageShow = router.currentRoute.path === '/'
    }
  }
}
