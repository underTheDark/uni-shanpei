<template>
	<view class="index">
		<view class="index-head">
			<image src="../../static/image/index/menu.png"></image>
			<view class="address-select">
				<text>dadadaa</text>
				<image src="../../static/image/index/xiala.png"></image>
			</view>
			<image src="../../static/image/index/saoma.png"></image>
		</view>
		<view class="index-main">
			<view class="getgoods-type">
				<text>自提点</text>
				<text>用户家中</text>
			</view>
			<view class="search"> 
			    <view class="search-left">
					<image src="../../static/image/index/search.png" class="fangdajing-icon"></image>
				    <input type="text" />
					<image src="../../static/image/index/close.png" class="close-icon"></image>
				</view>
				<view>搜索</view>
			</view>
			<view class="user-message">
				<view class="user-message-list">
					<view class="message-partone">
						<text>大成小艾</text>
						<image src="../../static/image/index/duihao.png"></image>
					</view>
					<view class="message-parttwo">
						<text>大城小爱</text>
						<text>113333333</text>
					</view>
					<view class="message-partthree">
						<text>133443-4-44</text>
						<view class="remarks">
							<text>备注</text>
							<image src="../../static/image/index/jiantou.png"></image>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.login{
		padding:165upx 0 0 60upx;
		display: flex;
		flex-direction: column;
	}
		
	.login h1{
width:222upx;
height:52upx;
font-size:52upx;
color:rgba(51,51,51,1);
line-height:78upx;
letter-spacing:3upx;
border-bottom: 8px solid #00C65D;

	}
	.login text{
		width:150upx;
height:38upx;
font-size:38upx;
color:rgba(51,51,51,1);
line-height:56upx;
margin:25upx 0 241upx;
	}
	.login-form{
		width:656upx;
        display: flex;
		flex-direction: column;
	}
	.login-form input{
		padding-bottom: 43upx;
        border-bottom:1px solid rgba(232,232,232,1);
		font-size:29upx;
	}
	.login-form input:nth-child(2){
		margin:96upx 0 245upx;
	}
	.login button{
		width:656upx;
		height:96upx;
		line-height: 96upx;
		background-color: #00C65D;
		border-radius:96upx;
		margin-left:-15upx;
		color:white;
		font-size: 31upx;
		letter-spacing: 1px;
		/* box-shadow: 0px 10upx 20upx  #00D363;
		-webkit-box-shadow: 0px 10upx 20upx  #00D363;
		-moz-box-shadow: 0px 10upx 20upx  #00D363;
		-ms-box-shadow: 0px 10upx 20upx  #00D363;
		-o-box-shadow: 0px 10upx 20upx  #00D363; */
	}
</style>
