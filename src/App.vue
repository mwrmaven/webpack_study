<template>
    <div>
        <h1>这是 App 组件</h1>

        <router-view></router-view><!--路由的渲染是放在router-view里面的-->
        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">goodslist</router-link>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style scoped>

</style>
