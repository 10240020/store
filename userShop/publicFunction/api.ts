import requset from './requset'
export const login = async () => new Promise(async resolve=>{
	let data = new requset().data = {
		openid:'032131',
		userName:'123a1s23da13d',
		avatar:'1213a1s3d1a3'
	}
	let methods:string = 'GET'
	let path:string = '/api/login'
	new requset().getRqueset(data,path).then(async response=>{
		return resolve(response)
	})
})

export const shopList = async (parms) => new Promise(async resolve=>{
	let data = new requset().data = {
		page:1,
		limit:10
	}
	let path:string = '/api/path'
	new requset().getRqueset(data,path).then(async response=>{
		return resolve(response)
	})
})
