<template>
    <div id="main">
        <Header title="影院"/>
        <div id="content">
            <div class="cinema-menu">
                <div class="city-switch">
                    全城<i class="iconfont icon-lower-triangle"></i>
                </div>
                <div class="brand-switch">
                    品牌<i class="iconfont icon-lower-triangle"></i>
                </div>
                <div class="feature-switch">
                    特色<i class="iconfont icon-lower-triangle"></i>
                </div>
            </div>
        </div>
        <CiList/>
        <TabBar/>
    </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import CiList from '@/components/CiList'

export default {
    name:'Cinema',
    components:{
        Header,
        TabBar,
        CiList
    }
}
</script>

<style scoped>
    #content .cinema-menu{
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #fff;
        width: 100%;
        height: 45px;
        border-bottom: 1px solid #ddd;
    }
</style>
