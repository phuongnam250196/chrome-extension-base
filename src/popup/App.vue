<template>
  <div style="padding: 10px; width: 260px">
    <h3 class="title">Popup</h3>
    <p>Counter: {{ count }}</p>
    <button @click="inc">+</button>
    <button @click="dec">-</button>
    <Hello />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Hello from '@/components/Hello.vue'

const count = ref(0)
const inc = () => count.value++
const dec = () => count.value--
</script>

<style lang="scss">
.title {
  color: green;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
