/* eslint-disable */
import config from "../config";

const CustomerBookService = {
    fetchCustomers: async function () {
        try {
            const response = await window.axios.get(config.baseUrl);

            return response.data;
        } catch (error) {
            throw new error;
        }
    },
    storeCustomer: async function (customer) {
        try {
            const response = await window.axios.post(`${config.baseUrl}/store`, customer);

            return response.data;
        } catch (error) {
            throw new error;
        }
    },
    fetchSingleCustomer: async function (customerId) {
        try {
            const response = await window.axios.get(`${config.baseUrl}/customer`, {
                params: {
                    customerId: customerId
                }
            });

            return response.data;
        } catch (error) {
            throw new error;
        }
    },
    updateCustomer: async function (customer) {
        try {
            const response = await window.axios.put(`${config.baseUrl}/update`, {
                customerId: customer.id,
                first_name: customer.first_name,
                last_name: customer.last_name,
                email: customer.email,
                phone: customer.phone,
                address: customer.address
            });

            return response.data;
        } catch (error) {
            throw new error;
        }
    },
    deleteCustomer: async function (customerId) {
        try {
            const response = await window.axios.delete(`${config.baseUrl}/delete`, {
                params: {
                    customerId: customerId
                }
            });

            return response.data;
        } catch (error) {
            throw new error;
        }
    }
};

export default CustomerBookService;