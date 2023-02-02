<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header class="d-flex justify-content-between align-items-center">
    <h1>Header</h1>
    <nav>
      <ul class="d-flex list-unstyled">
        <li class="ms-2"><router-link :to="{ name: 'homepage' }" class="text-decoration-none p-2">Homepage</router-link></li>
        <li class="ms-2"><router-link :to="{ name: 'about-us' }" class="text-decoration-none p-2">Chi siamo</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>