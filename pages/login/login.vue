<template>
	<view class="login">
		<h1>配送员端</h1>
		<text>登录</text>
		<view class="login-form">
<<<<<<< HEAD
		     <input type="text" placeholder="请输入账号" v-model="phone"/>
			 <input type="password" placeholder="请输入要密码" v-model="password"/>
		</view>
		<button @click="skip">登录</button>
=======
			<input type="text" placeholder="请输入账号" />
			<input type="text" placeholder="请输入要密码" />
		</view>
		<button @click="login">登录</button>
>>>>>>> ede503625541c70513bb62304ffb9fd30404b718
	</view>

</template>

<script>
	export default {
		data() {
			return {
<<<<<<< HEAD
				phone:"",
				password:""
			};
		},
		methods:{
			skip(){
				console.log(this.phone,this.password)
				uni.request({
					url:this.config.url+"user/login",
					method:"post",
					data:{
						phone:this.phone,
						password:this.password
					},
					success(res){
						console.log(res)
					}
				})
				
				uni.switchTab({
					
			
					url:"/pages/index/index"
				})
=======

			};
		},
		methods: {
			login() {
				uni.switchTab({
					url: '/pages/index/index'
				});
>>>>>>> ede503625541c70513bb62304ffb9fd30404b718
			}
		}
	}
</script>

<style>
	.login {
		padding: 165upx 0 0 60upx;
		display: flex;
		flex-direction: column;
	}

	.login h1 {
		width: 222upx;
		height: 52upx;
		font-size: 52upx;
		color: rgba(51, 51, 51, 1);
		line-height: 78upx;
		letter-spacing: 3upx;
		border-bottom: 8px solid #00C65D;

	}

	.login text {
		width: 150upx;
		height: 38upx;
		font-size: 38upx;
		color: rgba(51, 51, 51, 1);
		line-height: 56upx;
		margin: 25upx 0 241upx;
	}

	.login-form {
		width: 656upx;
		display: flex;
		flex-direction: column;
	}

	.login-form input {
		padding-bottom: 43upx;
		border-bottom: 1px solid rgba(232, 232, 232, 1);
		font-size: 29upx;
	}

	.login-form input:nth-child(2) {
		margin: 96upx 0 245upx;
	}

	.login button {
		width: 656upx;
		height: 96upx;
		line-height: 96upx;
		background-color: #00C65D;
		border-radius: 96upx;
		margin-left: -15upx;
		color: white;
		font-size: 31upx;
		letter-spacing: 1px;
		/* box-shadow: 0px 10upx 20upx  #00D363;
		-webkit-box-shadow: 0px 10upx 20upx  #00D363;
		-moz-box-shadow: 0px 10upx 20upx  #00D363;
		-ms-box-shadow: 0px 10upx 20upx  #00D363;
		-o-box-shadow: 0px 10upx 20upx  #00D363; */
	}
</style>
