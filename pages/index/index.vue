<template>
	<view class="index">
		<view class="index-head">
			<image src="../../static/image/index/menu.png" @click="menuShow" />
			<view class="address-select" @click="addSelect">
				<text>{{selceted.name}}</text>
				<image src="../../static/image/index/xiala.png" />
			</view>
			<image @click="scanCode" src="../../static/image/index/saoma.png" />
		</view>
		<view class="index-main">
			<view class="getgoods-type">
<<<<<<< HEAD
				<text :class="show==1? 'teshu' : '' " @click="switchSelf">自提点</text>
				<text :class="show==2? 'teshu' : '' " @click="switchHome">用户家中</text>
=======
				<text :class="getType==1? 'teshu' : '' " @click="switchSelf">自提点</text>
				<text :class="getType==2? 'teshu' : '' " @click="switchHome">用户家中</text>
>>>>>>> ede503625541c70513bb62304ffb9fd30404b718
			</view>
			<view class="search">
				<view class="search-left">
					<image src="../../static/image/index/search.png" class="fangdajing-icon"></image>
<<<<<<< HEAD
					<input type="text" v-model="value" @focus="historyRecode" />
=======
<<<<<<< HEAD
					<input type="text" v-bind="value" />
>>>>>>> 403ea2648aec8acd6041366f30832402c168cb1d
					<image @click="delVal" src="../../static/image/index/close.png" class="close-icon"></image>
				</view>
				<view class="search-right">搜索</view>
			</view>
			<view class="user-message">
				<!-- 自提点 -->
				<view class="user-message-list" v-show="show==1">
=======
					<input type="text" @focus="historyRecode"/>
					<image src="../../static/image/index/close.png" class="close-icon"></image>
				</view>
				<view class="search-right">搜索</view>
			</view>
			<!-- 自提点数据展示 -->
			<view class="user-message" v-show="show== 1 ">
				<view class="user-message-list">
>>>>>>> ede503625541c70513bb62304ffb9fd30404b718
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
						<view class="remarks" @click="remark">
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

				<!-- 搜索历史记录 -->
				<view class="history-recode" v-show="show==3">
					<view class="search-history">
						<h3>搜索历史</h3>
						<view>
							<text>111111111</text>
							<text>111111111</text>
							<text>111111111</text>
							<text>111111111</text>
							<text>111111111</text>
							<text>111111111</text>
						</view>
					</view>
					<view class="search-find">
						<h3>搜索发现</h3>
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
			</view>
			
				<!-- 用户家中数据展示 -->
				<view class="user-message" v-show="show==2">
			
					<view class="user-message-list">
						<view class="home-status">送达</view>
						<view class="message-partone">
							<text class="username">joe</text>
							<text class="phone">1234444444444</text>
						</view>
						<view class="message-parttwo home-remark">
							<text>有无备注</text>
						</view>
						<view class="message-partthree">
							<text>133443-4-44</text>
			
						</view>
					</view>
				</view>
				<!-- 搜索历史记录 -->
				<view class="history-recode" v-show="show==3">
						<view class="search-history">
							<h3>搜索历史</h3>
							<view>
								<text>111111111</text>
								<text>111111111</text>
								<text>111111111</text>
								<text>111111111</text>
								<text>111111111</text>
								<text>111111111</text>
							</view>
						</view>
						<view class="search-find">
							<h3>搜索发现</h3>
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
			
		</view>
<<<<<<< HEAD
		<view class="get-type" @click="confirmShow">
			<text>确认{{gtType}}</text>
		</view>
		<!-- 菜单 -->

		<view class="filter-net" v-show="menu" @click="menuHiden">
			<view class="menu" @click.stop="ifMonth">
=======
		
		<!-- 入库 -->
		<view class="get-type" @click="lastConfirm">
			<text>{{diffName}}</text>
		</view>
		<!-- 菜单 -->

<<<<<<< HEAD
		<view class="filter-net" v-show="menu">
=======
		<view class="filter-net" v-show="false">
>>>>>>> ede503625541c70513bb62304ffb9fd30404b718
			<view class="menu">
