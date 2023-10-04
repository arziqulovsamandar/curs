<template>
  <router-view></router-view>
</template>

<script setup></script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-family: sans-serif;
  list-style: none;
}
input[type="number"] {
  -moz-appearance: textfield;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
textarea {
  width: 100%;
  height: 200px;
  resize: none !important;
}
</style>
