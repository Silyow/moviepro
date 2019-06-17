<template>
    <div class="city-body">
        <div class="city-list">
            <div class="city-hot">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li>上海</li>
                    <li>北京</li>
                    <li>上海</li>
                    <li>北京</li>
                    <li>上海</li>
                    <li>北京</li>
                </ul>
            </div>
            <div class="city-sort">
                <div>
                    <h2>A</h2>
                    <ul class="clearfix">
                        <li>阿拉善盟</li>
                        <li>安山</li>
                        <li>安庆</li>
                        <li>安阳</li>
                    </ul>
                </div>
                <div>
                    <h2>B</h2>
                    <ul class="clearfix">
                        <li>北京</li>
                        <li>保定</li>
                        <li>蚌埠</li>
                        <li>包头</li>
                    </ul>
                </div>
                <div>
                    <h2>A</h2>
                    <ul class="clearfix">
                        <li>阿拉善盟</li>
                        <li>安山</li>
                        <li>安庆</li>
                        <li>安阳</li>
                    </ul>
                </div>
                <div>
                    <h2>B</h2>
                    <ul class="clearfix">
                        <li>北京</li>
                        <li>保定</li>
                        <li>蚌埠</li>
                        <li>包头</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="city-index">
            <ul>
                <li>A</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'City'
}
</script>

<style scoped>
    #content .city-body{
        position: absolute;
        display: flex;
        top: 0;
        bottom: 0;
        width: 100%;
        margin-top: 45px;
    }
    .city-body .city-list{
        flex:1;
        overflow: auto;
        background-color: #fff5f0;
    }
    .city-body .city-list::-webkit-scrollbar{
        background-color: transparent;
        width: 0;
    }
    .city-body .city-hot{
        margin-top: 20px;
    }
    .city-body .city-hot h2{
        padding-left: 15px;
        line-height: 30px;
        font-size: 14px;
        font-weight: normal;
        background-color: #f0f0f0;
    }
    .city-body .city-hot ul li{
        float: left;
        width: 29%;
        height: 33px;
        line-height: 33px;
        text-align: center;
        margin-top: 15px;
        margin-left: 3%;
        padding: 0 4px;
        border: 1px solid #e6e6e6;
        background-color: #fff;
        box-sizing: border-box;
    }
    .city-body .city-sort div{
        margin-top: 20px;
    }
    .city-body .city-sort h2{
        padding-left: 15px;
        line-height: 30px;
        font-size: 14px;
        font-weight: normal;
        background-color: #f0f0f0;
    }
    .city-body .city-sort ul{
        padding-left: 10px;
        margin-top: 10px;
    }
    .city-body .city-sort ul li{
        line-height: 30px;
    }
    .city-body .city-index{
        width: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        border-left: 1px solid #e6e6e6;
    }
</style>