>>>>>>> 403ea2648aec8acd6041366f30832402c168cb1d
				<view class="user-msg">
					<image :src="info.headimg"></image>
					<view>
						<text>{{info.name}}</text>
						<text>{{info.phone}}</text>
					</view>
				</view>
				<view class="user-income">
					<view class="get-money">
						<image src="../../static/image/index/month-income.png"></image>
						<text>本月收入</text>
						<text>{{myincome.money}}</text>

					</view>
					<view class="get-money">
						<image src="../../static/image/index/month-income.png"></image>
						<text>卡券收入</text>
						<text>100个</text>

					</view>
					<view class="get-money">
						<image src="../../static/image/index/month-income.png"></image>
						<text>累计收入</text>
						<text>{{myincome.total}}</text>

					</view>
					<view class="get-money date-select">
						<image src="../../static/image/index/month-income.png"></image>
						<text>历史收入</text>
						<view class="history-incom">
							<view>100860</view>
						</view>
						<view class="date-month" @click.stop="dateMonth">
							<view class="selecet-m">{{month}}月</view>
							<image src="../../static/image/index/right-jiantou.png"></image>
							<view class="month-select" v-if="visible">
								<picker-view class="month-select-num" :indicator-style="indicatorStyle" @change="bindChange">

									<picker-view-column @click.stop="monthSelect(e)">
										<view class="item" v-for="(item,index) in months" :key="index">{{item}}月</view>
									</picker-view-column>

								</picker-view>
							</view>
						</view>
					</view>
					<view class="get-money">
						<image src="../../static/image/index/month-income.png"></image>
						<view @click="exit">
							<text>退出登录</text>
						</view>


					</view>
				</view>
			</view>
		</view>
<<<<<<< HEAD
		<!-- 确认框 -->
		<view class="confirmed" v-show="showConfirm" @click.self="confirmHidden">
			<view class="confirmed-wrap">
				<view class="confirmed-text">
					确认{{gtType}}选择的货物？
				</view>
				<view class="confirmed-button">
					<view @tap="cancelIn()">取消</view>
					<view @click="confirmIn()">确定</view>
				</view>
			</view>
		</view>


=======
<<<<<<< HEAD
		
>>>>>>> 403ea2648aec8acd6041366f30832402c168cb1d
		<view class="menu_mask" v-if="show_menu" @tap="hideMenu">
			<view class="menu_list">
				<view class="menu_item" v-for="(item,index) in array" :key="index" @tap="selectedAddress(item)">{{item.name}}</view>
			</view>
		</view>
<<<<<<< HEAD

=======
		
=======
	
		<Modal :pageCloak="pageCloak"></Modal>
>>>>>>> ede503625541c70513bb62304ffb9fd30404b718
>>>>>>> 403ea2648aec8acd6041366f30832402c168cb1d
	</view>

</template>

<script>
<<<<<<< HEAD
	import leftSheet from "../../components/bbh-sheet/bbh-sheet.vue"
=======
	import Popup from "../../components/x-popup/x-popup.vue"
	import Modal from "../../components/x-modal/x-modal.vue"
