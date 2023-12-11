interface parms {

}

interface user {

}

interface cardInput {
	input ?: number | string
}

// 订单数据类型
interface order {
	arbitrary : Array<object> | [{
		image : string,
		titel : string,
		money : number | string,
		newmoney : number | string,
		newnumber : number | string,
		totalnumber : number | string
	}]
}
// 最终价格数据类型
interface totalType {
	total : Array<object> | [{
		name : string,
		text : string
	}]
}

// 商品列表卡片类型
interface shopListType {
	shopList : Array<object> | [{
		image : string,
		title : string,
		score : string | number,
		children : Array<string> | [string],
		childrenShop : Array<object> | [{ image : string, title : string }],
		money : string | number,
		originMoney : string | number
	}]
}

// 选择规格类型
interface specificationType {
	objects : {
		title : string,
		text : string,
		level : string,
		children : Array<string> | [string],
		towChildren : Array<string> | [string]
	}
}
// 评论列表数据 
interface commentType {
	array : Array<object> | [{
		avatar : string,
		nickname : string,
		time : string,
		commentText : string,
		textarea : string,
		children : Array<string> | [string],
		shopText : string
	}]
}

// 购物车列表数据
interface shoppingCartType {
	array : Array<object> | [{
		check : boolean,
		title : string,
		image : string,
		children : Array<object> | [{
			title : string,
			quantity : number | string
		}],
		money : number | string,
		totalNumber : number | string
	}]
}

// 配送方式
interface deliveryType{
	array:Array<string> | [string]
}

export {
	parms,
	user,
	cardInput,
	order,
	totalType,
	shopListType,
	specificationType,
	commentType,
	shoppingCartType,
	deliveryType
}