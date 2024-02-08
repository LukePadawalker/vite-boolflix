<script>
import { store } from '/src/data/store.js'
import MovieCard from "./MovieCard.vue"
export default {
    components: { MovieCard },
    data: () => ({ store })

}
</script>

<template>
    <div class="container">
        <h1>Movies!</h1>
        <MovieCard v-for="movie in store.movies" :title="movie.title" :original_title="movie.original_title"
            :language="movie.original_language" :score="movie.vote_average" :poster_path="movie.poster_path" />
        <h1>Tv Series!</h1>

        <MovieCard v-for="tvserial in store.tvSeries" :title="tvserial.name" :original_title="tvserial.original_name"
            :language="tvserial.original_language" :score="tvserial.vote_average" :poster_path="tvserial.poster_path" />
    </div>
</template>

<style scoped></style>
