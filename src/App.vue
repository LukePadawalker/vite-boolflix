<script>
import axios from 'axios';
import { store } from '/src/data/store.js'
import { apiUri } from '/src/data/index.js'
import TheHeader from './components/TheHeader.vue'

export default {
    components: { TheHeader },
    methods: {
        fetchMovies(endpoint = apiUri) {
            axios.get(endpoint).then(res => {
                store.movies = res.data.results;
                console.log(store.movies)
            })
        },
        filterContent(inputSearch) {
            const filteredMovies = store.movies.filter(movie => movie.title.toLowerCase().includes(inputSearch))
            console.log(filteredMovies, inputSearch);
            return filteredMovies;
        }
    },
    computed: {
    },

    created() {
        this.fetchMovies();
    }
}
</script>

<template>
    <div>
        <TheHeader @name-search="filterContent" />
    </div>
</template>

<style scoped></style>
