<template>
    <footer id="footer">
        <ul>
            <router-link tag="li" to="/movie">
                <i class="iconfont icon-dianying">1</i>
                <p>电影</p>
            </router-link>
            <router-link tag="li" to="/cinema">
                <i class="iconfont icon-dianying">2</i>
                <p>影院</p>
            </router-link>
            <router-link tag="li" to="/mine">
                <i class="iconfont icon-dianying">3</i>
                <p>我的</p>
            </router-link>
        </ul>
    </footer>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style scoped>
#footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 2px solid #ebe8e3;
    background-color: #fff;
}
#footer ul{
    display: flex;
    text-align: center;
    height: 50px;
    align-items: center;
}
#footer ul li{
    flex: 1;
    height: 40px;
}
#footer ul li.active{
    color: #f03d37;
}
#footer ul li.router-link-active{
    color: #f03d37;
}
#footer ul i{
    font-size: 20px;
}
#footer ul p{
    font-size: 12px;
    line-height: 18px;
}
</style>