>>>>>>> ede503625541c70513bb62304ffb9fd30404b718
	export default {
		components: {
			leftSheet
		},
		data() {
			const date = new Date()
			const months = []
			const month = date.getMonth() + 1
			const year = date.getFullYear()
			for (let i = 1; i <= 12; i++) {
				months.push(i)
			}
			return {
<<<<<<< HEAD
				showConfirm: false,
				show_menu: false,
				selceted: {},
=======
<<<<<<< HEAD
				show_menu:false,
				selceted:{},
>>>>>>> 403ea2648aec8acd6041366f30832402c168cb1d
				show: "1",
				months,
				year,
				index: 0,
				month,
				array: [],
				arrayList: [],
				visible: false,
				indicatorStyle: 'color:green',
				value: "",
				addr: [0],
				menu: false,
				address: true,
<<<<<<< HEAD
				myincome: {}, //我的收入
				// indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;`
				info: {},
			}
		},
		computed: {
			gtType() {
				if (this.show == 1) {
					return "入库"
				} else {
					return "签收"
				}
=======
				indicatorStyle: `height: ${Math.round(uni.getSystemInfoSync().screenWidth/(750/100))}px;`
=======
				show: "1",
				months,
				month,
				visible: false,
				indicatorStyle: 'color:green',
				getType:"1",
				diffName:"入库",
                pageCloak:""
>>>>>>> ede503625541c70513bb62304ffb9fd30404b718
>>>>>>> 403ea2648aec8acd6041366f30832402c168cb1d
			}
		},
		methods: {
			// 菜单栏显示
			menuShow() {
				this.menu = true;
				var yearAddMonth = this.year + "-" + this.month;
				uni.request({
					url: this.config.url + "user/money",
					method: "POST",
					data: {
						token: this.token,
						month: yearAddMonth
					},
					success: (res) => {
						console.log(res)
						if (res.data.code == 1) {
							this.myincome = res.data.data
						}
					}
				});
				uni.getStorage({
					key: "info",
					success: (res) => {
						console.log(res)
						this.info = res.data;
					}
				})
			},
<<<<<<< HEAD
			menuHiden() {
				this.menu = false;
				this.visible = false;
=======
<<<<<<< HEAD
			selectedAddress(item){
				this.selceted=item;
				this.show_menu=false;
>>>>>>> 403ea2648aec8acd6041366f30832402c168cb1d
			},
			exit() {
				uni.navigateTo({
					url: "/pages/login/login"
				})
			},
			//确认框
			confirmShow() {
				this.showConfirm = true;
			},
			confirmHidden() {
				this.showConfirm = false;
			},
			//取消入库
			cancelIn(){
				this.showConfirm=false;
				
			},
			confirmIn(){
				
			},
			// 下拉内容
			selectedAddress(item) {
				this.selceted = item;
				this.show_menu = false;
			},
			hideMenu() {
				this.show_menu = false;
			},
			bindChange: function(e) {
				const val = e.detail.value
				console.log(this.months[val[0]], )
				this.month = this.months[val[0]]

			},
			dateMonth() {
				console.log(11)
				this.visible = !this.visible;
			},
			ifMonth() {

				this.visible = false;
				console.log(this.year);
				var yearAddMonth = this.year + "-" + this.month;
				uni.request({
					url: this.config.url + "user/money",
					method: "POST",
					data: {
						token: this.token,
						month: yearAddMonth
					},
					success: (res) => {
						console.log(res)
						if (res.data.code == 1) {
							this.myincome = res.data.data
						}
					}
				})

			},

			clickHidden(e) {
				console.log(e)
			},
			delVal() {

				this.value = "";
			},
			historyRecode() {
				this.show = 3
			},
			switchHome() {
				this.show = 2
			},
			switchSelf() {
				this.show = 1
			},
			addSelect() {
				this.show_menu = true;
			},
			// 扫码收货
			scanCode() {
				// 允许从相机和相册扫码
				uni.scanCode({
					success: function(res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});


			}
		},
		mounted() {

			uni.request({
				url: this.config.url + "user/index",
				method: "post",
				data: {
					token: this.token,
					type: this.show
				},
				success: (res) => {
					//console.log(res)
					var _this = this
					if (res.data.code == 1) {
						// this.array=res.data.data;
						this.array = res.data.data

						this.selceted = this.array[0];
					}
				}
			})
=======
			bindChange: function(e) {
				const val = e.detail.value
				console.log(this.months[val[0]])
				this.month = this.months[val[0]]
			},
			dateMonth() {
				this.visible = true;
			},
			monthSelect(e) {
				console.log(e)

			},
			clickHidden(e) {
				console.log(e)
			},
			remark() {
				uni.navigateTo({
					url: '/pages/remark/remark'
				});

			},
			switchHome() {
				this.show = 2;
				this.getType="2";
				this.diffName="签收"
			},
			switchSelf() {
				this.show = 1;
				this.getType="1";
				this.diffName="入库"
			},
			historyRecode(){
				this.show="3"
			},
			lastConfirm(){
				this.pageCloak=true;
				
			}
		},
		mounted() {
			document.addEventListener("click", this.clickHidden)
			this.show = "1"
		},
		components:{
			Popup,
			Modal
>>>>>>> ede503625541c70513bb62304ffb9fd30404b718
		}
	}
</script>

<style lang="scss">
	@import "index.css";

	.menu_mask {
		position: fixed;
		height: 100vh;
		width: 100vw;
		background-color: rgba(0, 0, 0, .3);
		z-index: 999;

		.menu_list {
			width: 100vw;
			height: 410upx;
			overflow: auto;
			background-color: #fff;
			position: absolute;
			bottom: 0;
			box-sizing: border-box;
			padding: 0 42upx;
			display: flex;
			flex-direction: column;

			.menu_item {
				display: block;
				width: 100%;
				height: 106upx;
				font-size: 29upx;
				box-sizing: border-box;
				border-bottom: 1px solid rgba(216, 216, 216, 1);
				color: #666;
				line-height: 106upx;

			}

		}
	}
</style>
