<script>
import axios from "axios";

export default {
  name: "ListProjects",
  created() {
    axios.get('http://127.0.0.1:8000/api/projects').then((response) => {
        console.log(response.data);
    });
  }
};
</script>

<template>
    <section>
        <h1>Lista progetti</h1>
    </section>
</template>

<style lang="scss" scoped></style>