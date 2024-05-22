<template>
  <div class="container text-start">
    <h1 class="text-primary fw-bold">Nuevo</h1>
    <div class="card">
      <div class="card-header fw-bold">Empleado</div>
      <div class="card-body">
        <form @submit.prevent="saveServicio">
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
                placeholder="Código servicio"
                disabled
                v-model="servicio.id"
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
                placeholder="Nombre Servicio"
                v-model="servicio.nombre"
              />
            </div>
          </div>

          <div class="row mb-3">
            <label for="apellido" class="form-label">Descripcion:</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="building" />
              </div>
              <input
                type="text"
                class="form-control"
                id="price"
                placeholder="descripcion servicio"
                v-model="servicio.descripcion"
              />
            </div>
          </div>

          <div class="row mb-3">
            <label for="telefono" class="form-label">Precio:</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="building" />
              </div>
              <input
                type="text"
                class="form-control"
                id="precio"
                placeholder="Precio Servicio"
                v-model="servicio.precio"
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
  name: "NewServicio",
  data() {
    return {
      servicio: {
        id: 0,
        nombre: "",
        descripcion: "",
        precio:""
      },
    };
  },
  methods: {
    cancel() {
      this.$router.push({ name: "Servicios" });
    },

    async saveServicio() {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/servicios",
        this.servicio
      );
      console.log(res);
      if (res.status == 200) {
        this.$router.push({ name: "Servicios" });
        Swal.fire({
          icon: "success",
          title: "servicio ha sido guardado",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  },
};
</script>
