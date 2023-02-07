<script>
import axios from "axios";
import { store } from '../store';

export default {
  name: "ListTypes",
  data() {
    return {
      store,
      types: [],
    }
  },
  created() {
    axios.get(`${this.store.api_url}/types`).then((response) => {
      this.types = response.data;
    });
  },
};
</script>

<template>
  <section>
    <div class="container">
      <h3 class="text-decoration-underline my-3">Lista tipologie</h3>
      <a href="" class="btn btn-light my-3"><i class="fa-regular fa-square-plus me-2"></i>Aggiungi tipologia</a>
      <div v-for="type in types" class="my-2">{{ type.name }}</div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>