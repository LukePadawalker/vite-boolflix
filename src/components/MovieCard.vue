<script>
import MovieContainer from './MovieContainer.vue';

export default {
    props: {
        title: String,
        original_title: String,
        language: String,
        score: String
    }

}
</script>

<template>
    <title class="title">{{ title }}</title>
    <title class="original_title">{{ original_title }}</title>
    <img :src="{ language }.jpg" :alt="{ language }">
    <p class="score">{{ score }}</p>
</template>

<style scoped></style>
