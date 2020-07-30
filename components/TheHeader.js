const TheHeader = {
  name: 'TheHeader',
  template:
  `
  <!-- Header -->
  <header id="header" class="header">
    <!-- Logotipo -->
    <figure class="logotipo" data-aos="zoom-in-down">
      <img src="./assets/images/invie.png" alt="Logo Invie" class="logo">
    </figure>
    <button data-aos="zoom-in-down" class="boton-menu d-sm-none" data-toggle="collapse" data-target="#menu" aria-expanded="false"><i class="fas fa-bars"></i></button>
    <!-- menu -->
    <nav id="menu" class="menu collapse" data-aos="zoom-in-down">
      <ul>
        <li>
          <router-link active-class="active" exact-active-class="active" exact v-bind:to="{name: 'guitarWe'}">Home</router-link>
        </li>
        <li>
          <router-link active-class="active" exact-active-class="active" exact v-bind:to="{name: 'price'}">Precios</router-link>
        </li>
      </ul>
    </nav>
  </header>
  `,
}
