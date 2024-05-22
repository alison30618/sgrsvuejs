<template>
  <div class="container">
    <h1>
      Listado Empleados
      <button @click="newEmpleado" class="btn btn-success mx-2">
        <font-awesome-icon icon="plus" />
      </button>
    </h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Posicion</th>
          <th scope="col">Horario</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(empleado, index) in empleados" :key="index">
          <th scope="row">{{ empleado.id }}</th>
          <td>{{ empleado.nombre }}</td>
          <td>{{ empleado.apellido }}</td>
          <td>{{ empleado.posicion }}</td>
          <td>{{ empleado.horario }}</td>
          <td>
            <button
              @click="deleteEmpleado(empleado.id)"
              class="btn btn-danger mx-2"
            >
              <font-awesome-icon icon="trash" />
            </button>
            <button
              @click="editEmpleado(empleado.id)"
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
      empleados: [],
    };
  },
  methods: {
    async deleteEmpleado(id) {
      const result = await Swal.fire({
        title: `Do you want to delete the empleado with id ${id}?`,
        showCancelButton: true,
        confirmButtonText: "Delete",
      });
      
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(`http://127.0.0.1:8000/api/empleados/${id}`);
          if (response.data.success) {
            Swal.fire("Deleted!!", "", "success");
            this.empleados = response.data.empleados;
          }
        } catch (error) {
          Swal.fire("Error!", "There was an error deleting the empleados." , "error");
        }
      }
    },
    editEmpleado(id) {
      this.$router.push({ name: 'EditarEmpleado', params: { id } });
    },
    newEmpleado() {
      this.$router.push({ name: 'NewEmpleado' });
    }
  },
  async mounted() {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/empleados");
      this.empleados = response.data.empleados;
    } catch (error) {
      Swal.fire("Error!", "There was an error fetching the empleados.", "error");
    }
  }
};
</script>