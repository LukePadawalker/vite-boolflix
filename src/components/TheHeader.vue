<script>
export default {
    data: () => ({
        inputSearch: '',
    }),
    emits: ['name-search', 'input-change']

}
</script>

<template>
    <div class="header">
        <div class="logo">
            <h1>BOOLFLIX</h1>
        </div>
        <div class="search">
            <form action="" @submit.prevent="$emit('name-search', inputSearch)">
                <input type="text" v-model.trim="inputSearch" @keyup="$emit('input-change', inputSearch)">
                <button>Cerca</button>
            </form>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 70px;
    background-color: gray;
    display: flex;
    justify-content: space-between;
    align-items: center;



}
</style>
