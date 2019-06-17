<template>
    <div class="search-body">
        <div class="search-input">
            <div class="search-input-wrapper">
                <i class="iconfont icon-sousuo">搜索</i>
                <input type="text">
            </div>
        </div>
        <div class="search-result">
            <h3>电影/电视剧/综艺</h3>
            <ul>
                <li>
                    <div class="img"><img src="/images/movie-img1.jpg" alt=""></div>
                    <div class="info">
                        <p><span>千与千寻</span><span>9.3</span></p>
                        <p>剧情、动画、奇幻</p>
                        <p>2019-06-20</p>
                    </div>
                </li>
                <li>
                    <div class="img"><img src="/images/movie-img2.jpg" alt=""></div>
                    <div class="info">
                        <p><span>何以为家</span><span>9.3</span></p>
                        <p>剧情、家庭</p>
                        <p>2019-04-10</p>
                    </div>
                </li>
                <li>
                    <div class="img"><img src="/images/movie-img1.jpg" alt=""></div>
                    <div class="info">
                        <p><span>千与千寻</span><span>9.3</span></p>
                        <p>剧情、动画、奇幻</p>
                        <p>2019-06-20</p>
                    </div>
                </li>
                <li>
                    <div class="img"><img src="/images/movie-img2.jpg" alt=""></div>
                    <div class="info">
                        <p><span>何以为家</span><span>9.3</span></p>
                        <p>剧情、家庭</p>
                        <p>2019-04-10</p>
                    </div>
                </li>
                <li>
                    <div class="img"><img src="/images/movie-img1.jpg" alt=""></div>
                    <div class="info">
                        <p><span>千与千寻</span><span>9.3</span></p>
                        <p>剧情、动画、奇幻</p>
                        <p>2019-06-20</p>
                    </div>
                </li>
                <li>
                    <div class="img"><img src="/images/movie-img2.jpg" alt=""></div>
                    <div class="info">
                        <p><span>何以为家</span><span>9.3</span></p>
                        <p>剧情、家庭</p>
                        <p>2019-04-10</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'Search'
}
</script>

<style scpoed>
    #content .search-body{
        flex:1;
        overflow: auto;
    }
    .search-body .search-input{
        padding:8px 10px;
        background-color: #f5f5f5;
        border-bottom: 1px solid #e5e5e5;
    }
    .search-body .search-input-wrapper{
        display: flex;
        padding:0 10px;
        background-color: #fff;
        border-radius: 5px;
        border:1px solid #e6e6e6;
    }
    .search-body .search-input-wrapper i{
        font-size: 16px;
        padding:4px 0;
        width: 40px;
    }
    .search-body .search-input-wrapper input{
        width: 100%;
        padding:4px 0;
        margin-left: 5px;
        font-size: 13px;
        color: #333;
        border:none;
        outline: none;
    }
    .search-body .search-result h3{
        font-size: 15px;
        color: #999;
        padding: 9px 15px;
        border-bottom: 1px solid #e6e6e6;
    }
    .search-body .search-result li{
        display: flex;
        box-sizing: border-box;
        padding: 10px 15px;
        border-bottom: 1px dashed #c9c9c9;
    }
    .search-body .search-result .img{
        float: left;
        width: 60px;
    }
    .search-body .search-result .img img{
        width: 100%;
    }
    .search-body .info{
        float: left;
        flex: 1;
        margin-left: 15px;
    }
    .search-body .info p{
        display: flex;
        font-size: 12px;
        height: 22px;
        line-height: 22px;
    }
    .search-body .info p:nth-of-type(1) span:nth-of-type(1){
        flex: 1;
        font-size: 18px;
    }
    .search-body .info p:nth-of-type(1) span:nth-of-type(2){
        font-size: 16px;
        color:  #fc7103;
    }
</style>
