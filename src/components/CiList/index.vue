<template>
    <div class="cinema-body">
        <ul>
            <li>
                <div>
                    <span>大地影院(澳东世纪店)</span>
                    <span class="q"><span class="price">25</span>元起</span>
                </div>
                <div class="adress">
                    <span>锦州区经济开发区奥东世纪城</span>
                    <span>189km</span>
                </div>
                <div class="card">
                    <div>小吃</div>
                    <div>折扣卡</div>
                </div>
            </li>
            <li>
                <div>
                    <span>大地影院(澳东世纪店)</span>
                    <span class="q"><span class="price">25</span>元起</span>
                </div>
                <div class="adress">
                    <span>锦州区经济开发区奥东世纪城</span>
                    <span>189km</span>
                </div>
                <div class="card">
                    <div>小吃</div>
                    <div>折扣卡</div>
                </div>
            </li>
            <li>
                <div>
                    <span>大地影院(澳东世纪店)</span>
                    <span class="q"><span class="price">25</span>元起</span>
                </div>
                <div class="adress">
                    <span>锦州区经济开发区奥东世纪城</span>
                    <span>189km</span>
                </div>
                <div class="card">
                    <div>小吃</div>
                    <div>折扣卡</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'CiList'
}
</script>

<style scoped>
    #content .cinema-body{
        flex: 1;
        overflow: auto;
    }
    .cinema-body ul{
        padding: 20px;
    }
    .cinema-body li{
        border-bottom: 1px solid #e6e6e6;
        margin-bottom: 20px;
    }
    .cinema-body div{
        margin-bottom: 10px;
    }
    .cinema-body .q{
        font-size: 11px;
        color: #f03d37;
    }
    .cinema-body .price{
        font-size: 18px;
    }
    .cinema-body .adress{
        font-size: 13px;
        color: #666;
    }
    .cinema-body .adress span:nth-of-type(2){
        float: right;
    }
    .cinema-body .card{
        display: flex;
    }
    .cinema-body .card div{
        padding: 3px;
        font-size: 12px;
        color: #f90;
        border: 1px solid #f90;
        border-radius: 2px;
        margin-right: 5px;
    }
    .cinema-body .card div.or{
        color: #f90;
        border: 1px solid #f90;
    }
    .cinema-body .card div.bl{
        color: #589daf;
        border: 1px solid #589daf;
    }
</style>
