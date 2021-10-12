<template>
  <div>
    <h1>Editar Producto</h1>
    <form @submit.prevent="updatePost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Nombre: </label>
            <input type="text" class="form-control" v-model="post.nombre">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Descripcion: </label>
              <input class="form-control" v-model="post.marca" >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Precio: </label>
              <input class="form-control" v-model="post.precio" >
            </div>
          </div>
        </div> 
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Cantidad: </label>
              <input class="form-control" v-model="post.cantidad" >
            </div>
          </div>
        </div>               
        <br />
        <div class="form-group">
          <button class="btn btn-primary">Actualizar</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          post: {}
        }
      },
      created() {
        //let uri = `https://stkbsprueba.herokuapp.com/posts/edit/${this.$route.params.id}`;
        let uri = `http://localhost/posts/edit/${this.$route.params.id}`;
        this.axios.get(uri).then((response) => {
            this.post = response.data;
        });
      },
      methods: {
        updatePost() {
          //let uri = `https://stkbsprueba.herokuapp.com/posts/update/${this.$route.params.id}`;
          let uri = `http://localhost/posts/update/${this.$route.params.id}`;
          this.axios.post(uri, this.post).then(() => {
            this.$router.push({name: 'posts'});
          });
        }
      }
    }
</script>
