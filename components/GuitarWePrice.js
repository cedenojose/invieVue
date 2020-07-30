const GuitarWePrice = {
  name: 'GuitarWePrice',
  template: 
  `
  <div class="container mt-4" data-aos="fade-down-right">
    <div class="row">
      <div class="col-12">
        <div class="table-responsive">
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th class="tabla-columna-modelo">Modelo</th>
                <th class="tabla-columna-precio">Precio</th>
                <th class="tabla-columna-descripcion">Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="guitar in guitars" class="text-justify">
                <td>{{guitar.model}}</td>
                <td class="text-center">{{guitar.price}}</td>
                <td>{{guitar.description}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  `,
  data () {
    return {
      guitars: guitars
    }
  }
}
