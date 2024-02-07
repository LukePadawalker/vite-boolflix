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
                store.movies = res.data;
                console.log(store.movies)
            })
        }
    },
    created() {
        this.fetchMovies();
    }

}
</script>

<template>
    <div>
        <TheHeader />
    </div>
</template>

<style scoped></style>
