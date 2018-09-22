<template>
    <div class="container">
        <div class="form row">
            <div class="form-horizontal " id="login_form">
                <h3 class="form-title">LOGIN</h3>
                <div class="col-md-9">
                    <div class="form-group">
                        <i class="fa fa-user fa-lg"></i>
                        <input class="form-control required" type="text" placeholder="Username" id="username" name="username" autofocus="autofocus" maxlength="20" ref="username"/>
                    </div>
                    <div class="form-group">
                        <i class="fa fa-lock fa-lg"></i>
                        <input class="form-control required" type="password" placeholder="Password" id="password" name="password" maxlength="8" ref="password"/>
                    </div>
                    <div class="form-group">
                        <label class="checkbox">
                            <input type="checkbox" name="remember" value="1"/>记住我
                        </label>
                    </div>
                    <div class="form-group ">
                        <button type="submit" class="btn btn-success" name="submit" @click="onBtn">登录</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        onBtn(){
            _hmt.push(['_trackEvent', '车辆信息', 'tap', '点击按钮']);
            let username = this.$refs.username.value,
                password = this.$refs.password.value;
            if(username == 'zs' && password == '123456'){
                window.localStorage.setItem('login','true');
                window.history.back()
            }
        }
    }
}
</script>
<style scoped lang="scss">
.container{
    width:100%;
    height: 100%;
}
.form{
    background: rgba(255,255,255,0.2);
    width:400px;
    margin:120px auto;
    }
    .required{
        width:350px;
    }
.fa{
    display: inline-block;
    top: 27px;
    left: 6px;
    position: relative;
    color: #ccc;
    }
input[type="text"],
input[type="password"]{
    padding-left:26px;
    }
.checkbox{
    padding-left:21px;
    }
    button{
        width:50px;
        margin-left:40%;
    }
</style>


