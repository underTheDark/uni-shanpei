<template>
	<view class="index">
		<view class="index-head">
			<image src="../../static/image/index/menu.png" @click="menuShow" />
			<view class="address-select" @click="addSelect">
					<text>{{selceted.name}}</text>
					<image src="../../static/image/index/xiala.png" />
			</view>
			<image src="../../static/image/index/saoma.png" />
		</view>
		<view class="index-main">
			<view class="getgoods-type">
				<text :class="show==1? 'teshu' : '' " @click="switchSelf">自提点</text>
				<text :class="show==2? 'teshu' : '' " @click="switchHome">用户家中</text>
			</view>
			<view class="search">
				<view class="search-left">
					<image src="../../static/image/index/search.png" class="fangdajing-icon"></image>
					<input type="text" v-bind="value" />
					<image @click="delVal" src="../../static/image/index/close.png" class="close-icon"></image>
				</view>
				<view class="search-right">搜索</view>
			</view>
			<view class="user-message">
				<!-- 自提点 -->
				<view class="user-message-list" v-show="show==1">
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
				<!-- 我的 -->
				<view class="user-message-list" v-show="show==2">
					<view class="message-partone">
						<text>大成小艾</text>
						<image src="../../static/image/index/duihao.png"></image>
					</view>
					<!-- 	<view class="message-parttwo">
						<text>大城小爱</text>
						<text>113333333</text>
					</view> -->
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
		<view class="get-type">
			<text>签收</text>
			<text>类型</text>
		</view>
		<!-- 菜单 -->

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
								<picker-view class="month-select-num" v-if="visible" :indicator-style="indicatorStyle" @change="bindChange">

									<picker-view-column>
										<view class="item" v-for="(item,index) in months" :key="index" @click.stop="monthSelect(e)">{{item}}月</view>
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
		
		<view class="menu_mask" v-if="show_menu" @tap="hideMenu">
			<view class="menu_list">
				<view class="menu_item" v-for="(item,index) in array" @tap="selectedAddress(item)" >{{item.name}}</view>
			</view>
		</view>
		
	</view>

</template>

<script>
	import leftSheet from "../../components/bbh-sheet/bbh-sheet.vue"
	export default {
		components: {
			leftSheet
		},
		data() {
			const date = new Date()
			const years = []
			const year = date.getFullYear()
			const months = []
			const month = date.getMonth() + 1
			const days = []
			const day = date.getDate()
			for (let i = 1990; i <= date.getFullYear(); i++) {
				years.push(i)
			}
			for (let i = 1; i <= 12; i++) {
				months.push(i)
			}
			for (let i = 1; i <= 31; i++) {
				days.push(i)
			}
			return {
				show_menu:false,
				selceted:{},
				show: "1",
				months,
				index: 0,
				month,
				array:[] ,
				arrayList:[],
				visible: false,
				indicatorStyle: 'color:green',
				value: "",
				addr: [0],
				menu: false,
				address: true,
				indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;`
			}
		},
		methods: {
			menuShow() {
				// this.menu = true;
				this.show_menu=false;
			},
			selectedAddress(item){
				this.selceted=item;
				this.show_menu=false;
			},
			hideMenu(){
				this.show_menu=false;
			},
			bindChange: function(e) {
				const val = e.detail.value
				console.log(this.months[val[0]])
				this.month = this.months[val[0]]
			},
			dateMonth() {
				console.log(11)
				this.visible = true;
			},
			monthSelect(e) {
				console.log(222)
				this.visible=false


			},
			clickHidden(e) {
				console.log(e)
			},
			delVal() {
				console.log(11)
				this.value = ""
			},
			switchHome() {
				this.show = 2
			},
			switchSelf() {
				this.show = 1
			},
			addSelect() {
				this.show_menu = true;
			}
		},
		mounted() {
			    
				uni.request({
				url:this.config.url+"user/index",
				method:"post",
				data:{
					token:this.token,
					type:this.show
				},
				success:(res)=>{
					console.log(res)
					var _this=this
					if(res.data.code==1){
						// this.array=res.data.data;
						this.array=[
							{
								name:"ajad"
							},
							{
								name:"ajsadaad"
							},
						];
						this.selceted=this.array[0];
					}
				}
			})
		}
	}
</script>

<style lang="scss">
	@import "index.css";
	.menu_mask{
		position: fixed;
		height: 100vh;
		width:100vw;
		background-color:rgba(0,0,0,.3);
		z-index: 999;
		.menu_list{
			width: 100vw;
			height:410upx;
			overflow: auto;
			background-color: #fff;
			position: absolute;
			bottom: 0;
			box-sizing: border-box;
			padding: 0 42upx;
			display: flex;
			flex-direction: column;
			.menu_item{
				display: block;
				width: 100%;
				height:106upx;
				font-size: 29upx;
				box-sizing: border-box;
				border-bottom: 1px solid rgba(216,216,216,1);
				color:#666;
				line-height: 106upx;
			
			}
			
		}
	}
	
</style>
