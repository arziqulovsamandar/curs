<template>
    <AppModal v-model="dialog">
      <h1>Creaate Product</h1>
      <form action="">
        <input
          type="text"
          v-model="forms.name"
          class="form-control my-2"
          placeholder="Name"
        />
        <input
          type="text"
          v-model="forms.surname"
          class="form-control my-2"
          placeholder="Surname"
        />
        <input
          type="number"
          v-model="forms.age"
          class="form-control my-2"
          placeholder="Age"
        />
        <input
          type="boolean"
          v-model="forms.is_diploma"
          class="form-control my-2"
          placeholder="is_diploma"
        />
        <input
          type="text"
          v-model="forms.address"
          class="form-control my-2"
          placeholder="address"
        />

  
        <!-- <textarea
          v-model="forms.description"
          cols="30"
          rows="10"
          class="form-control my-2"
          placeholder="Description"
        ></textarea> -->
        <button class="btn btn-success" @click="save_form">Save</button>
      </form>
    </AppModal>
  </template>
  
  <script setup>
  import AppModal from "../ui/app-modal.vue";
  import { ref, watch } from "vue";
  import natification from "../plugins/Notification";
  const dialog = ref(false);
  const forms = ref({
    name: "",
    surname: "",
    age:null,
    is_diploma: false,
    address: "",
  });
  watch(dialog, (value) => {
    if (!value) {
      forms.value = {};
    }
  });
  const users = ref([]);
  const openModal = (value, title) => {
    if (title == "array") {
      users.value = value;
    } else if (title == "object") {
      forms.value = { ...value };
    }
    dialog.value = true;
  };

  const save_form = (e) => {
    // e.preventDefault();
    try {
      if (!forms.value._id) {
        http
          .post("/users/add", {
            name: forms.value.name,
            surname: forms.value.surname,
            age: forms.value.age,
            is_diploma: forms.value == 'yes' ? true : false,            address: forms.value.address,
          })
          .then((res) => {
            console.log(res);

            Notification("user created", "success");
            setTimeout(() => {
              location.reload();
            }, 3000);
          });
      } else {
        http
          .patch(`/users/update/${forms.value._id}`, {
            name: forms.value.name,
            surname: forms.value.surname,
            age: forms.value.age,
            is_diploma: forms.value.is_diploma == 'yes' ? true : false,
          })
          .then((res) => {
            console.log(res);
            Notification("user edited", "warning");
            setTimeout(() => {
              location.reload();
            }, 3000);
          });
      }
    } catch (err) {
      console.log(err);
    }
  };
  defineExpose({ openModal });
  </script>
  
  <style lang="scss" scoped>
  textarea {
    width: 100%;
    height: 150px;
  }
  </style>