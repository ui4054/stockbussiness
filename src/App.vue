// App.vue



<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>



<template>
  <div class="container">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/prod" class="nav-link">Crear Producto</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/users" class="nav-link">Usuarios</router-link>
        </li>
      </ul>
    </nav><br />
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style>

</style>

<script>

    export default{
    }
</script>