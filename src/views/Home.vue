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
      <div class="card shadow py-5">
        <div class="card-body table-responsive">
          <div v-if="!customers.length" class="text-center">
            <i class="fa fa-spinner fa-spin fa-3x"></i>
            <br>
            Loading...
          </div>
          <div v-else>
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
                <td>
                  <button class="btn btn-primary" @click="viewSingleCustomer(customer.id)">
                    <i class="fa fa-eye"></i>
                  </button>
                  <button class="btn btn-info mx-1" @click="editCustomer(customer.id)">
                    <i class="fa fa-pencil"></i>
                  </button>
                  <button class="btn btn-danger" @click="deleteCustomer(customer.id)">
                    <i class="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <new-customer
      :customer="customer"
      :storeCustomer="storeCustomer"
    ></new-customer>
    <customer-info :customer="customer"></customer-info>
    <edit-customer
      :customer="customer"
      :onCustomerUpdate="updateCustomer"
    ></edit-customer>
  </div>
</template>

<script>
/* eslint-disable */
import toastr from 'toastr';
toastr.options.closeMethod = 'fadeOut';
toastr.options.closeDuration = 300;
toastr.options.closeEasing = 'swing';
toastr.options.progressBar = true;

import CustomerBookService from "../services/CustomerBookService";
import NewCustomer from "../components/NewCustomer";
import CustomerInfo from "../components/CustomerInfo";
import EditCustomer from "../components/EditCustomer";

let $ = window.$;

export default {
  name: "home",
  components: {
    NewCustomer,
    CustomerInfo,
    EditCustomer
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
        if (response.status === 'error') {
          for (let [field, message] of Object.entries(response.validationErrors)) {
            toastr.error(message, 'Error!');
          }
        }

        if (response.status === 'success') {
          toastr.success(response.message, 'Success!');
          this.customers.push(response.data);
          this.customer = {};
          $('#newCustomerModal').modal('hide');
        }
      });
    },
    viewSingleCustomer(customerId) {
      CustomerBookService.fetchSingleCustomer(customerId).then(response => {
        this.customer = response.data.customer;
        $('#customerInfoModal').modal('show');
      });
    },
    editCustomer(customerId) {
      CustomerBookService.fetchSingleCustomer(customerId).then(response => {
        this.customer = response.data.customer;
        $('#editCustomerModal').modal('show');
      });
    },
    updateCustomer(customer) {
      CustomerBookService.updateCustomer(customer).then(response => {
        if (response.status === 'error') {
          for (let [field, message] of Object.entries(response.validationErrors)) {
            toastr.error(message, 'Error!');
          }
        }

        if (response.status === 'success') {
          toastr.success(response.message, 'Success!');
          this.customer = {};
          $('#editCustomerModal').modal('hide');
          this.fetchCustomers();
        }
      });
    },
    deleteCustomer(customerId) {
      CustomerBookService.deleteCustomer(customerId).then(response => {
        if (response.status === 'error') {
          for (let [field, message] of Object.entries(response.validationErrors)) {
            toastr.error(message, 'Error!');
          }
        }

        if (response.status === 'success') {
          toastr.success(response.message, 'Success!');
          this.fetchCustomers();
        }
      })
    }
  }
};
</script>
