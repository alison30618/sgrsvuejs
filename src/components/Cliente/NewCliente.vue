<template>
  <div class="container text-start">
    <h1 class="text-primary fw-bold">Nuevo</h1>
    <div class="card">
      <div class="card-header fw-bold">Cliente</div>
      <div class="card-body">
        <form @submit.prevent="saveCliente">
          <div class="row mb-3">
            <label for="id" class="form-label">Código</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="tag" />
              </div>
              <input
                type="text"
                class="form-control"
                id="id"
                placeholder="Código Estudiante"
                disabled
                v-model="cliente.id"
              />
            </div>
          </div>

          <div class="row mb-3">
            <label for="name" class="form-label">Nombre :</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="building" />
              </div>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Nombre Cliente"
                v-model="cliente.nombre"
              />
            </div>
          </div>

          <div class="row mb-3">
            <label for="apellido" class="form-label">Apellidos:</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="building" />
              </div>
              <input
                type="text"
                class="form-control"
                id="price"
                placeholder="Apellido Cliente"
                v-model="cliente.apellido"
              />
            </div>
          </div>

          <div class="row mb-3">
            <label for="telefono" class="form-label">Telefono:</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="building" />
              </div>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Telefono Cliente"
                v-model="cliente.telefono"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="email" class="form-label">Email :</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="building" />
              </div>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Email Cliente"
                v-model="cliente.email"
              />
            </div>
          </div>

          <button class="btn btn-primary" type="submit">Guardar</button>
          <button class="btn btn-secondary mx-2" @click="cancel">
            Cancelar
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";

export default {
  name: "NewCliente",
  data() {
    return {
      cliente: {
        id: 0,
        nombre: "",
        apellido: "",
        telefono:"",
        email: "",
      },
    };
  },
  methods: {
    cancel() {
      this.$router.push({ name: "Clientes" });
    },

    async saveCliente() {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/clientes",
        this.cliente
      );
      console.log(res);
      if (res.status == 200) {
        this.$router.push({ name: "Clientes" });
        Swal.fire({
          icon: "success",
          title: "cliente ha sido guardado",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  },
};
</script>
