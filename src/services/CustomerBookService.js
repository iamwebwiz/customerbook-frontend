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
    }
};

export default CustomerBookService;