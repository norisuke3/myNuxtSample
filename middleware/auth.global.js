export default defineNuxtRouteMiddleware((to, from) => {
  console.log('from:', from.fullPath);
  console.log('to:', to.fullPath);
});
