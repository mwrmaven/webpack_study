<template>
    <!--html模版-->
    <div>这是登陆组件，使用vue设计 -----{{msg}}</div>

</template>

<script>
    // 业务逻辑
    export default {
        name: "login.vue",
        data() { // 注意，组件中的data必须是function
            return {
                msg: '123'
            }
        },
        methods: {
            show() {
                console.log("调用了login.vue中的show方法")
            }
        }
    }
</script>

<style scoped>
    /* 样式 */

</style>
