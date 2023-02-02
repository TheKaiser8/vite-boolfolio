<script>
import axios from 'axios';

export default {
  name: "SingleProject",
  data() {
    return {
        project: '',
    };
  },
  created() {
    axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.slug}`).then((response) => {
        this.project = response.data;
    }).catch(() => {
        this.$router.push({ name: 'page-404' });
    });
  },
};
</script>

<template>
    <h2 class="text-decoration-underline text-center my-3">Dettagli progetto: <strong>{{ project.title }}</strong></h2>
    <div class="d-flex justify-content-center">
        <div class="card w-50">
            <div class="text-center">
                <img v-if="project.image_url" :src="project.image_url" class="card-img-top" :alt="project.title">
            </div>
            <div class="card-body">
                <h4 class="card-title fw-bold">{{ project.title }}</h4>
                <h5 class="card-subtitle mb-2 text-muted">{{ project.slug }}</h5>
                <div v-if="project.type" class="mb-3">
                    Tipologia:
                    <strong>{{ project.type.name }}</strong>
                </div>
                <div v-else class="mb-3">
                    <strong>Nessuna tipologia</strong>
                </div>
                <div v-if="(project.technologies != '')" class="mb-3">
                    Tecnologie:
                    <span class="badge text-bg-primary ms-1" v-for="(technologies, index) in project.technologies" :key="index">{{ technologies.name }}</span>
                </div>
                <p class="card-text">{{ project.description }}</p>
                <div>Cliente:
                    <strong>{{ project.customer }}</strong>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>