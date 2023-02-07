<script>
import axios from "axios";

export default {
  name: "ListTypes",
  data() {
    return {
        types: [],
    }
  },
  created() {
    axios.get('http://127.0.0.1:8000/api/types').then((response) => {
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