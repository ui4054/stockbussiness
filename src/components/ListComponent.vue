<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      
      <!-- Update Student content -->
      <div class="card" style="width: 18rem;">
  <div class="card-header">
    Lista de Productos  

  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> 
      <router-link class="nav-link" to="/view"
              >Producto 1</router-link
            >
    </li>
    <li class="list-group-item">
       <router-link class="nav-link" to="/view"
              >Producto 2</router-link
            >
    </li>
    <li class="list-group-item">A third item
      <router-link class="nav-link" to="/view"
              >Producto 3</router-link
            >
    </li>
  </ul>
</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>