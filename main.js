import Vue from 'vue'
import App from './App'
import config from './common/config'

Vue.config.productionTip = false
Vue.prototype.config =config

	uni.getStorage({
				key:"info",
				success: (res) => {
					Vue.prototype.token=res.token;
				}
			})

	
try {
    const value = uni.getStorageSync('info');
    if (value) {
        Vue.prototype.token=value.token
    }
} catch (e) {
    // error
}



App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
