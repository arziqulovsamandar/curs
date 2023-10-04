<template>
  <div class="box">
    <router-link
      class="sidebar_link"
      v-for="(item, index) in items"
      :key="index"
      :to="item.path"
    >
      {{ item.title }}
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
  },
});
</script>

<style lang="scss" scoped>
.box{
    width:100%;
    height:100%;
    background-color:rgb(155, 50, 50);
    padding:20px;
    display:flex;
    flex-direction:column;
    gap:15px;
    .sidebar_link{
        width:100%;
        padding:10px 15px;
        text-decoration:none;
        border-radius:5px;
        background-color:rgb(17, 252, 248);
    }
}
</style>
