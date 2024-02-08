<script>
export default {
    props: {
        title: String,
        original_title: String,
        language: String,
        score: Number,
        poster_path: String,


    },
    data: () => ({
        imageUri: 'https://image.tmdb.org/t/p/'
    })


}
</script>

<template>
    <ul>
        <li class="title">{{ title }}</li>
        <li class="original_title">{{ original_title }}</li>
        <img :src="language.jpg" :alt="language">
        <li class="score">{{ score }}</li>
        <img :src="poster_path" alt="">

    </ul>
</template>

<style scoped></style>
