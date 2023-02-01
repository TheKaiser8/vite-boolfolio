<script>
export default {
  data() {
    return {
      title: 'Il titolo della pagina'
    }
  }
}
</script>

<template>
    <h1>{{ title }}</h1>
</template>

<style lang="scss" scoped>
h1 {
  @include media-breakpoint-up(md) {
    color: red;
  }
}
</style>
