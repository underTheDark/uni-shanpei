<script>
	
	export default {
	
		onLaunch: function() {
			console.log('App Launch')
			 uni.getProvider({
        service: 'oauth',
        success: function(res) {
            console.log(res.provider);
            //支持微信、qq和微博等
            if (~res.provider.indexOf('weixin')) {
                uni.login({
                    provider: 'weixin',
                    success: function(loginRes) {
                        console.log('-------获取openid(unionid)-----');
                        console.log(JSON.stringify(loginRes));
                        // 获取用户信息
                        uni.getUserInfo({
                            provider: 'weixin',
                            success: function(infoRes) {
                                console.log('-------获取微信用户所有-----');
                                console.log(JSON.stringify(infoRes.userInfo));
                            }
                        });
                    }
                });
            }
        }
    });
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	html,
	body {
		width: 100%;
	}

	page,
	view {
		display: flex;
		/* uni-app默认使用flex布局。因为flex布局有利于跨更多平台，尤其是采用原生渲染的平台。如不了解flex布局，请参考http://www.w3.org/TR/css3-flexbox/。若不需要flex布局可删除本行*/

	}

	uni-tabbar .uni-tabbar__label {
		font-size: 28upx !important;
	}

	uni-tabbar .uni-tabbar__bd,
	uni-tabbar .uni-tabbar__item {

		margin-top: 3px !important
	}
</style>
