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
        <div class="right-list">
            <h1>BOOLFLIX</h1>
            <a href="">Home</a>
            <a href="">Serie TV</a>
            <a href="">Film</a>
            <a href="">Originali</a>
            <a href="">Aggiunti di recente</a>
            <a href="">La mia lista</a>
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
    background-color: rgb(40, 39, 39);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .right-list {
        display: flex;
        align-items: center;
        color: white;
        gap: 15px;
        padding-left: 20px;

        width: calc(100% / 2);

        h1 {
            color: red;
        }

        a {
            transition: all 0.3s ease;
            font-size: small;
        }

        a:hover {
            text-shadow: 1px 1px 1px white;
        }
    }

    .search {
        margin-right: 40px;

        input {
            background-color: transparent;
            color: white;
            font-weight: lighter;
            padding: 0;
            margin: 0;
            border: 1px solid white;
            padding: 5px;
            border-radius: 5px;
            margin-right: 20px;
            transition: all 0.3s ease;
        }

        input:focus {
            transform: scaleX(1.2);
            outline: 0;

        }

        button {
            color: white;
            background-color: red;
            border-radius: 5px;
            padding: 5px;
            border: 0;
            transition: all 0.3s ease;
        }

        button:hover {
            transform: scale(1.2);

        }

    }
}
</style>
