<script setup>
import { ref } from "vue";
import ListItem from "./ListItem.vue";

const count = ref(0);
const start = Date.now();

const itemCounters = ref([]);
for (let i = 0; i < 1000; i++) {
  itemCounters.value.push(0);
  setInterval(() => {
    itemCounters.value[i]++;
    count.value++;
  }, i % 100);
}

// refresh window when clock hits 1:40 pm:

const numberFormatter = new Intl.NumberFormat("en-US", {
  style: "decimal",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
</script>

<template>
  <div>
    <h1>Vue item updates: {{ count }}</h1>
    <h2>
      Updates per second:
      {{ numberFormatter.format((count / (Date.now() - start)) * 1000) }}
    </h2>
    <ul>
      <li v-for="i in 1000" :key="i">
        <ListItem
          :text="`Item ${i} has been updated ${itemCounters[i - 1]} times`"
        />
      </li>
    </ul>
  </div>
</template>
