<template>
  <div>
    <h1>ユーザリスト</h1>
    <h2>Counter</h2>
    <p>Count: {{ counter }}</p>
    <div><button @click="inc">+</button></div>
  </div>
</template>
<script setup>
const counter = ref(0);
const inc = () => {
  // throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
  throw createError('エラー発生');
  counter.value++;
};

// const { data: users } = await useFetch(
//   'https://jsonplaceholder.typicode.com/user/'
// );
// console.log('process');
// if (!users.value) {
//   throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
// }
</script>
