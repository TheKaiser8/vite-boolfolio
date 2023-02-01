<script>
import axios from "axios";

export default {
  name: "ListProjects",
  data() {
    return {
        projects: [],
    }
  },
  created() {
    axios.get('http://127.0.0.1:8000/api/projects').then((response) => {
        this.projects = response.data;
    });
  },
};
</script>

<template>
    <section>
        <h1>Lista progetti</h1>
        <ul>
            <li v-for="project in projects">{{ project.title }}</li>
        </ul>
    </section>
</template>

<style lang="scss" scoped></style>