<template>
  <div>
    <h1>Crear Pedido</h1>
    <form @submit.prevent="addPost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Nombre:</label>
            <input type="text" class="form-control" v-model="post.nombre">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Descripción:</label>
              <input class="form-control" v-model="post.marca" >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
              <div class="form-group">
                <label>Precio:</label>
                <input class="form-control" v-model="post.precio" >
              </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
              <div class="form-group">
                <label>Cantidad:</label>
                <input class="form-control" v-model="post.cantidad" >
              </div>
            </div>
        </div>




        <br />
        <div class="form-group">
          <button class="btn btn-primary">Crear</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {
        data(){
        return {
          post:{}
        }
    },
    methods: {
      addPost(){
        let uri = `https://stkbsprueba.herokuapp.com/posts/add`;
        //let uri = 'http://localhost/posts/add'
        this.axios.post(uri, this.post).then(() => {
          //this.$router.push({name: 'posts'});
          this.$router.push({name: 'posts'}); // el "posts" hace referencia al ruta donde deben ser guardados.
        });
      }
    }
  }
</script>