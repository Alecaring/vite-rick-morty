<script>
import { store } from "../store";
import AppFilterSelection from "./AppFilterSelection.vue"
export default {
    components: {
        AppFilterSelection,
    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div>
        <nav class="nav">
            <h1>{{ store.headerTitle }}</h1>
        </nav>
    </div>
</template>

<style lang="scss" scoped >
.nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5vw 0 3vw;
    font-size: 3vw;
    letter-spacing: 4px;

    @media screen and (max-width: 425px) {
        background-color: white;
    }
}
</style>