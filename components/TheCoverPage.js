const TheCoverPage = {
  name: 'TheCoverPage',
  template:
  `
  <!-- Portada -->
  <section id="portada" class="container-fluid portada bg-encabezado">
    <!-- Header -->
    <TheHeader></TheHeader>
    <div class="titulos-encabezado">
      <h1 data-aos="fade-left" class="titulo">Guitarras <span>invie</span>sibles</h1>
      <h3 data-aos="fade-right">Sé la estrella que siempre quisiste ser</h3>
      <a
        data-scroll
        href="#guitarras"
        data-aos="fade-down-right"
        class="btn btn-danger">
        Conoce más <i class="fas fa-guitar"></i>
      </a>
    </div>
  </section>
  `,
  components: {
    TheHeader
  }
}
