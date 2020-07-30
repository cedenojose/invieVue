
/*------------------------
  inicializando Vue
--------------------------*/ 
var vm = new Vue({
  router,
  el:'#App',
  template: '<router-view></router-view>'
})

/*------------------------
  inicializando AOS
--------------------------*/
AOS.init();

/*------------------------
  inicializando Sweetalert2
--------------------------*/ 
// const Swal = require('sweetalert2') //opcion que no funciona
window.Swal = require('sweetalert2')
