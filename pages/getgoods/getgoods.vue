<template>
	<view class="getgoods">
		<view class="getgoods-head">
			<image src="../../static/image/index/menu.png" @click="menu" />
			
				<text>配送员端</text>
			<image src="../../static/image/index/saoma.png" />
		</view>
		<view class="getgoods-main" v-show="getgoods">
			<view class="user-message">
				<view class="user-message-list">
					<view class="message-partone">
						<text>大成小艾</text>
						
					</view>
					<view class="message-parttwo">
						<text>大城小爱</text>
						<text>113333333</text>
					</view>
					<view class="message-partthree">
						<text>133443-4-44</text>
						<text>删除</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 没有订单 -->
		<view class="nogoods-main" >
			<view class="no-order">
				<image src="../../static/image/index/noorder.png"></image>
				<text>没有任何订单</text>
			</view>
		</view>
		<!-- 签收类型 -->
		<view class="get-type">
			<text>签收</text>
			<text>类型</text>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				getgoods:false
			}
		},
		methods:{
			
		},
		
	}
</script>

<style>
	.getgoods {
		display: flex;
		flex-direction: column;
	    width:100%
	}
	
	.getgoods-head {
		display: flex;
		justify-content: space-between;
		padding: 31upx;
	    align-items: center;
	}
	
	.getgoods-head image:nth-of-type(1) {
		width: 41upx;
		height: 32upx;
	
	}
	
	.getgoods-head image:nth-of-type(2) {
		width: 41upx;
		height: 41upx;
	
	}
	.getgoods-head text{
		font-size:38upx;
font-family:SourceHanSansCN-Medium;
font-weight:600;
color:rgba(51,51,51,1);
	}
	
	
	/* 信息展示 */
	.getgoods-main {
		display: flex;
		flex-direction: column;
		padding:0 41upx;
	}
	.user-message {
	
		margin-top: 51upx;
		background: url(../../static/image/index/shugang.png) no-repeat 0 26upx;
		background-size: 2px 48upx;
		display:flex;
		flex-direction: column;
	}
	.user-message .user-message-list {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-bottom: 25upx;
		padding: 31upx;
		
		
	}
	
	.user-message-list .message-partone {
		display: flex;
		justify-content: space-between;
	
	}
	
	.message-partone text {
	
		height: 47upx;
		font-size: 33upx;
		font-family: PingFangSC-Medium;
		font-weight: 600;
		color: rgba(57, 74, 81, 1);
	
		letter-spacing: 1px;
	}
	
	
	.message-parttwo {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 10upx;
	}
	
	.message-parttwo text {
		font-size: 27upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(57, 74, 81, 1);
	
		letter-spacing: 1px;
	}
	
	.message-parttwo text:nth-child(1) {
		margin-right: 38upx;
	}
	
	.message-partthree {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 29upx;
		letter-spacing: 1px;
	}
	
	.message-partthree text {
		color:rgba(57,74,81,1);
	
	}
	
	.message-partthree text:nth-child(2){
		color:rgba(244,113,103,1);
		
	}
	/* 签收类型 */
	.get-type {
		position: fixed;
		bottom: 125upx;
		right: 31upx;
		background: #00C65D;
		color: white;
		font-size: 29upx;
		width: 117upx;
		height: 117upx;
		border-radius: 117upx;
	
		dispaly: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	/* 没有订单 */
	.nogoods-main{
		display: flex;
		flex:1;
		justify-content: center;
		align-items: center;
	    margin-top:50%;
	}
	.no-order{
		flex:1;
		height:100%;
		display:flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.no-order image{
		width:266upx;
		height:245upx;
		margin-bottom:30upx;
	}
	.no-order text{
font-size:27upx;

color:rgba(51,51,51,1);

	}
</style>
