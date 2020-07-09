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

<style scoped>

</style>
