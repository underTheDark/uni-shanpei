<template>
	<view class="detail">
		<view class="detail-head">
			<image src="../../static/image/detail/back.png"></image>
			<h2>订单详情</h2>
		</view>
		<view class="detail-main">
			<view class="user-message">
				<view>
					<view>
						<text>订单编号：</text>
						<text>22222222</text>
					</view>
					<image class="status-icon" src="../../static/image/detail/send.png" />
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
					<text>河南省郑州市高新技术开发区科学大 道广告产业园9号楼13楼1317室</text>
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
			<view class="sendgoods-status">
				<view class="sendgoods-status-error">
					<view class="send-remark">
						<text>备注信息：</text>
						<text>22222222</text>
					</view>
				</view>
				<view class="sendgoods-status-success">
					<view class="send-status-time">
						<view class="send-status">
							<text>用户收获情况：</text>
							<text>已收货</text>
						</view>
						<view class="send-time">
							<text>用户取件时间：</text>
							<text>2019年3月8日 12：00</text>
						</view>
					</view>
				</view>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		},
	}
</script>

<style lang="scss">
	.detail {
		display: flex;
		flex-direction: column;
		padding: 0 23upx;
	}

	.detail-head {
		height: 100upx;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.detail-head h2 {
		font-size: 38upx;
		color: rgba(51, 51, 51, 1);
	}

	.detail-head image {
		position: absolute;
		left: 20upx;
		top: center;
		width: 23upx;
		height: 40upx;
	}

	/* 主要部分 */
	.detail .detail-main {
		display: flex;
		flex-direction: column;
		padding: 25upx;
	}

	.detail-main .user-message {
		display: flex;
		flex-direction: column;
	}

	.user-message view {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 29upx;
		margin: 25upx 0;
	}

	.user-message view text:nth-child(1) {
		color: #999999
	}

	.user-message view text:nth-child(2) {
		color: #333333;
	}

	.user-message view:nth-child(1) {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.user-message .status-icon {
		width: 104upx;
		height: 98upx;

	}

	.detail-main .send-address {

		height: 135upx;
		border-radius: 15px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.send-address text:nth-child(1) {
		color: #999999
	}

	.send-address text:nth-child(2) {
		color: #333333;
	}

	/* 送货状态详情 */
	.sendgoods-status {
		display: flex;
		flex-direction: column;
		margin-top: 20upx;
	}

	/* 1.异常送货情况 */
	.sendgoods-status-error {}

	.send-remark {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.send-remark text:nth-child(1) {
		color: #999999
	}

	.send-remark text:nth-child(2) {
		color: #333
	}

	/* 2.正常送达 */
	.sendgoods-status-success {}

	.send-status-time {
		display: flex;
		flex-direction: column;
		padding: 25upx 0;
	}

	.send-status-time view {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 29upx;
	}

	.send-status-time text {
		margin: 25upx 0
	}

	.send-status-time view text:nth-child(1) {
		color: #999999
	}

	.send-status-time view text:nth-child(2) {
		color: #333
	}
</style>
