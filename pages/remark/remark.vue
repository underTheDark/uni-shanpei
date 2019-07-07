<template>
	<view class="remark">
		<view class="remark-head">
			<view @click="back">&lt;</view>
			<view>备注</view>
			<view>提交</view>
		</view>
		<view class="remark-main">
			<view>
				<text>订单编号：</text>
				<text>22222222</text>
			</view>
			<view>
				<text>收货人：</text>
				<text>joe</text>
			</view>
			
			<view>
				<text>电话：</text>
				<text>2333333333</text>
			</view>
			<view>
				<text>地址：</text>
				<text>22222222</text>
			</view>
			<view>
				<text>配送件数：</text>
				<text>2</text>
			</view>
			<view>
				<text>收货时间：</text>
				<text>22222222</text>
			</view>
		</view>
		<view class="remark-reason">
			<view>
				<text>备注：</text>
				<text>{{remarkReason}}</text>
			</view>
			<picker @change="remarkSelect"  :range="remarkList">
				<image src="../../static/image/remark/xiala-icon.png" />
			</picker>
		    
		</view>
		<view class="remark-message">
			<textarea placeholder="请输入备注信息" maxlength="500"></textarea>
			<view>30/500</view>
		</view>
		<view class="remark-upload">
			<view>上传照片</view>
			<view>
				<image src="../../static/image/remark/camera-icon.png" />
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				remarkList:["货物丢失","货物损坏","货物退回"],
				remarkReason:"",
				index:0
			}
		},
		methods:{
			remarkSelect(e){
				this.remarkReason=this.remarkList[e.detail.value]
			},
			back(){
				uni.navigateBack({
					delta:1
				})
			}
		},
		mounted(){
			this.remarkReason=this.remarkList[this.index]
		}
	}
</script>

<style>
	.remark{
		display:flex;
		flex-direction: column;
		padding:0 40upx;
		flex:1
	}
	.remark-head{
		display:flex;
		justify-content: space-between;
		align-items: center;
		height:100upx;
		
	}
	.remark-head view:nth-child(1){
font-weight: 300;		
font-size: 60upx;
	}
	.remark-head view:nth-child(2){
		font-size:38upx;
font-family:SourceHanSansCN-Medium;
font-weight:300;
color:rgba(51,51,51,1);
	}
	.remark-head view:nth-child(3){
		
width:115upx;
height:50upx;
background:rgba(0,198,93,1);
box-shadow:0px 2px 8px 0px rgba(0,198,93,0.36);
border-radius:25px;
line-height:50upx;
display:flex;
justify-content: center;
font-size: 29upx;
color:#FFFFFF;
	}
	
 /* 用户信息 */
 .remark-main{
	 display: flex;
	 flex-direction: column;
	 padding:25upx 0 25upx 25upx;
	  background: url(../../static/image/index/shugang.png) no-repeat 0 50upx;
	  background-size: 4upx 42upx;
	  border-radius: 17upx;
	  box-shadow: 0upx 4upx 10upx 4upx rgba(0,0,0,.1);
	  margin-top:20upx;
 }
 .remark-main view{
	 display:flex;
	 justify-content: flex-start;
	 align-items: center;
	 font-size: 29upx;
	margin:25upx 0; 
 }
 .remark-main view text:nth-child(1){
	 color:#999999
 }
 .remark-main view text:nth-child(2){
	 color:#333333;
 }
 /* 货物丢失备注 */
 .remark-reason {
	 display:flex;
	 justify-content: space-between;
	 align-items: center;
	 height:125upx;
	 background: url(../../static/image/index/shugang.png) no-repeat 0 center;
	  background-size: 4upx 42upx;
	 padding-left:25upx;
	 border-radius: 17upx;
	 box-shadow: 0upx 4upx 10upx 4upx rgba(0,0,0,.1);
	 margin:30upx 0
 }
 .remark-reason view{
	 display:flex;
	 justify-content: flex-start;
	 align-items: center;
 }
 .remark-reason view text:nth-child(1){
	 color:#999999
 }
  .remark-reason view text:nth-child(2){
 	 color:#333
 }
 .remark-reason image{
	 width:56upx;
	 height:56upx;
	 margin-right:20upx;
 }
 
 .remark-message{
	 display:flex;
	 flex-direction: column;
	  background: url(../../static/image/index/shugang.png) no-repeat 0 48upx;
	   background-size: 4upx 42upx;
	border-radius: 17upx;
	box-shadow: 0upx 4upx 10upx 4upx rgba(0,0,0,.1);
	marging:30upx 0;
 }
 .remark-message textarea{
	 height:271upx;

	 font-size: 29upx;
	 color:#999999;
	 
	 margin: 50upx 0 0 25upx;
	 
 }
 .remark-message view{
	 height:63upx;
	 
	 font-size: 25upx;
	 color:#CCCCCC;
	 display:flex;
	 justify-content: right;
	 align-items: center;
 }
 
 /* 上传照片 */
 
 .remark-upload{
	 padding:50upx 0 50upx 25upx;
	 display:flex;
	 flex-direction: column;
	 height:333upx;
	  background: url(../../static/image/index/shugang.png) no-repeat 0 50upx;
	  background-size: 4upx 42upx;
 }
 .remark-upload view:nth-child(1){
	 
height:29upx;
font-size:29upx;
color:rgba(153,153,153,1);
letter-spacing:1px;
 }
 .remark-upload view:nth-child(2){
	 width:177upx;
height:177upx;
border-radius:2upx;
border:1px dotted rgba(151,151,151,1);
margin-top: 29upx;
display: flex;
justify-content: center;
align-items: center;
 }
 .remark-upload image{
	 width:74upx;
	 height:72upx;
 }
</style>
