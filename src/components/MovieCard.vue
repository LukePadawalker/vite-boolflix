<script>
import { vModelText } from 'vue';
import { pics } from '/src/data'
export default {
    props: {
        title: String,
        original_title: String,
        language: String,
        score: Number,
        poster_path: String || null,


    },
    computed: {
        flag() {
            return `/src/assets/img/${this.language}.png`
        },
        posterPic() {
            return !this.poster_path ? pics.placeholder : pics.baseuri + this.poster_path
        },
        vote() {
            return Math.ceil(this.score / 2)
        }
    }


}
</script>

<template>
    <ul>
        <li class="title">{{ title }}</li>
        <li class="original_title">{{ original_title }}</li>
        <li>
            <img :src="flag" :alt="language">

        </li>
        <li class="score">{{ score }}</li>
        <li>
            <img :src="posterPic" alt="">

        </li>
        <li>
            <i v-for="n in 5" :key="n" class="fa-star" :class="n <= vote ? 'fa-solid' : 'fa-regular'"></i>
        </li>
        <div>___________</div>
        <div>___________</div>

    </ul>
</template>


<style scoped>
img {
    max-width: 500px;
}
</style>
