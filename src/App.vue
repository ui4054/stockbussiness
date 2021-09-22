

<template>


  <div>
    <!-- Nav bar -->
    <nav
      class="navbar navbar-dark bg-primary justify-content-between flex-nowrap flex-row"
    >
      <div class="container">
        <img src="./tienda_1.jpg" width="110" height="110"
         alt=" "> 
        <a class="navbar-brand float-left">Stockbussiness</a>

        <ul class="nav navbar-nav flex-row float-left">
          <li class="nav-item">
            <router-link class="nav-link" to="/view"
              >Productos</router-link
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">Registrar usuario</router-link>
          </li>
        </ul>
      </div>
    </nav>

     <!-- Router view -->
    <div class="container"> 
    <img src="./tienda_1.jpg" class="img-fluid" alt="...">
    <hr>
    <p class="text-right">StockBussiness es una solución web para pequeñas tiendas de barrio, en la que los clientes de los tenderos puedan realizar su pedido en línea y este puede ser recogido por el cliente o enviado, su pago es contraentrega.</p>
    </div>

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>

 
</template>



