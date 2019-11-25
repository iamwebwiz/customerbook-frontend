/* eslint-disable */

const CustomerBookService = {
    fetchCustomers: async function () {
        try {
            const response = await window.axios.get('https://customerbook.herokuapp.com');

            return response.data;
        } catch (error) {
            throw new error;
        }
    }
};

export default CustomerBookService;