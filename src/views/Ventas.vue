<template>
  <div class="container">
    <h1>
      Listado Ventas |
      <button @click="newVenta()" class="btn btn-success mx-2">
        <font-awesome-icon icon="plus" />
      </button>
    </h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Producto</th> 
          <th scope="col">Cantidad</th> 
          <th scope="col">Fecha Venta</th> 
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(venta, index) in ventas" :key="index">
          <th scope="row">{{ venta.id }}</th>
          <td>{{ venta.producto }}</td>
          <td>{{ venta.cantidad }}</td> 
          <td>{{ venta.fecha_venta }}</td>  
          <td>
            <button
              @click="deleteVenta(venta.id)"
              class="btn btn-danger mx-2"
            >
              <font-awesome-icon icon="trash" />
            </button>
            <button
              @click="editVenta(venta.id)"
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
  name: "Venta",
  data() {
    return {
      ventas: [],
    };
  },
  methods: {
    deleteVenta(codigo) {
      Swal.fire({
        title: `Do you want to delete the Venta with id ${codigo}?`,
        showCancelButton: true,
        confirmButtonText: "Delete",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`http://127.0.0.1:8000/api/ventas/${codigo}`)
            .then((response) => {
              if (response.data.success) {
                Swal.fire("Deleted!!", "", "success");
                this.ventas = response.data.ventas;
              }
            });
        }
      });
    },
    editVenta(id){
        this.$router.push({name:'EditarVenta', params:{id: `${id}`}})
    },
    newVenta(){
        this.$router.push({name:'NewVenta'});
    }
  },
  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/ventas") // Corrected URL
      .then((response) => {
        this.ventas = response.data.ventas;
      });
  },
};
</script>
