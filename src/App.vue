<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <SelectLanguage/>
  </div>
</template>
<script setup>
import Navbar from "./components/Navbar.vue";
import SelectLanguage from "./components/SelectLanguage.vue";
</script>