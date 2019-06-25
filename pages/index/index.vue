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
				<text>自提点</text>
				<text>用户家中</text>
			</view>
			<view class="search">
				<view class="search-left">
					<image src="../../static/image/index/search.png" class="fangdajing-icon"></image>
					<input type="text" />
					<image src="../../static/image/index/close.png" class="close-icon"></image>
				</view>
				<view class="search-right">搜索</view>
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
		<view class="get-type">
			<text>签收</text>
			<text>类型</text>
		</view>
		<!-- 菜单 -->

		<view class="filter-net" v-show="show">
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
				show: false,
				months,
                month,
				visible:false,
				indicatorStyle:`color:green`,
			    
			};
		},
		methods: {
			menu() {
				this.show = true;
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
			
          
			},
			clickHidden(e){
				console.log(e)
			}
		},
		mounted(){
			document.addEventListener("click",this.clickHidden)
		}
	}
</script>

<style>
	@import "index.css"
</style>
