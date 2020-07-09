<template>
    <div>
        <h1>这是 account 组件</h1>

        <router-link to="/account/login">登陆</router-link>
        <router-link to="/account/register">注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Account"
    }
</script>

<style scoped lang="scss">
    /*普通的style标签，只支持普通的css样式，如果想要启用 sass或less，需要为style元素设置 lang 属性*/
    // 只要style标签是在组件.vue中定义的，那么，推荐都为 style 开启 scoped属性
    body{
        div{
            font-style: italic;
        }
    }
</style>
