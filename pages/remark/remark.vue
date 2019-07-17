<template>
	<view class="remark">
		<view class="remark-head">
			<view class="img">
				<image src="../../static/image/detail/back.png"></image>
			</view>
			<view>备注</view>
			<view @click="submit()">提交</view>
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
				<text>22222222</text>
			</view>
			<image src="../../static/image/remark/xiala-icon.png" @click="remarkShow" />
		</view>
		<view class="remark-message">
			<textarea placeholder="请输入备注信息" maxlength="500" @input="inputeEvent"></textarea>
			<view>{{textLength}}/500</view>
		</view>
		<view class="remark-upload">
			<view>上传照片</view>
			<view class="up-wrap">
				<view class="upload-img">
					<image src="../../static/image/remark/camera-icon.png" @tap="chooseImg" />
				</view>
				<image class="uping-img" :src="tempFilePaths[index]"  v-for="(item,index) in tempFilePaths" :key="index" @click="preview"></image>
			</view>

		</view>
		<view class="remarkPiker" v-if="visible">
			<view class="show">
				{{type}}
			</view>
			<view class="month-select">
				<picker-view class="remark-chose" :indicator-style="indicatorStyle" @change="bindChange">

					<picker-view-column>
						<view class="item" v-for="(item,index) in remarkText" :key="index">{{item}} </view>
					</picker-view-column>

				</picker-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				visible: false,
				indicatorStyle: 'color:green',
				value: [22222],
				remarkText: ['货物丢失', '用户不在家'],
				type: '111111',
				textLength: 0,
				tempFilePaths: []
			}
		},
		methods: {
			remarkShow() {
				this.visible = true;
				console.log(this.visible)
			},
			chooseImg() {                                    //选择图片
				uni.chooseImage({
					success: (chooseImageRes) => {
						this.tempFilePaths=this.tempFilePaths.concat(chooseImageRes.tempFilePaths)

					}
				})
			},
			preview() {                                      //预览、删除图片 
				uni.previewImage({
					urls: this.tempFilePaths,
					longPressActions: {
						itemList: ['删除','全部删除'],
						success: (data) => {
							console.log(data.index)
							if(data.tapIndex==0){
								this.tempFilePaths.splice(data.index, 1)
							}else if(data.tapIndex==1){
								this.tempFilePaths.splice(0,this.tempFilePaths.length)
							}
						}
					}
				})
			},
			submit() {
				for (let i = 0; i < this.tempFilePaths.length; i++) {                 //从接口上传图片
					uni.uploadFile({
						url: 'http://shanpei.wsstreet.net/Upload',
						filePath: this.tempFilePaths[i],
						name: 'file',
						success: (uploadFileRes) => {                                 //uploadFileRes为后台返回数据
							console.log(JSON.parse(uploadFileRes.data));
						}
					})
				}

			},
			bindChange(e) {
				var  val = e.detail.value
				this.type = this.remarkText[val[0]]

			},
			inputeEvent(e) {
				this.textLength = e.detail.value.length
			}
		}
	}
</script>

<style lang="scss">
	.remark {
		display: flex;
		flex-direction: column;
		padding: 0 40upx;
		flex: 1
	}

	.remark-head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100upx;

	}

	.remark-head view:nth-child(1) {
 
		width:19upx;
		height:33upx;
		image{
			width:19upx;
			height:33upx;
		}
	}

	.remark-head view:nth-child(2) {
		font-size: 38upx;
		font-family: SourceHanSansCN-Medium;
		font-weight: 600;
		color: rgba(51, 51, 51, 1);
	}

	.remark-head view:nth-child(3) {

		width: 115upx;
		height: 50upx;
		background: rgba(0, 198, 93, 1);
		box-shadow: 0px 2px 8px 0px rgba(0, 198, 93, 0.36);
		border-radius: 25px;
		line-height: 50upx;
		display: flex;
		justify-content: center;
		font-size: 29upx;
		color: #FFFFFF;
	}

	/* 用户信息 */
	.remark-main {
		display: flex;
		flex-direction: column;
		padding: 25upx 0 25upx 25upx;
		background: url(../../static/image/index/shugang.png) no-repeat 0 50upx;
		background-size: 4upx 42upx;
	}

	.remark-main view {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 29upx;
		margin: 25upx 0;
	}

	.remark-main view text:nth-child(1) {
		color: #999999
	}

	.remark-main view text:nth-child(2) {
		color: #333333;
	}

	/* 货物丢失备注 */
	.remark-reason {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 125upx;
		background: url(../../static/image/index/shugang.png) no-repeat 0 center;
		background-size: 4upx 42upx;
		padding-left: 25upx;
	}

	.remark-reason view {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.remark-reason view text:nth-child(1) {
		color: #999999
	}

	.remark-reason view text:nth-child(2) {
		color: #333
	}

	.remark-reason image {
		width: 56upx;
		height: 56upx;
	}

	.remark-message {
		display: flex;
		flex-direction: column;
		background: url(../../static/image/index/shugang.png) no-repeat 0 48upx;
		background-size: 4upx 42upx;

	}

	.remark-message textarea {
		height: 271upx;
		background: rgba(246, 248, 247, 1);
		font-size: 29upx;
		color: #999999;
		width: 100%;
		padding: 48upx 0 0 25upx;

	}

	.remark-message view {
		height: 63upx;

		font-size: 25upx;
		color: #CCCCCC;
		display: flex;
		justify-content: right;
		align-items: center;
	}

	/* 上传照片 */

	.remark-upload {
		padding: 50upx 0 50upx 25upx;
		display: flex;
		flex-direction: column;
		height: 333upx;
		background: url(../../static/image/index/shugang.png) no-repeat 0 50upx;
		background-size: 4upx 42upx;
	}

	.remark-upload view:nth-child(1) {

		height: 29upx;
		font-size: 29upx;
		color: rgba(153, 153, 153, 1);
		letter-spacing: 1px;
	}

	.up-wrap {
		display: flex;
		flex-wrap: wrap;
	}

	.remark-upload view view:nth-child(1) {
		width: 177upx;
		height: 177upx;
		border-radius: 2upx;
		border: 1px dotted rgba(151, 151, 151, 1);
		margin-top: 29upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.upload-img image {
		width: 74upx;
		height: 72upx;
	}

	.uping-img {
		width: 177upx;
		height: 177upx;
		margin-top: 29upx;
	}
</style>
