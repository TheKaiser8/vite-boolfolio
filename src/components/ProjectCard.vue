<script>

export default {
  name: "ProjectCard",
  props: {
    info: Object,
  },
  methods: {
    truncateText(text) {
        return text.substring(0, 200) + "...";
    }
  },
};
</script>

<template>
    <div class="card h-100">
        <div class="text-center">
            <img v-if="info.image_url" :src="info.image_url" class="card-img-top" :alt="info.title">
        </div>
        <div class="card-body d-flex flex-column">
            <h4 class="card-title fw-bold">{{ info.title }}</h4>
            <h5 class="card-subtitle mb-2 text-muted">{{ info.slug }}</h5>
            <div class="mb-3" v-if="info.type">
                Tipologia:
                <strong>{{ info.type.name }}</strong>
            </div>
            <div class="mb-3" v-else>
                <strong>Nessuna tipologia</strong>
            </div>
            <div class="mb-3" v-if="(info.technologies != '')">
                Tecnologie:
                <span class="badge text-bg-primary ms-1" v-for="(technologies, index) in info.technologies" :key="index">{{ technologies.name }}</span>
            </div>
            <p class="card-text" v-if="info.description">{{ truncateText(info.description) }}</p>
            <div class="mb-3">
                Cliente:
                <strong>{{ info.customer }}</strong>
            </div>
            <div class="mt-auto text-center">
                <router-link :to="{ name: 'single-project', params: { slug: info.slug } }" class="btn btn-primary">Dettagli</router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>