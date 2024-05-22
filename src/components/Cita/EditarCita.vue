<template>
  <div class="container text-start">
    <h1 class="text-primary fw-bold">Editar</h1>
    <div class="card">
      <div class="card-header fw-bold">Cita</div>
      <div class="card-body">
        <form @submit.prevent="updateCita">
          <div class="row mb-3">
            <label for="codigo" class="form-label">Código</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="tag" />
              </div>
              <input
                type="text"
                class="form-control"
                id="id"
                disabled
                v-model="cita.id"
              />
            </div>
          </div>

          <div class="row mb-3">
            <label for="muni_codi" class="form-label">Cliente :</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="bank" />
              </div>
              <select class="form-select" v-model="cita.cliente_id">
                <option selected value="0">Seleccione un Cliente</option>
                <option
                  v-for="cliente in clientes"
                  :key="cliente.id"
                  v-bind:value="cliente.id"
                >
                  
                  {{ cliente.nombre }} {{ cliente.apellido }}
                </option>
              </select>
            </div>
          </div>

          <div class="row mb-3">
            <label for="muni_codi" class="form-label">Servicio :</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="bank" />
              </div>
              <select class="form-select" v-model="cita.servicio_id">
                <option selected value="0">Seleccione un Servicio</option>
                <option
                  v-for="servicio in servicios"
                  :key="servicio.id"
                  v-bind:value="servicio.id"
                >
                
                  {{ servicio.nombre }}
                </option>
              </select>
            </div>
          </div>

          <div class="row mb-3">
            <label for="muni_codi" class="form-label">Empleado :</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="bank" />
              </div>
              <select class="form-select" v-model="cita.empleado_id">
                <option selected value="0">Seleccione un Empleado</option>
                <option
                  v-for="empleado in empleados"
                  :key="empleado.id"
                  v-bind:value="empleado.id"
                >
                  
                  {{ empleado.nombre }} {{ empleado.apellido }}
                </option>
              </select>
            </div>
          </div>

          <div class="row mb-3">
            <label for="stock" class="form-label">Fecha Cita:</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="building" />
              </div>
              <input
                type="date"
                class="form-control"
                id="stock"
                placeholder="Fecha Matriculacion"
                v-model="cita.fecha"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="telefono" class="form-label">Estado:</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="building" />
              </div>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Estado Cita"
                v-model="cita.estado"
              />
            </div>
          </div>

          <button class="btn btn-primary" type="submit">Actualizar</button>
          <button class="btn btn-secondary mx-2" @click="cancelar">
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
  name: "EditarMatriculacion",
  data() {
    return {
      cita: {
        id: 0,
        cliente_id: 0,
        servicio_id: 0,
        empleado_id: 0,
        fecha: "",
        estado: "",
      },
      clientes: [],
      servicios: [],
      empleados: [],
    };
  },
  methods: {
    cancelar() {
      this.$router.push({ name: "Citas" });
    },
    async updateCita() {
      const res = await axios.put(
        `http://127.0.0.1:8000/api/citas/${this.cita.id}`,
        this.cita
      );
      if (res.status == 200) {
        this.$router.push({ name: "Citas" });
        Swal.fire({
          icon: "success",
          title: "matriculacion has been updated",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  },
  mounted() {
    this.cita.id = this.$route.params.id;
    axios
      .get(`http://127.0.0.1:8000/api/citas/${this.cita.id}`)
      .then((response) => {
        this.cita = response.data.cita;
         this.clientes = response.data.clientes;
       this.servicios = response.data.servicios;
         this.empleados = response.data.empleados;
      });
  },
};
</script>
