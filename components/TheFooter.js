const TheFooter = {
  name: 'TheFooter',
  template:
  `
  <div class="container">
    <div class="row" data-aos="zoom-in-down">
      <div class="col-12 col-sm-6 col-md-5">
        <div data-aos="zoom-out-right" class="contacto">
          <img src="assets/images/invie-white.png" alt="Logo de invie">
          <!-- <div class="row"> -->
            <div class="directo">
              <!-- <div class="col-12 col-sm-6"> -->
                <a href="tel:+5802915555555"><strong>Telefono <i class="fas fa-phone"></i></strong> <span>0291-555-5555</span></a>
              <!-- </div> -->
              <!-- <div class="col-12 col-sm-6"> -->
                <a href="mailto:contacto@invie.com"><strong>E-mail <i class="far fa-envelope"></i></strong> <span>contacto@invie.com</span></a>
              <!-- </div> -->
            </div>
          <!-- </div> -->
        </div>
      </div>
      <div class="col-12 col-sm-6 col-md-7">
        <form class="formulario"
          ref="formulario"
          v-bind:class="formValidationClass"
          novalidate
          @submit.prevent>
          <div class="form-row">
            <div class="col-12 col-md-7 col-lg-6">
              <div class="mb-3">
                <label for="inputNombre">Nombre</label>
                <input class="form-control"
                  type="text"
                  id="inputNombre"
                  placeholder="Jose"
                  required
                  v-model="form.name">
              </div>
              <div class="mb-3">
                <label for="inputEmail">Email</label>
                <input class="form-control"
                  type="email"
                  id="inputEmail"
                  placeholder="contacto@invie.com"
                  required
                  v-model="form.email">
              </div>
              <div class="form-group">
                <!-- radio -->
                <div v-for="sex in sexs"
                  class="form-check-inline mb-3">
                  <input class="form-check-input"
                    v-model="form.sex"
                    v-bind:id="sex.id"
                    v-bind:value="sex.value"
                    type="radio"
                    required>
                  <label class="form-check-label"
                    v-bind:for="sex.id">{{sex.text}}</label>
                </div>
              </div>

              <div class="form-group">
                <!-- checkbox -->
                <div v-for="reason in reasons"
                  class="form-check-inline mb-3">
                  <input class="form-check-input"
                    type="checkbox"
                    v-model="form.reasons"
                    v-bind:value="reason.value"
                    v-bind:id="reason.id">
                  <label
                    ref="reasons"
                    class="form-check-label"
                    v-bind:for="reason.id">
                    {{reason.text}}
                  </label>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-5 col-lg-6 asunto">
              <div class="form-group">
                <label for="validationTextarea">Asunto</label>
                <textarea class="form-control"
                  id="validationTextarea"
                  placeholder="Es requerido un asunto"
                  rows="5"
                  required
                  v-model="form.affair"></textarea>
                <div class="invalid-feedback">
                  Por favor ingrese un asunto.
                </div>
              </div>
              <button
                class="btn btn-danger"
                type="submit"
                v-on:click=onSubmit()>
                Enviar <i class="fas fa-check"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  `,
  data () {
    return {
      reasons: [
        {
          id: 'cotizacion',          
          value: 'cotizacion',
          text: 'Cotizacion'
        },
        {
          id: 'reclamos',          
          value: 'reclamos',
          text: 'Reclamos'
        },
        {
          id: 'comentarios',          
          value: 'comentarios',
          text: 'Comentarios'
        },
        {
          id: 'otros',          
          value: 'otros',
          text: 'Otros'
        }
      ],
      sexs: [
        {
          id: 'mujer',
          value: 'mujer',
          text: 'Mujer'
        },
        {
          id: 'hombre',
          value: 'hombre',
          text: 'Hombre'
        }
      ],
      form: {
        name: undefined,
        email: undefined,
        affair: undefined,
        sex: 'mujer',
        reasons: ['cotizacion']
      },
      formValidationClass: ''
    }
  },
  created () {
    console.log('---formulario---', this.form)
  },
  methods: {
    onSubmit () {
      Swal.fire('Any fool can use a computer')
      let form = this.$refs.formulario
      let modalForm = this.$refs.modalForm
      this.formValidationClass = 'was-validated'

      // caso en el que el usuario no indique la razon de su contacto
      if (this.form.reasons.length === 0) {
        this.form.reasons.push('otros')
      }

      // caso en el que se pasa la validacion
      if (form.checkValidity()) {
        this.clearForm()
        Swal.fire({
          icon: 'success',
          title: 'Gracias',
          text: 'Estaremos en contacto muy pronto!'
        })
      } else {
        // caso en el que los datos no pasaron la validacion
        console.log('NO paso')
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Debe llenar correctamente el formulario!'
        })
      }      
    },
    clearForm () {
      this.form = {
        name: undefined,
        email: undefined,
        affair: undefined,
        sex: 'mujer',
        reasons: ['cotizacion']
      }
      this.formValidationClass = ''
    }
  }
}
