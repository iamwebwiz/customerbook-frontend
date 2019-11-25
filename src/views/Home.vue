<template>
  <div>
    <div class="container my-5">
      <div style="display: grid; justify-content: center;" class="mb-5">
        <img alt="Vue logo" src="../assets/logo.png" />
        <h2>CustomerBook</h2>
      </div>
      <div class="d-flex justify-content-end mb-5">
        <button class="btn btn-primary" @click="addCustomer">
          Add Customer
        </button>
      </div>
      <div class="card shadow">
        <div class="card-body table-responsive">
          <table class="table">
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
              <tr>
                <th scope="row">1</th>
                <td>John Doe</td>
                <td>john@doe.com</td>
                <td>0828388383</td>
                <td>2, John Doe street</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomerBookService from "../services/CustomerBookService";
/* eslint-disable */
const $ = window.$;

export default {
  name: "home",
  data: () => ({
    customers: []
  }),
  mounted() {
    CustomerBookService.fetchCustomers().then(response => {
      this.customers = response.data;
    });
  },
  methods: {
    addCustomer() {
      alert("It's gonna be alright!");
    }
  }
};
</script>
