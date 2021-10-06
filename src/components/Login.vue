<template>
  <div>
    <div class="container">
    <b-form v-on:submit.prevent="search">
      <b-form-group
        id="input-group-1"
        label="Usuario"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="text"
          placeholder="Usuario"
          required
        ></b-form-input>
      </b-form-group>
      <br><br>
      <b-form-group id="input-group-2" label="Contraseña" label-for="input-2">
        <b-form-input
          id="input-2"
          type = "password"
          placeholder="Contraseña"
          required
        ></b-form-input>
      </b-form-group>

      <br><br>
      <b-button type="submit" variant="primary" v-on:click="ingresar">Ingresar</b-button>
    </b-form>
    </div>
  </div>
</template>

<script>
  export default{
    methods:{
      ingresar(){
        alert("Ingresaste correctamente"); //una alerta en el navegador 
        this.$router.push('/comprar'); //nos manda a la ruta comprar 
      }
    }
  }
  
</script>