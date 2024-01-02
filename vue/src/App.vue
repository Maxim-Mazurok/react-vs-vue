<script setup>
import { ref } from "vue";

const count = ref(0);
const start = Date.now();

const addInterval = () =>
  setInterval(() => {
    count.value++;
    addInterval();
  }, 10);

addInterval();

const numberFormatter = new Intl.NumberFormat("en-US", {
  style: "decimal",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
</script>

<template>
  <div>
    <h1>Vue count is {{ count }}</h1>
    <h2>
      Count increments times per second:
      {{ numberFormatter.format((count / (Date.now() - start)) * 1000) }}
    </h2>
  </div>
</template>
