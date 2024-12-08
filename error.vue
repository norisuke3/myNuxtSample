<template>
  <NuxtLayout>
    <p>{{ error }}</p>
    <button @click="clearError()">Clear Error</button>
  </NuxtLayout>
</template>

<script setup>
const error = useError();
</script>
