<script>
import store from './data/store.js'
import MovieCard from "./MovieCard.vue"
export default {
    components: { MovieCard }

}
</script>

<template>
    <div class="container">
        <h1>Movies!</h1>
        <MovieCard v-for="movie in store.movies" :title="movie.title" :original_title="movie.original_title"
            :language="movie.language" :score="movie.score" />
        <h1>Tv Series!</h1>

        <MovieCard v-for="movie in store.tvSeries" :title="movie.name" :original_name="movie.original_title"
            :language="movie.language" :score="movie.score" />
    </div>
</template>

<style scoped></style>
