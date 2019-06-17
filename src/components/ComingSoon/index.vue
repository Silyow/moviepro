<template>
    <div class="movie-body">
        <ul>
            <li>
                <div class="pic-show"><img src="/images/movie-img1.jpg" alt=""></div>
                <div class="info-list">
                    <h2>千与千寻</h2>
                    <p>观众评 <span class="grade">9.3</span></p>
                    <p>类型:剧情、动画、奇幻</p>
                    <p>今天56家影院放映443场</p>
                </div>
                <div class="btn-mall">
                    预售
                </div>
            </li>
            <li>
                <div class="pic-show"><img src="/images/movie-img2.jpg" alt=""></div>
                <div class="info-list">
                    <h2>何以为家</h2>
                    <p>观众评 <span class="grade">9.1</span></p>
                    <p>类型:剧情、家庭</p>
                    <p>今天52家影院放映357场</p>
                </div>
                <div class="btn-mall">
                    预售
                </div>
            </li>
            <li>
                <div class="pic-show"><img src="/images/movie-img1.jpg" alt=""></div>
                <div class="info-list">
                    <h2>千与千寻</h2>
                    <p>观众评 <span class="grade">9.3</span></p>
                    <p>类型:剧情、动画、奇幻</p>
                    <p>今天56家影院放映443场</p>
                </div>
                <div class="btn-mall">
                    预售
                </div>
            </li>
            <li>
                <div class="pic-show"><img src="/images/movie-img2.jpg" alt=""></div>
                <div class="info-list">
                    <h2>何以为家</h2>
                    <p>观众评 <span class="grade">9.1</span></p>
                    <p>类型:剧情、家庭</p>
                    <p>今天52家影院放映357场</p>
                </div>
                <div class="btn-mall">
                    预售
                </div>
            </li>
            <li>
                <div class="pic-show"><img src="/images/movie-img1.jpg" alt=""></div>
                <div class="info-list">
                    <h2>千与千寻</h2>
                    <p>观众评 <span class="grade">9.3</span></p>
                    <p>类型:剧情、动画、奇幻</p>
                    <p>今天56家影院放映443场</p>
                </div>
                <div class="btn-mall">
                    预售
                </div>
            </li>
            <li>
                <div class="pic-show"><img src="/images/movie-img2.jpg" alt=""></div>
                <div class="info-list">
                    <h2>何以为家</h2>
                    <p>观众评 <span class="grade">9.1</span></p>
                    <p>类型:剧情、家庭</p>
                    <p>今天52家影院放映357场</p>
                </div>
                <div class="btn-mall">
                    预售
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'ComingSoon'
}
</script>

<style scoped>
    #content .movie-body{
        flex:1;
        overflow: auto;
    }
    .movie-body ul{
        margin: 0 12px;
        overflow: hidden;
    }
    .movie-body ul li{
        display: flex;
        align-items: center;
        margin-top: 12px;
        padding-bottom: 10px;
        border-bottom: 1px solid #e6e6e6;
    }
    .movie-body .pic-show{
        width: 64px;
        height: 90px;
    }
    .movie-body .pic-show img{
        width: 100%;
    }
    .movie-body .info-list{
        position: relative;
        flex:1;
        margin-left: 10px;
    }
    .movie-body .info-list h2{
        width: 150px;
        line-height: 24px;
        font-size: 17px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .movie-body .info-list p{
        width: 200px;
        line-height: 22px;
        font-size: 13px;
        color: #666;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .movie-body .info-list .grade{
        font-size: 15px;
        font-weight: 700;
        color: #faaf00;
    }
    .movie-body .info-list img{
        position: absolute;
        top: 5px;
        right: 10px;
        width: 50px;
    }
    .movie-body .btn-mall , .movie-body .btn-pre{
        width: 47px;
        height: 27px;
        line-height: 28px;
        text-align: center;
        background-color: #3c9fe6;
        color: #fff;
        border-radius: 4px;
        font-size: 12px;
        cursor: pointer;
    }
    .movie-body .btn-pre{
        background-color: #3c9fe6;
    }
</style>
