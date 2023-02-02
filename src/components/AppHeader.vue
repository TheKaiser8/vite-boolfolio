<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header class="text-bg-dark p-3">
    <div class="d-flex justify-content-between align-items-center">
      <h1 class="mb-0">Boolfolio</h1>
      <nav>
        <ul class="d-flex list-unstyled mb-0">
          <li class="ms-2"><router-link :to="{ name: 'homepage' }" class="text-decoration-none text-white fw-bold p-2">Homepage</router-link></li>
          <li class="ms-2"><router-link :to="{ name: 'about-us' }" class="text-decoration-none text-white fw-bold p-2">Chi siamo</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>