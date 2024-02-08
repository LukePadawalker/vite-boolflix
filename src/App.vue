<script>
import axios from 'axios';
import { store } from '/src/data/store.js'
import { apiUri } from '/src/data/index.js'
import TheHeader from './components/TheHeader.vue'
import AppBody from './components/AppBody.vue'

export default {
    data: () => ({ store }),
    name: 'App',
    components: { TheHeader, AppBody },
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
            const params = {
                query: store.filter,
                api_key: '9c81a4be156c3386fb3485d2a9396428',
                language: 'it-IT'
            }
            axios.get(`${apiUri}/search/movie`, { params }).then(res => {
                store.movies = res.data.results;
                console.log(store.movies)
            }).catch(err => {
                console.log(err)
            })

            axios.get(`${apiUri}/search/tv`, { params }).then(res => {
                store.tvSeries = res.data.results;
                console.log(store.tvSeries)
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
        <AppBody />

    </div>
</template>

<style scoped></style>
