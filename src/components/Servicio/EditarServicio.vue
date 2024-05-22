<template>
    <div class="container text-start">
      <h1 class="text-primary fw-bold">Editar</h1>
      <div class="card">
        <div class="card-header fw-bold">Servicio</div>
        <div class="card-body">
          <form @submit.prevent="updateServicio">
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
                  placeholder="Nombre servicio"
                  v-model="servicio.nombre"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="description" class="form-label">Descripcion:</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="building" />
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="description"
                  placeholder="Descripcion servicio"
                  v-model="servicio.descripcion"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="name" class="form-label">Precio :</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="building" />
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="precio servicio"
                  v-model="servicio.precio"
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
  name: "EditarServicio",
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
    cancelar() {
      this.$router.push({ name: "Empleados"  });
    },
    async updateServicio() {
      const res = await axios.put(
       ` http://127.0.0.1:8000/api/servicios/${this.servicio.id}`,
        this.servicio
      );
      if (res.status == 200) {
        this.$router.push({ name: "Servicios" });
        Swal.fire({
          icon: "success",
          title: "Servicio has been updated",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  },
  mounted() {
    
    this.servicio.id = this.$route.params.id;
    axios
      .get(`http://127.0.0.1:8000/api/servicios/${this.servicio.id}`)
      .then((response) => {
        this.servicio = response.data.servicio;
      });
  },
};
</script>