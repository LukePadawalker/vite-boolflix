<script>
import axios from 'axios';
import { store } from '/src/data/store.js'
import { apiUri } from '/src/data/index.js'
import TheHeader from './components/TheHeader.vue'

export default {
    data: () => ({ store }),
    name: 'App',
    components: { TheHeader },
    methods: {
        fillTitleFilter(inputSearch) {
            store.filter = inputSearch
            console.log(inputSearch)
            console.log(store.filter)
        },

        filteredContent() {
            if (!store.filter) {
                store.movies = []
                return
            }
            const { baseUri } = apiUri;
            const params = {
                query: store.filter,
                apiKey: '583b41002fc6c0f654b932ef777dc475',
                language: 'it-IT'
            }
            axios.get(`${baseUri}/search/movie`, { params }).then(res => {
                store.movies = res.data.results
                console.log(store.movies)
            }).catch(err => {
                console.log(err)
            })

        }
    },
}

</script>

<template>
    <div>
        <TheHeader @name-search="filteredContent" @input-change="fillTitleFilter" />
    </div>
</template>

<style scoped></style>
