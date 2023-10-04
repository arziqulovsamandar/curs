<template>
  <div class="card container mt-5">
    <div class="card-header text-center">
      <h1>LogIn</h1>
    </div>
    <div class="card-body d-flex">
      <input
        type="text"
        placeholder="Name"
        class="form-control"
        v-model="info.username"
      />
      <input
        type="password"
        placeholder="Password"
        class="form-control"
        v-model="info.password"
      />
    </div>
    <div class="card-footer">
      <Btn :title="'success'" @click="savebnt">Sign In</Btn>
    </div>
  </div>
  <template>
    <button @click="toast">Toast it!</button>
  </template>
</template>

<script setup>
import { ref } from "vue";
import Btn from "../components/ui/Btn.vue";
import { useRouter } from "vue-router";
import $http from "../components/plugins/axios";
const router = useRouter();

const info = ref({
  username: "",
  password: null,
});

const savebnt = () => {
  // if (info.value.username == "superadmin" && info.value.password == 124) {
  //   router.push({ name: "superadmin" });
  // } else {
  //   toast();
  // }

  $http
    .post("/admins/login", {
      username: info.value.username,
      password: info.value.password,
    })
    .then((res) => {
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        if (res.data.roles == "admin") {
          router.push({ name: "admin" });
        } else {
          router.push({ name: "superadmin" });
        }
      }
    })
    .catch((err) => {
      toast();
      console.log(err);
    });
};

import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

const toast = () => {
  createToast("Name or password is wrong!", {
    position: "top-right",
    type: "danger",
    transition: "bounce",
  });
};
</script>

<style lang="scss" scoped>
.d-flex {
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.form-control {
  width: 50%;
}

.card-footer {
  display: flex;
  justify-content: center;
}
</style>
