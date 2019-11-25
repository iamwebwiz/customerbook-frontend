<template>
  <div>
    <div class="container my-5">
      <div style="display: grid; justify-content: center;" class="mb-5">
        <img alt="Vue logo" src="../assets/logo.png" />
        <h2>CustomerBook</h2>
      </div>
      <div class="d-flex justify-content-end mb-5">
        <button class="btn btn-primary" @click="addCustomer">
          <i class="fa fa-plus"></i> Add Customer
        </button>
      </div>
      <div class="card shadow">
        <div class="card-body table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Full Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(customer, index) in customers" :key="index">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ customer.first_name }} {{ customer.last_name }}</td>
                <td>{{ customer.email }}</td>
                <td>{{ customer.phone }}</td>
                <td>{{ customer.address }}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <new-customer :customer="customer" :storeCustomer="storeCustomer"></new-customer>
  </div>
</template>

<script>
/* eslint-disable */
import CustomerBookService from "../services/CustomerBookService";
import NewCustomer from "../components/NewCustomer";

let $ = window.$;

export default {
  name: "home",
  components: {
    NewCustomer
  },
  data: () => ({
    customers: [],
    customer: {}
  }),
  mounted() {
    this.fetchCustomers();
  },
  methods: {
    fetchCustomers() {
      CustomerBookService.fetchCustomers().then(response => {
        this.customers = response.data;
      });
    },
    addCustomer() {
      $("#newCustomerModal").modal('show');
    },
    storeCustomer() {
      CustomerBookService.storeCustomer(this.customer).then(response => {
        console.log(response);
      });
    }
  }
};
</script>
