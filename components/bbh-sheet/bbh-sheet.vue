<template>
	<view class="content">
		<!-- <button @click="openSheet()">底部弹窗</button> -->
		<!-- 弹窗 -->
		<view class="sheet"  :class="{sheetShow:isFiexd,sheeHide:!isFiexd}"    @touchmove.stop.prevent="moveHandle"  @click="closeSheet()">
			<scroll-view scroll-y="true"  class="sheetView"   :class="{sheetView_active:isFiexd}"   @click.stop="stopEvent()" >
				<view>0001</view>
				<view>0002</view>
				<view>0003</view>
				<view>0004</view>
				<view>0005</view>
			
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
// 
// props:[{isFixed:false}],
		data() {
			return {
				// isFiexd:this.isfiexd,				//底部弹窗开关
				
			}
		},
		watch:{
			// isfiexd(){
			// 	console.log(this.isfiexd);
			// 	this.isFiexd=this.isfiexd;
			// }
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
