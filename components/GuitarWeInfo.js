const GuitarWeInfo = {
  name: 'GuitarWeInfo',
  template:
  `
  <div class="guitarra-info">
    <h3>{{ guitar.model }}</h3>
    <ol >
      <li v-for="(feature, index) in guitar.features">
        {{ feature }}
      </li>
    </ol>
  </div>
  `,
  props: {
    guitar: {
      type: Object,
      required: true
    }
  }
}
