<!-- <template>
  <div class="users">
    <div class="users_item">
      <div class="users_item-table">
        <AppTable :headers="headers" :body="users">
          <template #body_company="{ item }">
            <span>{{ item.company.name }}</span>
          </template>

          <template #body_address="{ item }">
            <span>{{ item.address.city }}</span>
          </template>
        </AppTable>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import AppTable from "@/components/ui/app-table.vue";

export default {
  components: {
    AppTable,
  },
  setup() {
    const users = ref([]);
    const headers = [
      { title: "Name", value: "name" },
      { title: "Username", value: "username" },
      { title: "Phone", value: "phone" },
      { title: "Address", value: "address" },
      { title: "Company", value: "company" },
    ];

    const getUsers = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          users.value = res.data;
        })
        .catch((err) => console.log(err));
    };

    onMounted(getUsers);

    return {
      users,
      headers,
    };
  },
};
</script> -->
<template>
  <div class="container-fluid">
    <create_product ref="createProduct" />
    <h1 class="text-center mt-5">User</h1>
    <div class="row">
      <div class="col-12">
        <AppTable :headers="headers" :body="users">
          <template #body_edit="{ item }">
            <button class="btn btn-warning" @click="editProduct(item)">
              Edit
            </button>
          </template>
          <template #body_delete="{ item }">
            <button class="btn btn-danger" @click="deleteProd(item)">
              Delete
            </button>
          </template>
        </AppTable>
      </div>
    </div>
    <button class="btn btn-success" @click="addProduct">Add User</button>
  </div>
</template>

<script setup>
import create_product from "@/components/pages/create_user.vue";
import AppTable from "@/components/ui/app-table.vue";
import { ref } from "vue";
import axios from "../../components/plugins/axios";

const users = ref();
const createProduct = ref();

const headers = ref([
  // { title: "T/R", value: "id" },
  { title: "Name", value: "name" },
  { title: "Surname", value: "surname" },
  { title: "Age", value: "age" },
  { title: "Is Diploma", value: "is_diploma" },
  { title: "Address", value: "address" },
  { title: "Edit", value: "edit" },
  { title: "Delete", value: "delete" },
]);

const getusers = () => {
  axios
    .get("/users")
    .then((res) => {
      users.value = res.data.users;
      console.log(res.data.users);
    })
    .catch((error) => {
      console.log(error);
    });
};
const addProduct = () => {
  createProduct.value.openModal(users.value, "array");
};
const editProduct = (item) => {
  createProduct.value.openModal(item, "object");
};
const deleteProd = (item) => {
  const index = users.value.indexOf(item);
  if (index !== -1) {
    users.value.splice(index, 1);
  }
};

getusers();
</script>

<style lang="scss" scoped></style>