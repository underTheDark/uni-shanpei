<template>
	<view class="content">
		<!-- <button @click="openSheet()">底部弹窗</button> -->
		<!-- 弹窗 -->
		<view class="sheet" :class="{sheetShow:isFiexd,sheeHide:!isFiexd}"    @touchmove.stop.prevent="moveHandle"  @click="closeSheet()">
			<scroll-view scroll-y="true"  class="sheetView"   :class="{sheetView_active:isFiexd}"   @click.stop="stopEvent()" >
				<view>0001</view>
				<view>0002</view>
				<view>0003</view>
				<view>0004</view>
				<view>0005</view>
				<view>0006</view>
				<view>0007</view>
				<view>0008</view>
				<view>0009</view>
				<view>0010</view>
				<view>0011</view>
				<view>0012</view>
				<view>0013</view>
				<view>0014</view>
				<view>0015</view>
				<view>0016</view>
				<view>0017</view>
				<view>0018</view>
				<view>0019</view>
				<view>0020</view>
				<view>0021</view>
				<view>0022</view>
				<view>0023</view>
				<view>0024</view>
				<view>0025</view>
				<view>0026</view>
				<view>0027</view>
				<view>0028</view>
				<view>0029</view>
				<view>0030</view>
			</scroll-view>
		</view>
	</view>
</template>
<script>
	export default {
		name : "my_sheet",
		props:{
			isFiexd:{
				type:Boolean,
				default:false
			}
		},
		data() {
			return {
                is
			}
		},
		methods: {
			openSheet(){
				this.isFiexd= true;
			},
			closeSheet(){					
				this.isFiexd= false;
			},
			stopEvent(){						//@click.stop防止事件冒泡
				
			},
			moveHandle(){						//不让页面滚动
				
			}
		},
		watch:{
			
		}
	}
</script>

<style>
	/* sheet弹窗 */
	.sheet{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 120%;
		left: 0upx;
		bottom: 0upx;
		right: 0upx;
		background:rgba(0,0,0,0.3);
		z-index: 10000;
	}
	
	/* 显示时候的动画默认0.5s */
	.sheetView{
		width: 100%;
		height: 0upx;
		position: absolute;
		bottom: 0upx;
		background: white;
		z-index: 10001;
		transition: all 0.5s;
	}
	.sheetShow{
		top:0upx !important;
	}
	/* 关闭时的动画，时间自己可以设置0.5s*/
	.sheeHide{
		top:120% !important;
		transition: all 0.5s;		
	}
	
	/* 项目需求根据设计稿要展示的高度,超出这个高度就自动滚动*/
	.sheetView_active{
		height: 942upx;
	}
	/* 隐藏滚动条 */
	 ::-webkit-scrollbar {
		width: 0;
		height: 0;
		color: transparent;
	  }
	  /* sheet弹窗结束 */
</style>
