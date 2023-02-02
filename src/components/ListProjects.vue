<script>
import axios from "axios";
import ProjectCard from './ProjectCard.vue';

export default {
  name: "ListProjects",
  components: {
    ProjectCard,
  },
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
        <div class="container">
          <h3 class="text-decoration-underline my-3">Lista progetti</h3>
          <div class="row gy-4">
            <div class="col-md-6 col-lg-4" v-for="project in projects">
              <ProjectCard :info="project" />
            </div>
          </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>