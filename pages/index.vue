<script setup>
  const { count, inc, dec } = useCounter(100);
  const { data } = useFetch('/api/hello/');
</script>

<template>
<div>
  <h1>Main Page</h1>
  <h2 class="text-lime-500">{{ $hello('World')}}</h2>
  <h2>{{ data }}</h2>
  <div>Count:{{ count }}</div>
    <div>
      <button @click="() => inc()">increase</button>
      <button @click="() => dec()">decrease</button>
    </div>
  </div>
</template>
