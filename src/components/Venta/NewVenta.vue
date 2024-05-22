<template>
  <div class="container text-start">
    <h1 class="text-primary fw-bold">Nueva</h1>
    <div class="card">
      <div class="card-header fw-bold">Venta</div>
      <div class="card-body">
        <form @submit.prevent="saveVenta">
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
                placeholder="Código Venta"
                disabled
                v-model="venta.id"
              />
            </div>
          </div>

          <div class="row mb-3">
            <label for="muni_codi" class="form-label">Producto :</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="bank" />
              </div>
              <select class="form-select" v-model="venta.producto_id">
                <option selected value="0">Seleccione un Producto</option>
                <option
                  v-for="producto in productos"
                  :key="producto.id"
                  :value="producto.id"
                >
                  {{ producto.nombre }}
                </option>
              </select>
            </div>
          </div>

            <div class="row mb-3">
            <label for="stock" class="form-label">Cantidad:</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="building" />
              </div>
              <input
                type="text"
                class="form-control"
                id="Cantidad	venta"
                placeholder="Cantidad Venta "
                v-model="venta.cantidad"
              />
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
                id="fecha	venta"
                placeholder="Fecha Venta "
                v-model="venta.fecha_venta"
              />
            </div>
          </div>
          <div class="row mb-3">
            <label for="telefono" class="form-label">Total:</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="building" />
              </div>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Total Venta"
                v-model="venta.total"
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
  name: "NewVenta",
  data() {
    return {
      venta: {
        id: 0,
        producto_id: 0,
        cantidad: 0,
        fecha_venta:0,
        total: ""
      },
      productos: []
    };
  },
  methods: {
    cancel() {
      this.$router.push({ name: "Ventas" });
    },

    async saveVenta() {
      const res = await axios.post(
        "http://127.0.0.1:8000/api/ventas",
        this.venta
      );
      console.log(res);
      if (res.status == 200) {
        this.$router.push({ name: "Ventas" });
        Swal.fire({
          icon: "success",
          title: "Venta ha sido guardada",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    },
  },

  mounted() {
    axios.get("http://127.0.0.1:8000/api/productos").then((response) => {
      this.productos = response.data.productos;
    }); 
  },
};
</script>