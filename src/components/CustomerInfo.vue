<template>
    <div>
        <div class="modal fade" id="customerInfoModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{ customer.first_name }}&rsquo;s Data</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body d-flex flex-column text-center justify-content-center align-items-center py-5">
                        <p><b>Name</b> <br> {{ customer.first_name }} {{ customer.last_name }}</p>
                        <p><b>Email</b> <br> {{ customer.email }}</p>
                        <p><b>Phone</b> <br> {{ customer.phone }}</p>
                        <p><b>Address</b> <br> {{ customer.address }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CustomerInfo",
        props: ['customer']
    }
</script>

<style scoped>

</style>