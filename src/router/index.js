import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Clientes from '../views/Clientes'
import NewCliente from '../components/Cliente/NewCliente'
import EditarCliente from '../components/Cliente/EditarCliente'
import Empleados from '../views/Empleados'
import NewEmpleado from '../components/Empleado/NewEmpleado'
import EditarEmpleado from '../components/Empleado/EditarEmpleado'
import Servicios from '../views/Servicios'
import NewServicio from '../components/Servicio/NewServicio'
import EditarServicio from '../components/Servicio/EditarServicio'
import Citas from '../views/Citas'
import NewCita from '../components/Cita/NewCita'
import EditarCita from '../components/Cita/EditarCita'
import Ventas from '../views/Ventas'
import NewVenta from '../components/Venta/NewVenta'
import EditarVenta from '../components/Venta/EditarVenta'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: Clientes
  },
  {
    path: '/add-cliente/',
    name: 'NewCliente',
    component: NewCliente
  },
  {
    path: '/edit-cliente/:id',
    name: 'EditarCliente',
    component: EditarCliente
  },
  {
    path: '/empleados',
    name: 'Empleados',
    component: Empleados
  },
  {
    path: '/add-empleado/',
    name: 'NewEmpleado',
    component: NewEmpleado
  },
  {
    path: '/edit-empleado/:id',
    name: 'EditarEmpleado',
    component: EditarEmpleado
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: Servicios
  },
  {
    path: '/add-servicio/',
    name: 'NewServicio',
    component: NewServicio
  },
  {
    path: '/edit-servicio/:id',
    name: 'EditarServicio',
    component: EditarServicio
  },
  {
    path: '/citas',
    name: 'Citas',
    component: Citas
  },
  {
    path: '/add-cita/',
    name: 'NewCita',
    component: NewCita
  },
  {
    path: '/edit-cita/:id',
    name: 'EditarCita',
    component: EditarCita
  },
  {
    path: '/ventas',
    name: 'Ventas',
    component: Ventas
  },
  {
    path: '/add-venta/',
    name: 'NewVenta',
    component: NewVenta
  },
  {
    path: '/edit-venta/:id',
    name: 'EditarVenta',
    component: EditarVenta
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
