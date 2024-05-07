<script>
export default {


    props: {
        myArray: Array,
    },

}
</script>

<template>
    <div class="cardInnerContainer" v-for="card in myArray">

        <div class="contImg">
            <img :src="card.image" alt="">
        </div>

        <div class="ContainTxt">
            <h2>{{ card.name }}</h2>
            <p>{{ card.status }}</p>
            <span>{{ card.species }}</span>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.containerCards {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 5vw;
    width: 100%;

    .cardInnerContainer {
        width: calc(100% / 4 - 5vw);
        height: 50vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .contImg {
            width: 20vw;
            height: 20vw;
            border-radius: 50%;
            overflow: hidden;
            box-shadow: 0px 0px 13px 0px rgba(255, 0, 0, 0.351);

            img {
                width: 100%;
                height: 100%;
            }
        }

        .ContainTxt {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            text-align: center;

            h2 {
                padding: 0 0 1vw;
            }
        }
    }
}
</style>