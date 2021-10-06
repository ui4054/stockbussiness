<template>
  <div class="home">
  <Carusel> </Carusel> <!-- orden -->
  <Login> </Login>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "../components/Login.vue"
import Carusel from "../components/Carusel.vue"

export default {
  name: 'Home',
  components: {
    Login,
    Carusel
  }
}
</script>
