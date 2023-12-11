import showtoast from './showtoast'
import stores from './store'
class requset {
	public https : string = 'https://pinia.vuejs.org/introduction.html'
	readonly httpsRequset : string | '' = ''
	public data : AnyObject = {}
	public methods : string = '' || 'POST'
	public pamrs : AnyObject = {
		url: this.https,
		data: this.data,
		method: this.methods
	}
	getRqueset = (pamrs : object | {}, path : string) => new Promise(async resolve => {
		this.pamrs.data = pamrs
		this.https = this.https + path as string
		this.pamrs.url = this.https
		return resolve(this.requset(this.pamrs))
	})
	requset = (parms : any) => new Promise(async resolve => {
		console.log(parms)
		uni.request({
			...parms,
			success: (res : AnyObject) => {
				this.data.openid && res.data.code >= 1 && res.data.code <= 200 ? new stores().setStoreLocation(res.data) : '';
				res.data.code < 0 || res.data.code > 400 && res.data.code < 500 ? new showtoast().showtoast(res.data.msg) : ''
				return resolve(res.data);
			}
		})
	})
}
export default requset