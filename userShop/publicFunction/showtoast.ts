class showtoast{
	showtoast = (parms:string) => new Promise(async resolve=>{
		uni.showToast({
			title:parms,
			icon:'none'
		})
	})
}

export default showtoast