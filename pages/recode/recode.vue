<template>
	<view class="recode">
		<view class="recode-head">
			<image src="../../static/image/index/menu.png" @click="menu" />
			<!-- <view class="address-select" @click="openSheet()" >
				<text>大城小爱小区</text>
				<image src="../../static/image/index/xiala.png" />
			</view> -->
			<view class="address-select">
				<picker @change="bindPickerChange" :value="index" :range="array">
					<text>{{array[index]}}</text>
					<image src="../../static/image/index/xiala.png" />
				</picker>
			</view>
			<view class="goods-status address-select" >
				<text> 送达 </text>
				<image src=" ../../static/image/index/xiala.png" />
		</view>
	</view>
	<view class="index-main">
		<view class="getgoods-type">
			<text :class="show==1? 'teshu' : '' " @click="switchSelf">自提点</text>
			<text :class="show==2? 'teshu' : '' " @click="switchHome">用户家中</text>
		</view>
		<view class="search">
			<view class="search-left">
				<image src="../../static/image/index/search.png" class="fangdajing-icon"></image>
				<input type="text" />
				<image src="../../static/image/index/close.png" class="close-icon"></image>
			</view>
			<view class="search-right">搜索</view>
		</view>
		<!-- 自提点用户数据展示 -->
		<view class="user-message" v-show="show==1">

			<view class="user-message-list">
				<view class="getgoods-status">送达</view>
				<view class="message-partone">
					<text>大成小艾</text>

				</view>
				<view class="message-parttwo">
					<view>
						<text>大城小爱</text>
						<text>113333333</text>
					</view>
					<view class="goods-remark">有无备注</view>

				</view>
				<view class="message-partthree">
					<text>133443-4-44</text>

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
	</view>
     <!-- <bottomScroll :isFixed="isFixed"></bottomScroll> -->
		

					
				
		
	</view>
</template>

<script>
	// import uniPopup from "../../components/uni-popup.vue"
	import bottomScroll  from "../../components/bbh-sheet/bbh-sheet.vue"
	export default {
		
		data() {
		
        return {
            title: 'picker',
            array: ['大城小爱小区', '美国', '巴西', '日本'],
            index: 0,
			show: "1",
			isFixed:false,
        }
		
		},
		methods: {
		   bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			switchHome() {
				this.show = 2
			},
			switchSelf() {
				this.show = 1
			},
			openSheet(){
				this.isFixed=!this.isFixed;
				console.log(this.isFixed)

			}
		},
		mounted() {
			this.show = "1"
		},
		watch: {
			show(newValue, oldValue) {
				console.log(newValue, oldValue)
			}
		},
		components: {
            bottomScroll
		}
	}
</script>

<style>
	.recode {
		display: flex;
		flex-direction: column;

	}

	.recode .recode-head {
		display: flex;
		justify-content: space-between;
		padding: 31upx;

	}

	.recode-head image:nth-of-type(1) {
		width: 41upx;
		height: 32upx;

	}

	.recode-head image:nth-of-type(2) {
		width: 41upx;
		height: 41upx;

	}

	.address-select {
		display: flex;
		align-items: center;
		color: #223E49;
		font-size: 29upx;
		letter-spacing: 2upx;
	}

	.address-select text {}

	.address-select image {
		width: 29upx !important;
		height: 15upx !important;
		margin-left: 4upx;

	}

	/* 首页主要部分 */
	.index-main {
		display: flex;
		flex-direction: column;
		padding: 41upx;
	}

	.index-main .getgoods-type {
		display: flex;
		justify-content: flex-start;
		padding: 0 30upx;
		align-items: center;
	}

	.getgoods-type text {
		font-size: 27upx;
		color: rgba(102, 102, 102, 1);
		display: flex;
		align-items: center;
		margin-right: 20upx;
	}

	.getgoods-type .teshu {
		font-size: 40upx;
		font-family: SourceHanSansCN-Medium;
		font-weight: 700;
		color: rgba(51, 51, 51, 1);
	}

	.search {
		display: flex;
		width: 607upx;
		height: 73upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 17px;
		padding: 0 30upx;
	}

	.search .search-left {
		display: flex;
		padding-left: 5upx;
		align-items: center;
		width: 80%;
	}

	.search-left image:nth-of-type(1) {
		width: 28upx;
		height: 28upx;

	}

	.search-left image:nth-of-type(2) {
		width: 45upx;
		height: 45upx;

	}

	.search-left input {
		width: 400upx;
	}

	.search-right {
		width: 20%;
		border-left: 1px solid rgba(216, 216, 216, 1);
		font-size: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
		color: rgba(102, 102, 102, 1);
	}

	/* 自提点信息展示 */
	.user-message {
		margin-top: 51upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 15px;
		display: flex;
		flex-direction: column;

	}

	.user-message .user-message-list {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-bottom: 25upx;
		padding: 31upx;
	}

	.user-message-list .getgoods-status {
		font-size: 27upx;
		height: 52upx;
		line-height: 52upx;
	}

	.user-message-list .message-partone {
		display: flex;
		justify-content: space-between;

	}

	.message-partone text {
		font-size: 33upx;
		font-family: PingFangSC-Medium;
		font-weight: 700;
		color: rgba(57, 74, 81, 1);
		letter-spacing: 1px;
	}

	.message-partone image {
		width: 48upx;
		height: 48upx;

	}

	.message-parttwo {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 10upx 0;
		color: rgba(207, 207, 207, 1);
		font-size: 29upx;
	}

	.message-parttwo text {
		letter-spacing: 1px;
	}

	.message-parttwo view:nth-child(2) {}

	.message-parttwo text:nth-child(1) {
		margin-right: 38upx;
	}

	.message-partthree {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 29upx;
	}

	.message-partthree text {
		font-family: SourceHanSansCN-Regular;
		font-weight: 400;
		color: rgba(57, 74, 81, 1);

		letter-spacing: 1px;
	}

	/* 用户家中信息展示 */
	.message-partone .username {

		font-size: 33upx;
		font-weight: 600;
		color: rgba(57, 74, 81, 1);

		letter-spacing: 1px;
	}

	.user-message-list .message-partone {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.message-partone .phone {
		font-size: 27upx;
		color: rgba(57, 74, 81, 1);
		margin-left: 10upx;
	}

	.home-remark {
		display: flex;
		justify-content: flex-end;
		font-size: 29upx;
	}
</style>
