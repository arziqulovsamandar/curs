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
        v-model="forms.brand"
        class="form-control my-2"
        placeholder="Brand"
      />
      <input
        type="text"
        v-model="forms.group"
        class="form-control my-2"
        placeholder="Group"
      />
      <input
        type="text"
        v-model="forms.price"
        class="form-control my-2"
        placeholder="Price"
      />
      <input
        type="text"
        v-model="forms.arrival_price"
        class="form-control my-2"
        placeholder="Arival price"
      />

      <input
        type="text"
        v-model="forms.selling_price"
        class="form-control my-2"
        placeholder="Selling price"
      />

      <textarea
        v-model="forms.description"
        cols="30"
        rows="10"
        class="form-control my-2"
        placeholder="Description"
      ></textarea>
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
  brand: "",
  group: "",
  price: null,
  arrival_price: null,
  selling_price: null,
  description: "",
});
watch(dialog, (value) => {
  if (!value) {
    forms.value = {};
  }
});
const products = ref([]);
const openModal = (value, title) => {
  if (title == "array") {
    products.value = value;
  } else if (title == "object") {
    forms.value = { ...value };
  }
  dialog.value = true;
};
const save_form = (e) => {
  e.preventDefault();
  if (!forms.value.id) {
    products.value.push({
      id: products.value.length + 1,
      ...forms.value,
    });
    natification("Product created", "success");
  } else {
    console.log(forms.value.id, "edit");
    natification("Product editing", "warning");
  }
  dialog.value = false;
  forms.value = {};
};
defineExpose({ openModal });
</script>

<style lang="scss" scoped>
textarea {
  width: 100%;
  height: 150px;
}
</style>