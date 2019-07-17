
<template>
	<view class="recode">
		<view class="recode-head">
			<image src="../../static/image/index/menu.png" @tap="menuShow" />
			<!-- <view class="address-select" @click="openSheet()" >
				<text>大城小爱小区</text>
				<image src="../../static/image/index/xiala.png" />
			</view> -->
			<view class="address-select">
				<!-- <picker @change="bindPickerChange" :value="indexNum" :range="array"> -->
					<text>{{123}}</text>
					<image src="../../static/image/index/xiala.png" />
				<!-- </picker> -->
			</view>
<<<<<<< HEAD
			<view class="goods-status address-select" >
				<picker @change="bindPickerChange" :value="index" :range="array">
					<text>{{array[index]}}</text>
					<image src="../../static/image/index/xiala.png" />
				</picker>
		    </view>
	    </view>
	<view class="index-main">
		<view class="getgoods-type">
			<text :class="show==1? 'teshu' : '' " @tap="switchSelf">自提点</text>
			<text :class="show==2? 'teshu' : '' " @tap="switchHome">用户家中</text>
		</view>
		<view class="search">
			<view class="search-left">
				<image src="../../static/image/index/search.png" class="fangdajing-icon"></image>
<<<<<<< HEAD
				<input type="text" v-model="value" />
				<image @tap="delVal" src="../../static/image/index/close.png" class="close-icon"></image>
=======
				<input type="text" />
				<image src="../../static/image/index/close.png" class="close-icon"></image>
=======
			<view class="goods-status address-select" @click="sendStatus">
				<text> 送达 </text>
				<image src="../../static/image/index/xiala.png" />
>>>>>>> ede503625541c70513bb62304ffb9fd30404b718
>>>>>>> 403ea2648aec8acd6041366f30832402c168cb1d
			</view>
		</view>

		<view class="index-main">
			<view class="getgoods-type">
				<text :class="getType==1? 'teshu' : '' "  @click="switchSelf">自提点</text>
				<text :class="getType==2? 'teshu' : '' "  @click="switchHome">用户家中</text>
			</view>
			<view class="search">
				<view class="search-left">
					<image src="../../static/image/index/search.png" class="fangdajing-icon"></image>
					<input type="text" @focus="historyRecode" />
					<image src="../../static/image/index/close.png" class="close-icon" @click="clearVal"></image>
				</view>
				<view class="search-right">搜索</view>
			</view>
			<!-- 自提点用户数据展示 -->
			<view class="user-message" v-show="show== 1 ">

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
	</view>
     
		
    <!-- 菜单 -->
    
    <view class="filter-net" v-show="menu" @tap="menuHiden">
    	<view class="menu" @tap="ifMonth">
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
    				<view class="date-month" @click.stop="dateMonth">
    					<text>{{month}}月</text>
    					<image src="../../static/image/index/right-jiantou.png"></image>
    					<view class="month-select" v-if="visible">
    						<picker-view class="month-select-num" :indicator-style="indicatorStyle" @change="bindChange">
    					
    							<picker-view-column @tap.stop="monthSelect(e)">
    								<view class="item" v-for="(item,index) in months" :key="index" >{{item}}月</view>
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
=======
		<bottomScroll :isFiexd="isFixed"></bottomScroll>

    </view>
>>>>>>> ede503625541c70513bb62304ffb9fd30404b718
</template>

<script>
<<<<<<< HEAD
	
	
=======
	// import uniPopup from "../../components/uni-popup.vue"
	 import bottomScroll  from "../../components/bbh-sheet/bbh-sheet.vue"
