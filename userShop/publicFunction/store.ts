class stores {
	setStoreLocation = (parms:object) => new Promise(async resolve => {
		let newParms:AnyObject = {
			key:String,
			value:Object || Array
		}
		if(typeof parms == 'object'){
			for(let k in parms){
				newParms.key = k
				newParms.value = parms
			}
		}
		return resolve(uni.setStorageSync(newParms.key,newParms.value))
	})
	getStoreLocation = (key:string) => new Promise(async resolve=>{
		return resolve(uni.getStorageSync(key))
	})
}

export default stores