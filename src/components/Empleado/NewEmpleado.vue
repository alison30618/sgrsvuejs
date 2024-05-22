<template>
  <div class="container text-start">
    <h1 class="text-primary fw-bold">Nuevo</h1>
    <div class="card">
      <div class="card-header fw-bold">Empleado</div>
      <div class="card-body">
        <form @submit.prevent="saveEmpleado">
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
                placeholder="Código empleado"
                disabled
                v-model="empleado.id"
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
                placeholder="Nombre empleado"
                v-model="empleado.nombre"
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
                placeholder="Apellido empleado"
                v-model="empleado.apellido"
              />
            </div>
          </div>

          <div class="row mb-3">
            <label for="telefono" class="form-label">Posicion:</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="building" />
              </div>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Posicion Empleado"
                v-model="empleado.posicion"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="email" class="form-label">Horario :</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="building" />
              </div>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Horario empleado"
                v-model="empleado.horario"
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
  name: "NewEmpleado",
  data() {
    return {
      empleado: {
        id: 0,
        nombre: "",
        apellido: "",
        posicion:"",
        horario: "",
      },
    };
  },
  methods: {
    cancel() {
      this.$router.push({ name: "Empleados" });
    },

    async saveEmpleado() {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/empleados",
        this.empleado
      );
      console.log(res);
      if (res.status == 200) {
        this.$router.push({ name: "Empleados" });
        Swal.fire({
          icon: "success",
          title: "empleado ha sido guardado",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  },
};
</script>
