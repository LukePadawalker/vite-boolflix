<script>
export default {
    props: {
        title: String,
        original_title: String,
        language: String,
        score: Number,
    }

}
</script>

<template>
    <ul>
        <li class="title">{{ title }}</li>
        <li class="original_title">{{ original_title }}</li>
        <img :src="{ language }.jpg" :alt="{ language }">
        <li class="score">{{ score }}</li>

    </ul>
</template>

<style scoped></style>
