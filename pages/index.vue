<script setup>
const { count, inc, dec } = useCounter(100);

const task = ref('');
const { data: tasks, refresh } = useFetch('/api/task');
const addTask = async () => {
  await $fetch('/api/task', {
    method: 'post',
    body: { task: task.value },
  });
  refresh();
  task.value = '';
}
</script>

<template>
<div>
  <h1>Main Page</h1>
  <h2 class="text-lime-500">{{ $hello('World')}}</h2>
  <ul>
    <li v-for="task in tasks" :key="task.id">{{ task.task }}</li>
  </ul>
  <form @submit.prevent="addTask">
    <div>
      <input v-model='task'/>
    </div>
    <div>
      <button type="submit">タスクを登録</button>
    </div>
  </form>

  <br/>
  <div>Count:{{ count }}</div>
    <div>
      <button @click="() => inc()">increase</button>
      <button @click="() => dec()">decrease</button>
    </div>
  </div>
</template>
