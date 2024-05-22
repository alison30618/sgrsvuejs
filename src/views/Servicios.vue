<template>
  <div class="container">
    <h1>
      Listado Servicios
      <button @click="newServicio" class="btn btn-success mx-2">
        <font-awesome-icon icon="plus" />
      </button>
    </h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Descripcion</th>
          <th scope="col">Precio</th> 
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(servicio, index) in servicios" :key="index">
          <th scope="row">{{ servicio.id }}</th>
          <td>{{ servicio.nombre }}</td>
          <td>{{ servicio.descripcion }}</td>
          <td>{{ servicio.precio }}</td> 
          <td>
            <button
              @click="deleteServicio(servicio.id)"
              class="btn btn-danger mx-2"
            >
              <font-awesome-icon icon="trash" />
            </button>
            <button
              @click="editServicio(servicio.id)"
              class="btn btn-warning mx-2"
            >
              <font-awesome-icon icon="pencil" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "empleado",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      servicios: [],
    };
  },
  methods: {
    async deleteServicio(id) {
      const result = await Swal.fire({
        title: `Do you want to delete the service with id ${id}?`,
        showCancelButton: true,
        confirmButtonText: "Delete",
      });
      
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`http://127.0.0.1:8000/api/servicios/${id}`);
          if (response.data.success) {
            Swal.fire("Deleted!!", "", "success");
            this.servicios = response.data.servicios;
          }
        } catch (error) {
          Swal.fire("Error!", "There was an error deleting the empleados." , "error");
        }
      }
    },
    editServicio(id) {
      this.$router.push({ name: 'EditarServicio', params: { id } });
    },
    newServicio() {
      this.$router.push({ name: 'NewServicio' });
    }
  },
  async mounted() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/servicios");
      this.servicios = response.data.servicios;
    } catch (error) {
      Swal.fire("Error!", "There was an error fetching the servicios.", "error");
    }
  }
};
</script>