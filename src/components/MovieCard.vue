<script>
import { vModelText } from 'vue';
import { pics } from '/src/data'
export default {
    data: () => ({
        isHovered: false,
    }),
    props: {
        title: String,
        original_title: String,
        language: String,
        score: Number,
        poster_path: String || null,
        overview: String


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
        },
    }


}
</script>

<template >
    <div class="card">
        <div class="poster-image">
            <img :src="posterPic" alt="">
        </div>
        <div class="hovered-card">
            <p class="title">{{ title }}</p>
            <p class="original_title">{{ original_title }}</p>
            <img :src="flag" :alt="language" class="flag-img">
            <p class="overview">Descrizione: {{ overview }}</p>
            <li>
                <i v-for="n in 5" :key="n" class="fa-star" :class="n <= vote ? 'fa-solid' : 'fa-regular'"></i>
            </li>
        </div>
    </div>
</template>


<style lang="scss" scoped>
li {
    list-style-type: none;
}

img {
    width: 100%;
    height: 100%;
}

.card {
    position: relative;
    flex-shrink: 0;
    flex-grow: 0;
    width: 18%;

    background-color: black;
    border-radius: 5px;
    transition: all 0.3s ease;

    .flag-img {
        max-width: 35%;
        max-height: 15%;

    }

    .poster-image {
        width: 100%;
        height: 100%;
        transition: all 0.3s ease;
        border-radius: 5px;
    }


    .hovered-card {
        width: 100%;
        height: 100%;
        padding: 30px;
        display: none;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
        font-weight: 200;
        transition: all 0.3s ease;

        .overview {
            max-height: 100%;
            overflow-x: auto;
        }

    }

}

.card:hover .poster-image {
    visibility: hidden;
    display: none;

}

.card:hover .hovered-card {
    display: flex;

}
</style>
