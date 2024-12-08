<template>
  <nav>
    <NuxtLink :to="{ name: 'index' }">Home</NuxtLink>
    <NuxtLink :to="{ name: 'about' }">About</NuxtLink>
    <NuxtLink :to="{ name: 'users-list' }">User List</NuxtLink>
    <NuxtLink :to="{ name: 'posts' }">Posts List</NuxtLink>
  </nav>
</template>

<style scoped>
  nav > a{
    margin-right: 10px;
  }
</style>
