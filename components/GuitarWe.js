const GuitarWe = {
  name: 'GuitarWe',
  template:
  `
  <!-- Guitarras -->
  <section id="guitarras" class="container guitarras">
    <div class="row">
      <div class="col-12">
        <h2 data-aos="zoom-in-right">Nuestras Guitarras</h2>
        <article data-aos="fade-up" class="guitarra">
          <img
            v-bind:src="acustica.image.URL"
            v-bind:alt="acustica.image.alt"
            v-bind:class="acustica.image.class">
          <GuitarWeInfo
            v-bind:guitar="acustica">
          </GuitarWeInfo>
        </article>
        <article data-aos="fade-up-right" class="guitarra guitarra-left">
          <img
            v-bind:src="classic.image.URL"
            v-bind:alt="classic.image.alt"
            v-bind:class="classic.image.class">
          <GuitarWeInfo
            v-bind:guitar="classic">
          </GuitarWeInfo>
        </article>
      </div>
    </div>
  </section>
  `,
  components: {
    GuitarWeInfo
  },
  data () {
    return {
      guitars: guitars,
      classic: Array,
      acustica: Array
    }
  },
  created () {
    this.classic = this.guitarSearch('classic')
    this.classic.image.class = 'left'
    this.acustica = this.guitarSearch('acustica')
    this.acustica.image.class = 'right'
  },
  methods: {
    guitarSearch (type) {
      let guitarFinder 
      guitarFinder = this.guitars.find(guitar => guitar.type == type)
      return guitarFinder
    }
  }
}
