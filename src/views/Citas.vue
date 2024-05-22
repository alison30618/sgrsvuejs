<template>
  <div class="container">
    <h1>
      Listado Citas |
      <button @click="newCita()" class="btn btn-success mx-2">
        <font-awesome-icon icon="plus" />
      </button>
    </h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Cliente</th>
          <th scope="col">Servicio</th> 
          <th scope="col">Empleado</th> 
          <th scope="col">Fecha Cita</th> 
          <th scope="col">Estado</th> 
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cita, index) in citas" :key="index">
          <th scope="row">{{ cita.id }}</th>
          <td>{{ cita.cliente }}</td>
          <td>{{ cita.servicio }}</td> 
          <td>{{ cita.empleado }}</td> 
          <td>{{ cita.fecha }}</td> 
          <td>{{ cita.estado }}</td> 
          <td>
            <button
              @click="deleteCita(cita.id)"
              class="btn btn-danger mx-2"
            >
              <font-awesome-icon icon="trash" />
            </button>
            <button
              @click="editCita(cita.id)"
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

export default {
  name: "Curso",
  data() {
    return {
      citas: [],
    };
  },
  methods: {
    deleteCita(codigo) {
      Swal.fire({
        title: `Do you want to delete the Cita with id ${codigo}?`,
        showCancelButton: true,
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`http://127.0.0.1:8000/api/citas/${codigo}`)
            .then((response) => {
              if (response.data.success) {
                Swal.fire("Deleted!!", "", "success");
                this.citas = response.data.citas;
              }
            });
        }
      });
    },
    editCita(id){
        this.$router.push({name:'EditarCita', params:{id: `${id}`}})
    },
    newCita(){
        this.$router.push({name:'NewCita'});
    }
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/citas") // Corrected URL
      .then((response) => {
        this.citas = response.data.citas;
      });
  },
};
</script>
