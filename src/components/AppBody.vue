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
        <h2>ORIGINALI NETFLIX</h2>
        <div class="movie-container">
            <MovieCard v-for="movie in store.movies" :title="movie.title" :original_title="movie.original_title"
                :language="movie.original_language" :score="movie.vote_average" :poster_path="movie.poster_path" />
        </div>
        <h2>Serie Tv</h2>

        <div class="movie-container">
            <MovieCard v-for="tvserial in store.tvSeries" :title="tvserial.name" :original_title="tvserial.original_name"
                :language="tvserial.original_language" :score="tvserial.vote_average" :poster_path="tvserial.poster_path" />

        </div>
    </div>
</template>

<style scoped>
.container {
    color: white;
    height: calc(100vh - 70px);
    width: 100%;
    overflow-x: scroll;
    background-color: rgb(40, 39, 39);

    .movie-container {
        display: flex;

    }

}
</style>
