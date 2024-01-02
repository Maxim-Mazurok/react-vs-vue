<script setup>
import { ref } from "vue";

const count = ref(0);
const start = Date.now();

setInterval(() => {
  count.value++;
}, 10);
</script>

<template>
  <div>
    <h1>Vue count is {{ count }}</h1>
    <h2>
      Count increments times per second:
      {{ ((count / (Date.now() - start)) * 1000).toFixed(2) }}
    </h2>
  </div>
</template>