>>>>>>> 403ea2648aec8acd6041366f30832402c168cb1d
	export default {

		data() {
<<<<<<< HEAD
		const date = new Date()
		const months = []
		const month = date.getMonth() + 1
		for (let i = 1; i <= 12; i++) {
			months.push(i)
		}
=======
<<<<<<< HEAD
		
>>>>>>> 403ea2648aec8acd6041366f30832402c168cb1d
        return {
            title: 'picker',
            array: ['大城小爱小区', '美国', '巴西', '日本'],
            index: 0,
			show: "1",
			isFixed:false,
			menu:false,
			visible:false,
			indicatorStyle: 'color:green',
			month,
			months,
			value:''
        }
		
		},
		methods: {
			menuShow(){
				this.menu=true;
			},
		   bindPickerChange: function(e) {
=======
			console.log(this.val)
			return {
				title: 'picker',
				array: ['大城小爱小区', '美国', '巴西', '日本'],
				indexNum:"0" ,
				show: "1",
				
				getType: "1",
				val: "",
				isFixed:false
			}

		},
		methods: {
			bindPickerChange: function(e) {
>>>>>>> ede503625541c70513bb62304ffb9fd30404b718
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			switchHome() {
				this.show = 2,
			   this.getType = 2
			},
			switchSelf() {
				this.show = 1,
				this.getType = 1
			},

<<<<<<< HEAD
			},
<<<<<<< HEAD
			dateMonth() {
				this.visible = !this.visible;
			},
			menuHiden(){
				this.menu = false;
			},
			ifMonth() {
				
				this.visible = false;
				
			},
			bindChange: function(e) {
				const val = e.detail.value
				console.log(this.months[val[0]])
				this.month = this.months[val[0]]
			},
			delVal() {
					
					this.value = ""
				}
=======
			dateMonh(){
				this.visible=true;
=======
			historyRecode() {
				this.show = 3
			},
			clearVal() {
				
				this.val = ""
			},
			sendStatus() {
				this.isFixed = true;
>>>>>>> ede503625541c70513bb62304ffb9fd30404b718
			}
>>>>>>> 403ea2648aec8acd6041366f30832402c168cb1d
		},
		mounted() {
			this.show = "1";
			this.getType="1"
		},
		watch: {
			show(newValue, oldValue) {
				console.log(newValue, oldValue)
			}
<<<<<<< HEAD
=======
		},
		components: {
		   bottomScroll
>>>>>>> 403ea2648aec8acd6041366f30832402c168cb1d
		}
		
	}
</script>

<style>
	.recode {
		display: flex;
		flex-direction: column;
		flex: 1
	}

	.recode .recode-head {
		display: flex;
		justify-content: space-between;
		padding: 31upx;

	}

	.recode-head image:nth-of-type(1) {
		width: 41upx;
		height: 32upx;
		margin-right: 4upx;
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

	.goods-status image {
		width: 50upx;
		height: 50upx;
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
		margin-top:30upx;
		display: flex;
<<<<<<< HEAD
		width: 607upx;
		height: 63upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 17px;
		padding: 0 30upx;
		box-shadow: 0 5upx 10upx #cecece;
=======

		height: 73upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 17px;

		box-shadow: 0upx 4upx 10upx 4upx rgba(0, 0, 0, .1);
		border-radius: 15upx;
		margin-top: 30upx;

>>>>>>> ede503625541c70513bb62304ffb9fd30404b718
	}

	.search .search-left {
		display: flex;
		padding-left: 20upx;
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
		padding-left: 5upx;
		font-size: 32upx;

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
<<<<<<< HEAD
		padding: 31upx;
		box-shadow: 0 5upx 10upx #CECECE;
		border-radius: 10upx;
=======

		box-shadow: 0upx 6upx 20upx 2upx rgba(0, 0, 0, .1);
		border-radius: 15upx;
>>>>>>> ede503625541c70513bb62304ffb9fd30404b718
	}

	.user-message-list .getgoods-status {
		font-size: 27upx;
		height: 52upx;
		line-height: 52upx;
		background: #cecece;
		padding-left: 30upx;
		border-radius: 17upx 17upx 0 0;
	}

	.message-partone,
	.message-partthree,
	.message-parttwo {
		padding: 0 30upx;
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
		padding-top: 30upx;
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
		padding-bottom: 30upx;
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

	.home-status {
		padding-left: 30upx;
		background: gray;
		border-radius: 17upx 17upx 0 0;
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
<<<<<<< HEAD
	/* 菜单栏 */
	.filter-net {
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, 0.5);
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
		overflow: visible;
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
		width:160upx;
		height:400upx;
		position: absolute;
		right:-160upx;
		top:-168upx;
		z-index:100000!important;
		background-color: #FFFFFF;
		overflow: hidden;
		border-radius: 18upx;
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
	.item{
		justify-content: center;
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
	
	
=======

	/* 搜索记录 */
	.history-recode {
		display: flex;
		flex-direction: column;
	}

	.search-history,
	.search-find {
		display: flex;
		flex-direction: column;
		margin-top: 63upx;
	}

	.search-history h3 {
		margin-bottom: 42upx;
		font-size: 33upx;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);

	}

	.search-history view {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;

	}

	.search-history view text {
		font-size: 26upx;
		color: rgba(173, 173, 173, 1);
		letter-spacing: 1px;
		margin-right: 42upx;
	}

	/* 搜索发现 */
	.search-find h3 {
		font-size: 33upx;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}

	/* 信息展示 */
	.search-find .user-message {

		margin-top: 51upx;
		background: url(../../static/image/index/shugang.png) no-repeat 0 26upx;
		background-size: 2px 48upx;
		display: flex;
		flex-direction: column;
	}

	.search-find .user-message-list {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin-bottom: 25upx;
		padding: 31upx;
		box-shadow: 0upx 4upx 10upx 4upx rgba(0, 0, 0, .1);
		border-radius: 15upx;
	}

	.search-find .user-message-list .message-partone {
		display: flex;
		justify-content: space-between;
		align-items: center;

	}

	.search-find .message-partone text {

		height: 47upx;
		font-size: 33upx;
		font-family: PingFangSC-Medium;
		font-weight: 600;
		color: rgba(57, 74, 81, 1);
		padding-top: 0;
		letter-spacing: 1px;
	}

	.search-find .message-partone image {
		width: 48upx;
		height: 48upx;

	}

	.search-find .message-parttwo {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 10upx;
	}

	.search-find .message-parttwo text {
		font-size: 27upx;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: rgba(57, 74, 81, 1);

		letter-spacing: 1px;
	}

	.message-parttwo text:nth-child(1) {
		margin-right: 38upx;
	}

	.search-find .message-partthree {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 29upx;
	}

	.search-find .message-partthree text {
		font-family: SourceHanSansCN-Regular;
		font-weight: 400;
		color: rgba(57, 74, 81, 1);

		letter-spacing: 1px;
	}

	.search-find .message-partthree .remarks {
		display: flex;
		align-items: center;

	}

	.search-find .remarks text {

		color: rgba(50, 146, 191, 1);
		letter-spacing: 1px;
	}

	.search-find .remarks image {
		width: 21upx;
		height: 16upx;
		background: rgba(20, 153, 217, 1);
		margin-left: 5upx;
	}
>>>>>>> ede503625541c70513bb62304ffb9fd30404b718
</style>
