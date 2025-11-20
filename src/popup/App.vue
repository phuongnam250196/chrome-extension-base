<template>
  <div style="padding: 10px; width: 260px">
    <h3>Popup</h3>
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
