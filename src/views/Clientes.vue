<template>
  <div class="container">
    <h1>
      Listado Clientes
      <button @click="newCliente" class="btn btn-success mx-2">
        <font-awesome-icon icon="plus" />
      </button>
    </h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Telefono</th>
          <th scope="col">Email</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cliente, index) in clientes" :key="index">
          <th scope="row">{{ cliente.id }}</th>
          <td>{{ cliente.nombre }}</td>
          <td>{{ cliente.apellido }}</td>
          <td>{{ cliente.telefono }}</td>
          <td>{{ cliente.email }}</td>
          <td>
            <button
              @click="deleteCliente(cliente.id)"
              class="btn btn-danger mx-2"
            >
              <font-awesome-icon icon="trash" />
            </button>
            <button
              @click="editCliente(cliente.id)"
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
  name: "estudiante",
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      clientes: [],
    };
  },
  methods: {
    async deleteCliente(id) {
      const result = await Swal.fire({
        title: `Do you want to delete the cliente with id ${id}?`,
        showCancelButton: true,
        confirmButtonText: "Delete",
      });
      
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`http://127.0.0.1:8000/api/clientes/${id}`);
          if (response.data.success) {
            Swal.fire("Deleted!!", "", "success");
            this.clientes = response.data.clientes;
          }
        } catch (error) {
          Swal.fire("Error!", "There was an error deleting the clientes." , "error");
        }
      }
    },
    editCliente(id) {
      this.$router.push({ name: 'EditarCliente', params: { id } });
    },
    newCliente() {
      this.$router.push({ name: 'NewCliente' });
    }
  },
  async mounted() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/clientes");
      this.clientes = response.data.clientes;
    } catch (error) {
      Swal.fire("Error!", "There was an error fetching the clientes.", "error");
    }
  }
};
</script>