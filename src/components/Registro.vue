<template>
  <div>
    <br><br>
    <h1>  Registrate </h1>

    <br><br>
    <div class="container">
    <b-form @submit="onSubmit" >
      <b-form-group
        id="input-group-1"
        label="Nombre completo"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="text"
          placeholder="Nombre"
          required
        ></b-form-input>
      </b-form-group>

      <br><br>
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
    
      <b-button type="submit" variant="primary" v-on:click="registrar" >Registrar</b-button>
    </b-form>
    </div>
  </div>

</template>

<script>
  export default{
    methods:{
      registrar(){
        alert("Te registraste correctamente");
        this.$router.push("/"); //nos manda a la ruta home 
      }
    }
  }
  
</script>