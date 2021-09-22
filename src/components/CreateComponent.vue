<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Registrar usuario</h3>
      <form @submit.prevent="handleSubmitForm">
        <div class="form-group">
          <label>Nombre</label>
          <input
            type="text"
            class="form-control"
            v-model="student.name"
            required
          />
        </div>

        <div class="form-group">
          <label>Correo</label>
          <input
            type="email"
            class="form-control"
            v-model="student.email"
            required
          />
        </div>

        <div class="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            class="form-control"
            v-model="student.password"
            required
          />
        </div>

        <div class="form-group">
          <button class="btn btn-danger btn-block">Registrar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      student: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  methods: {
    handleSubmitForm() {},
  },
};
</script>