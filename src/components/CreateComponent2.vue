<template>
  <div>
    <h1>Crear Producto</h1>
    <form @submit.prevent="addPost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <div class="mb-3">
              <label for="formGroupExampleInput" class="form-label">Producto</label>
                  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input placeholder" v-model="post.producto">
              </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Cantidad</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder" v-model="post.cantidad">
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">Precio</label>
                  <input type="text" class="form-control" id="formGroupExampleInput2" placeholder=" placeholder" v-model="post.precio">
            </div>
          </div>
        </div>
      </div>
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
        let uri = 'localhost:80/posts/addp';
        this.axios.post(uri, this.post).then(() => {
          //this.$router.push({name: 'posts'});
          this.$router.push({name: 'prueba'});
        });
      }
    }
  }
</script>