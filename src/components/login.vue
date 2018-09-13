<template>
    <div class="login"> 
        <h5>登录</h5>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="用户名" ref="username">
        </div>
        <div class="form-group"> 
            <input type="password" class="form-control" placeholder="密码" ref="password">
        </div>
        <div class="box-footer">                                                               
			<button type="submit" class="btn btn-success btn-block" @click="onBtn">登录</button>  
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
@import url('../css/bootstrap.min.css');
    .login{
        width:100%;
        height: 100%;
        h5{
            width:100%;
            height: .65rem;
            text-align: center;
            line-height: .65rem;
            border-bottom: 1px solid #f4f4f4;
            font-size: .32rem;
        }
        
    }
</style>


