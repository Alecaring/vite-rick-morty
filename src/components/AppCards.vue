<script>
import { store } from '../store';
export default {

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="cardInnerContainer" v-for="card in store.ElemArray">

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
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        @media screen and (max-width: 768px) {
            width: calc(100% / 3 - 5vw);
        }

        @media screen and (max-width: 425px) {
            width: calc(100% / 1 - 5vw);

        }


        .contImg {
            position: relative;
            width: 20vw;
            height: 20vw;
            border-radius: 50%;
            overflow: hidden;
            box-shadow: inset 0px 0px 13px 0px rgba(255, 0, 0, 0.652);

            @media screen and (max-width: 425px) {
                width: 60vw;
                height: 60vw;
            }

            img {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-radius: 50%;
                width: 19vw;
                height: 19vw;

                @media screen and (max-width: 425px) {
                    width: 59vw;
                    height: 59vw;
                }
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
                font-size: 2vw;

                @media screen and (max-width: 425px) {
                    font-size: 7vw;
                    padding: 3vw 0 0;
                }
            }
        }
    }
}
</style>