<script>

export default {
  name: "ProjectCard",
  props: {
    info: Object,
  },
  methods: {
    truncateText(text) {
        return text.substring(0, 250) + "...";
    }
  },
};
</script>

<template>
    <div class="card">
        <div class="text-center">
            <img src="" class="card-img-top" alt="">
        </div>
        <div class="card-body">
            <h4 class="card-title fw-bold">{{ info.title }}</h4>
            <h5 class="card-subtitle mb-2 text-muted">{{ info.slug }}</h5>
            <div class="mb-3" v-if="info.type">
                Tipologia:
                <strong>{{ info.type.name }}</strong>
            </div>
            <div class="mb-3" v-else>
                <strong>Nessuna tipologia</strong>
            </div>
            <p class="card-text" v-if="info.description">{{ truncateText(info.description) }}</p>
            <div>
                Cliente:
                <strong>{{ info.customer }}</strong>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>