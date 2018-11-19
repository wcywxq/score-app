<template>
    <div id="top">
        <van-nav-bar
                :title="$store.state.title"
                :style="{
                    color: style.fontColor,
                    background: style.bgColor
                }"
                :left-arrow="$store.state.arrow"
                @click-left="onClickLeft"
                @click-right="onClickRight"
        >
            <van-icon name="arrow-left"
                      slot="left"
                      color="#fff"
            :style="{display: $store.state.flag}"/>
            <van-icon name="share"
                      slot="right"
                      color="#fff"/>
        </van-nav-bar>
    </div>
</template>

<script>
    export default {
        name: "Top",
        data() {
            return {
                style: {
                    'fontColor': this.$store.state.fontColor,
                    'bgColor': this.$store.state.bgColor
                }
            }
        },
        methods: {
            onClickLeft() {
                console.log('back');
            },
            onClickRight() {
                console.log('share')
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>