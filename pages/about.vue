<template>
<div>
  <Html lang='ja'>
    <Head>
      <Title>Aboutページ</Title>
      <Meta name="description" content="Aboutページ" />
    </Head>
  </Html>
  <h1>About Page</h1>
  <h2>Counter</h2>
  <p>Count: {{ counter }}</p>
  <div><button @click="counter++">+</button></div>
  </div>
</template>

<script setup>
const counter = useState('counter', () => 0);

// definePageMeta({
//   middleware: defineNuxtRouteMiddleware((to, from) => {
//     console.log('to', to);
//     console.log('from', from);
//   }),
// });

// const title = ref('About ページ');
// const description = ref('About ページ')

// useHead({
//   title,
//   meta: [{
//     name: 'description',
//     content: description,
//   }],
// });

// const route = useRoute()
// function enableCustomLayout() {
//   route.meta.layout = 'custom';
// }
</script>
