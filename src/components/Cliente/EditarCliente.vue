<template>
    <div class="container text-start">
      <h1 class="text-primary fw-bold">Editar</h1>
      <div class="card">
        <div class="card-header fw-bold">Cliente</div>
        <div class="card-body">
          <form @submit.prevent="updateCliente">
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
                  placeholder="Nombre estudiante"
                  v-model="cliente.nombre"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="description" class="form-label">Apellido:</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="building" />
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="description"
                  placeholder="Apellido cliente"
                  v-model="cliente.apellido"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label for="name" class="form-label">Telefono :</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="building" />
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="telefono cliente"
                  v-model="cliente.telefono"
                />
              </div>
            </div>
             <div class="row mb-3">
              <label for="name" class="form-label">Email :</label>
              <div class="input-group">
                <div class="input-group-text">
                  <font-awesome-icon icon="building" />
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  placeholder="Email cliente"
                  v-model="cliente.email"
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
  name: "EditarEstudiante",
  data() {
    return {
     cliente: {
        id: 0,
        nombre: "",
        apellido: "",
        telefono:"",
        email:""
      },
    };
  },
  methods: {
    cancelar() {
      this.$router.push({ name: "Clientes"  });
    },
    async updateCliente() {
      const res = await axios.put(
       ` http://127.0.0.1:8000/api/clientes/${this.cliente.id}`,
        this.cliente
      );
      if (res.status == 200) {
        this.$router.push({ name: "Clientes" });
        Swal.fire({
          icon: "success",
          title: "Cliente has been updated",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  },
  mounted() {
    
    this.cliente.id = this.$route.params.id;
    axios
      .get(`http://127.0.0.1:8000/api/clientes/${this.cliente.id}`)
      .then((response) => {
        this.cliente = response.data.cliente;
      });
  },
};
</script>