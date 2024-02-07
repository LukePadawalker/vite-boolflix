<script>
import axios from 'axios';
import { store } from '/src/data/store.js'
import { apiUri } from '/src/data/index.js'

export default {
    methods: {
        fetchMovies(endpoint = apiUri) {
            axios.get(endpoint).then(res => {
                store.movies = res;
                console.log(store.movies)
            })
        }
    },
    created() {
        this.fetchMovies();
    }

}
</script>

<template></template>

<style scoped></style>
