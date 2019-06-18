<template>
    <div class="login-body login-text-box">
        <div>
            <input type="text" class="login-text">
        </div>
        <div>
            <input type="password" class="login-text">
        </div>
        <div class="login-btn">
            <input type="submit" value="登录">
        </div>
        <div class="login-link">
            <a href="javascript:;">立即注册</a>
            <a href="javascript:;">找回密码</a>
        </div>
    </div>
</template>

<script>
export default {
    name:'Login'
}
</script>

<style scoped>
    #content .login-body{
        margin-top: 50px;
        width: 100%;
        box-sizing: border-box;
        padding: 0 10px;
    }
    .login-body .login-text{
        width: 100%;
        height: 36px;
        border: none;
        margin-top: 20px;
        border: 1px solid #ccc;
        outline: none;
        text-indent: 10px;
        border-radius: 3px;
    }
    .login-body .login-btn{
        height: 40px;
        margin-top: 30px;
    }
    .login-body .login-btn input{
        display: block;
        width: 100%;
        height: 100%;
        background: #e54847;
        border: none;
        outline: none;
        font-size: 16px;
        color: #fff;
        border-radius: 3px;
    }
    .login-body .login-link{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }
    .login-body .login-link a{
        font-size: 12px;
        color: #e54847;
        text-decoration: none;
        margin: 0 5px;
    }
</style>
