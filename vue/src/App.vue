<script setup>
import { ref } from "vue";

const count = ref(0);

setInterval(() => {
  count.value++;
}, 10);
</script>

<template>
  <h1>Vue count is {{ count }}</h1>
</template>
