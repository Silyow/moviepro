<template>
    <header id="header">
        <h1>{{title}}</h1>
    </header>
</template>

<script>
export default {
    name:'Header',
    props:{
        title:{
            type:String,
            default:'XX电影'
        }
    }
}
</script>

<style scoped>
#header{
    position: relative;
    width: 100%;
    height: 50px;
    color: #fff;
    background-color: #e54847;
    border-bottom: 1px solid #e54847;
}
#header h1{
    font-size: 18px;
    font-weight: normal;
    text-align: center;
    line-height: 50px;
}
#header i{
    position: absolute;
    left: 5px;
    top: 50%;
    margin-top: -13px;
    font-size: 26px;
}
</style>
