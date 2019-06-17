<template>
    <div id="main">
        <Header/>
        <div id="content">
            <div class="movie-menu">
                <router-link tag="div" to="/movie/city" class="city-name">
                    <span>西安</span>
                    <i class="iconfont icon-lower-triangle"></i>
                </router-link>
                <div class="hot-swtich">
                    <router-link tag="div" to="/movie/nowPlaying" class="hot-item">正在热映</router-link>
                    <router-link tag="div" to="/movie/comingSoon" class="hot-item">即将上映</router-link>
                </div>
                <router-link tag="div" to="/movie/search" class="search-entry">
                    <i class="iconfont icon-sousuo">搜索</i>
                </router-link>
            </div>
            <keep-alive>
                <router-view/>
            </keep-alive>
        </div>
        <TabBar/>
    </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
export default {
    name:'Movie',
    components:{
        Header,
        TabBar
    }
}
</script>

<style scoped>
    #content{
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 1;
        margin-bottom: 50px;
        overflow: auto;
    }
    #content .movie-menu{
        display: flex;
        justify-content: space-between;
        width: 100%;
        height: 45px;
        border-bottom: 1px solid #e6e6e6;
    }
    .movie-menu .city-name{
        height: 100%;
        line-height: 45px;
        margin-left: 20px;
        box-sizing: border-box;
    }
    .movie-menu .city-name.active{
        color: #ef4238;
        border-bottom: 2px solid #ef4238;
    }
    .movie-menu .city-name.router-link-active{
        color: #ef4238;
        border-bottom: 2px solid #ef4238;
    }
    .movie-menu .hot-swtich{
        display: flex;
        height: 100%;
        line-height: 45px;
    }
    .movie-menu .hot-item{
        flex: 1;
        width: 80px;
        margin: 0 12px;
        font-size: 15px;
        color: #666;
        font-weight: 700;
        text-align: center;
    }
    .movie-menu .hot-item.active{
        color: #ef4238;
        border-bottom: 2px solid #ef4238;
    }
    .movie-menu .hot-item.router-link-active{
        color: #ef4238;
        border-bottom: 2px solid #ef4238;
    }
    .movie-menu .search-entry{
        height: 100%;
        line-height: 45px;
        margin-right: 20px;
    }
    .movie-menu .search-entry.active{
        color: #ef4238;
        border-bottom: 2px solid #ef4238;
    }
    .movie-menu .search-entry.router-link-active{
        color: #ef4238;
        border-bottom: 2px solid #ef4238;
    }
    .movie-menu .search-entry i{
        font-size: 12px;
        color:#ef4238;
    }
</style>
