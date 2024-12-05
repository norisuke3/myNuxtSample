<script setup>
  const { count, inc, dec } = useCounter(100);
</script>

<template>
  <div>
    <h1>Main Page</h1>
    <h2>{{ $hello('World')}}</h2>
    <div>Count:{{ count }}</div>
    <div>
      <button @click="() => inc()">increase</button>
      <button @click="() => dec()">decrease</button>
    </div>
  </div>
</template>
