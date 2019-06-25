<template>
	<view class="index">
		<view class="index-head">
			<image src="../../static/image/index/menu.png" @click="menu" />
			<view class="address-select">
				<text>大城小爱小区</text>
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
					<input type="text"  @focus="getfocus"/>
					<image src="../../static/image/index/close.png" class="close-icon"></image>
				</view>
				<view class="search-right">搜索</view>
			</view>
			<!-- 点击搜索框消失     自提点数据-->
			<view class="user-message" v-show="search==1 " >
				
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
			<!-- 用户家中数据展示 -->
			<view class="user-message" v-show="show==2" >
			
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
			<!-- 点击搜索框显示 -->
			<view class="history-recode" v-show="search==2">
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
			<!-- 签收类型 -->
			<view class="get-type">
				<text>签收</text>
				<text>类型</text>
			</view>
		</view>
		
		    
		<!-- 菜单 -->

		<view class="filter-net" v-show="menus">
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
	export default {
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
				menus:false,
				show:"1",
				months,
                month,
				visible:false,
				indicatorStyle:`color:green`,
<<<<<<< HEAD
			    
=======
			    search:1,
>>>>>>> bba17c3b1c6f4de0b4601e62e933d5b3dbd8f842
			};
		},
		methods: {
			menu() {
				this.menus = true;
			},
		     bindChange: function (e) {
            	 const val = e.detail.value
             console.log(this.months[val[0]])
            this.month = this.months[val[0]]
            },
			dateMonth(){
				this.visible=true;
			},
			monthSelect(e){
				console.log(e)
<<<<<<< HEAD
			
          
			},
			clickHidden(e){
				console.log(e)
			}
		},
		mounted(){
			document.addEventListener("click",this.clickHidden)
=======
			    
             },
			 getfocus(){
				 this.search=2;
			 },
			 switchHome() {
			 	this.show = 2
			 },
			 switchSelf() {
			 	this.show = 1
			 }
>>>>>>> bba17c3b1c6f4de0b4601e62e933d5b3dbd8f842
		}
	}
</script>

<style>
	@import "index.css"
</style>
