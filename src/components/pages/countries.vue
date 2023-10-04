<template>
  <AppModal v-model="dialog">
    <h1 v-if="!forms._id">Add User</h1>
    <h1 v-else>Edit User</h1>
    <form>
      <input
        type="text"
        v-model="forms.name"
        class="form-control my-2"
        placeholder="Firstname"
      />
      <input
        type="text"
        v-model="forms.surname"
        class="form-control my-2"
        placeholder="Lastname"
      />
      <input
        type="text"
        v-model="forms.age"
        class="form-control my-2"
        placeholder="Age"
      />
      <input
        type="text"
        v-model="forms.is_diploma"
        class="form-control my-2"
        placeholder="is_diploma"
      />
      <input
        type="text"
        v-model="forms.address"
        class="form-control my-2"
        placeholder="Address"
      />
      <button class="btn btn-success" @click="save">save</button>
    </form>
  </AppModal>
</template>

<script setup>
import AppModal from "../ui/app-modal.vue";
import { ref, watch } from "vue";
import http from "../plugins/axios";
import { createToast } from "mosha-vue-toastify";
const dialog = ref(false);

const toastcreate = () => {
  createToast("Successfully created! (Reloading...)", {
    position: "top-right",
    type: "success",
    transition: "bounce",
  });
};

const toastedit = () => {
  createToast("Successfully edited! (Reloading...)", {
    position: "top-right",
    type: "warning",
    transition: "bounce",
  });
};

const forms = ref({
  name: "",
  surname: "",
  age: "",
  is_diploma: "",
  address: "",
});

watch(dialog, (value) => {
  if (!value) {
    forms.value = {};
  }
});
const openModal = (value) => {
  if (value) forms.value = { ...value };
  dialog.value = true;
};

const save = (e) => {
  e.preventDefault();
  try {
    if (!forms.value._id) {
      http
        .post("/users/add", {
          name: forms.value.name,
          surname: forms.value.surname,
          age: forms.value.age,
          is_diploma: forms.value.is_diploma,
          address: forms.value.address,
        })
        .then((res) => {
          console.log(res);
          toastcreate();
          setTimeout(() => {
            location.reload();
          }, 3000);
        });
    } else {
      http
        .put(`/users/update/${forms.value._id}`, {
          name: forms.value.name,
          surname: forms.value.surname,
          age: forms.value.age,
          is_diploma: forms.value.is_diploma,
          address: forms.value.address,
        })
        .then((res) => {
          console.log(res);
          toastedit();
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

<style lang="scss" scoped></style>
