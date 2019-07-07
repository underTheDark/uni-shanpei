<template>
	<view class="getgoods">
		<view class="getgoods-head">
			<image src="../../static/image/index/menu.png" @click="menuShow" />
			
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
			<text>确认</text>
			<text>收货</text>
		</view>
		<view class="filter-net" v-show="menu">
			<view class="menu">
				<view class="user-msg">
					<image src="../../static/image/index/close.png"></image>
					<view>
						<text>姓名</text>
						<text>电话</text>
					</view>
				</view>
				<view class="user-income">
					<view class="get-money">
						<image src="../../static/image/index/month-income.png"></image>
						<text>本月收入</text>
						<text>￥100</text>
		
					</view>
					<view class="get-money">
						<image src="../../static/image/index/month-income.png"></image>
						<text>卡券收入</text>
						<text>100个</text>
		
					</view>
					<view class="get-money">
						<image src="../../static/image/index/month-income.png"></image>
						<text>累计收入</text>
						<text>￥100</text>
		
					</view>
					<view class="get-money date-select">
						<image src="../../static/image/index/month-income.png"></image>
						<text>历史收入</text>
						<text>￥100</text>
						<view class="date-month" @click="dateMonth">
							<text>{{month}}月</text>
							<image src="../../static/image/index/right-jiantou.png"></image>
							<view class="month-select">
								<picker-view class="month-select-num" v-if="visible" :indicator-style="indicatorStyle"  @change="bindChange">
									
									<picker-view-column>
										<view class="item" v-for="(item,index) in months" :key="index" @click="monthSelect(e)">{{item}}月</view>
									</picker-view-column>
									
								</picker-view>
							</view>
						</view>
					</view>
					<view class="get-money">
						<image src="../../static/image/index/month-income.png"></image>
						<navigator url="/pages/login/login">
							<text>退出登录</text>
						</navigator>
		
		
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				getgoods:false,
				menu:false
			}
		},
		methods:{
			menuShow() {
				this.menu = true;
			},
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
		box-shadow: 0upx 4upx 10upx 4upx rgba(0,0,0,.1);
		border-radius: 15upx;
		
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
	/* 菜单栏 */
	.filter-net {
		width: 100%;
		height: 100vh;
		background: rgba(137, 137, 137, 1);
		position: absolute;
		left: 0;
		top:0;
		z-index: 999;
		overflow: hidden;
	}
	
	.menu {
		padding-top:80upx;
		width: 75%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		position: absolute;
		left:0;
		top:0;
		background: white;
		z-index: 1000;
		overflow: hidden;
	}
	
	.menu .user-msg {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-left: 42upx;
	}
	
	.user-msg image {
		width: 100upx;
		height: 100upx;
	    margin-right:25upx;
	}
	
	.user-msg view {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
	}
	
	.user-msg view text:nth-child(1) {
	
		height: 31upx;
		font-size: 31upx;
		font-family: SourceHanSansCN-Medium;
		font-weight: 700;
		color: rgba(51, 51, 51, 1);
	    margin-bottom:10upx;
		letter-spacing: 2px;
	}
	
	.user-msg view text:nth-child(2) {
		font-size: 27upx;
		color: rgba(153, 153, 153, 1);
		letter-spacing: 2px;
	}
	
	.user-income {
		display: flex;
		flex-direction: column;
		margin-top: 108upx;
	}
	
	.user-income .get-money {
		margin: 0 0 73upx 42upx;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	
	.get-money image {
		width: 42upx;
		height: 42upx;
	
	}
	
	.get-money text:nth-of-type(1) {
		font-size: 33upx;
		color: rgba(153, 153, 153, 1);
		letter-spacing: 1px;
		margin:0 31upx 0 24upx;
	}
	
	.get-money text:nth-of-type(2) {
		color: #333;
		letter-spacing: 1px;
		font-size: 38upx;
	}
	/* 菜单栏月份的修改 */
	.date-select .date-month{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		position: relative;
	}
	.date-select .date-month text{
	font-size:37upx;
	margin:0 10upx 0 20upx;
	color:rgba(0,198,93,1);
	width:100upx;
	}
	.date-select view image{
		width:11upx;
	height:24upx;
	background:rgba(0,198,93,1);
	opacity:0.6;
	}
	.month-select{
		width:200upx;
		height:400upx;
		position: absolute;
		right:-200upx;
		top:-168upx;
		z-index:100000!important;
	}
	.month-select-num{
		width:100%;
		display: flex;
		flex-direction: column;
	}
	.month-select-num .picker-view-column{
		diplay:flex;
		justify-content: center;
		align-items: center;
		background:white;
	}
	.uni-picker-view-content{
		position: absolute;
	    top: 30upx!important;
	    left: 0;
	}
	
	
	/* 搜索记录 */
	.history-recode{
		display:flex;
		flex-direction: column;
	}
	.search-history,.search-find{
		display:flex;
		flex-direction: column;
		margin-top:63upx;
	}
	.search-history h3{
	margin-bottom:42upx;
	font-size:33upx;
	font-weight:500;
	color:rgba(51,51,51,1);
	
	}
	.search-history view{
		display:flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		
	}
	.search-history view text{
	font-size:26upx;
	color:rgba(173,173,173,1);
	letter-spacing:1px;
	margin-right:42upx;
	}
	
	/* 搜索发现 */
	.search-find h3{
		font-size:33upx;
		font-weight:500;
		color:rgba(51,51,51,1);
	}
	
	
</style>
