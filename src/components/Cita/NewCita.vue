<template>
  <div class="container text-start">
    <h1 class="text-primary fw-bold">Nueva</h1>
    <div class="card">
      <div class="card-header fw-bold">Cita</div>
      <div class="card-body">
        <form @submit.prevent="saveCita">
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
                placeholder="Código Matriculacion"
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
                  :value="cliente.id"
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
                  :value="servicio.id"
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
                  :value="empleado.id"
                >
                  {{ empleado.nombre }} {{empleado.apellido}}
                </option>
              </select>
            </div>
          </div>

          <div class="row mb-3">
            <label for="stock" class="form-label">Fecha:</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="building" />
              </div>
              <input
                type="date"
                class="form-control"
                id="fecha	"
                placeholder="fecha Cita"
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
  name: "NewCita",
  data() {
    return {
      cita: {
        id: 0,
        cliente_id: 0,
        servicio_id: 0,
        empleado_id:0,
        fecha: "",
        estado:""
      },
      clientes: [],
      servicios: [],
      empleados:[]
    };
  },
  methods: {
    cancel() {
      this.$router.push({ name: "Citas" });
    },

    async saveCita() {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/citas",
        this.cita
      );
      console.log(res);
      if (res.status == 200) {
        this.$router.push({ name: "Citas" });
        Swal.fire({
          icon: "success",
          title: "Cita ha sido guardado",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  },

  mounted() {
    axios.get("http://127.0.0.1:8000/api/clientes").then((response) => {
      this.clientes = response.data.clientes;
    });
    axios.get("http://127.0.0.1:8000/api/servicios").then((response) => {
      this.servicios = response.data.servicios;
    });
    axios.get("http://127.0.0.1:8000/api/empleados").then((response) => {
      this.empleados = response.data.empleados;
    });
  },
};
</script>