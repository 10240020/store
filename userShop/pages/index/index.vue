<template>
	<!-- 顶部导航 -->
	<!-- <topBar /> -->
	<!-- 常用工具 -->
	<tool :parms="toolData" @onChange="onChange" :size="28" />
	<!-- 商品卡片 -->
	<view class="card-margin">
		<shopCard :parms="shopCardData" @closeChange="closeChange" @addChange="addChange" />
	</view>
	<!-- 订单商品列表 -->
	<orderList :orderData="orderData" />
	<!-- 配送地址 -->
	<view class="card-margin">
		<addresCompments :addressData="addressData" />
	</view>
	<!-- 最终价格优惠等 -->
	<view class="card-margin">
		<total :shopList="shopList" />
	</view>
	<!-- 修改订单信息 -->
	<view class="card-margin">
		<editOrder :editOrderData="editOrderData" />
	</view>
	<!-- 地址选择 -->
	<view class="card-margin">
		<addressSelect :currentIndex="currentIndex" @editChange="editChange" @selectChange="selectChange"
			:addressData="addressSelectData" fontSize="20" />
	</view>
	<!-- 更换地址 -->
	<view class="card-margin">
		<editAddress :newCurrentIndex="newCurrentIndex" :editAddress="editAddressData"
			@editSelectChange="editSelectChange" />
	</view>
	<!-- 商品列表卡片 -->
	<view class="card-margin">
		<shopListCard :shopListData="shopListData" />
	</view>
	<!-- 选择规格 -->
	<view class="card-margin">
		<button @click.stop.prevent="selectSpecificationChange">选规格</button>
		<selectPopup :chosenTow="chosenTow" :chosen="chosen" :towCurrentIndex="towCurrentIndex"
			:specificationCurrentIndex="specificationCurrentIndex" @towCurrentIndexChange="towCurrentIndexChange"
			@addShopCardChange="addShopCardChange" @currentIndexChange="currentIndexChange"
			@settlementChange="settlementChange" @closeChange="selectSpecificationChange" :selectPopup="specification"
			:specificationData="specificationObjectData">
			<slot>
				<view class="public-flex font-smallest">
					<u-icon color="white" name="plus-circle" size="10"></u-icon>
					<text style="margin-left: 5rpx;">加入购物车</text>
				</view>
			</slot>
		</selectPopup>
	</view>
	<!-- 评论 -->
	<view class="card-margin">
		<comment :commentData="commentsData" :count="5" :value="5" />
	</view>
	<!-- 购物车 -->
	<view class="card-margin">
		<shoppingCart @moreSelectChange="moreSelectChange" :shoppingCartData="shoppingCartData" />
	</view>
	<!-- 结算 -->
	<view class="card-margin">
		<settlementAll :totalNumber="totalNumber" :totalMoneys="totalMoneys" @settlementAllChange="settlementAllChange"
			@delectShopChange="delectShopChange" @selectAllChange="selectAllChange" :selectShow="selectShow" />
	</view>
	<!-- 配送方式 -->
	<view class="card-margin">
		<deliverySelect @selectAreaCodeChange="selectAreaCodeChange" @addAddressChange="addAddressChange"
			:deliverAddressData="deliverAddressData" @deliverChange="deliverChange"
			:deliverCurrentIndex="deliverCurrentIndex" :deliveryData="deliveryData" />
		<view class="popup">
			<u-picker :show="areaShow" title="区号选择" :columns="columns" @close="areaShow = !areaShow"></u-picker>
		</view>
	</view>
	<!-- 订单消息通知 -->
	<view class="card-margin">
		<orderMessage :template="template" />
	</view>
	<!-- 订单状态卡片 -->
	<view class="card-margin">
		<orderStatusCard :completedData="completedData" :salesData="salesData" :orderTemplate="orderTemplate" />
	</view>
	<!-- 退款原因 -->
	<view class="card-margin">
		<refundCard @uploadingChange="uploadingChange" :templateRefund="true" :unnecessary="true" />
	</view>
	<!-- 上传凭证 -->
	<view class="card-margin">
		<certificateCard @uploadingChange="uploadingChange" />
	</view>
	<!-- 申述商家卡片 -->
	<view class="card-margin">
		<appealCard />
	</view>
	<!-- 申诉状态 -->
	<view class="card-margin">
		<appealStatusCard editBackground="3" />
	</view>
	<!-- 评价骑手和商家 -->
	<view class="card-margin">
		<multipleReviews @statifyChange="statifyChange" :statifyCurrentIndex="statifyCurrentIndex" :statifyData="statifyData" @selectChangeHeart="selectChangeHeart" :currentindexHeart="currentindexHeart" :heartData="heartData" />
	</view>
	<!-- 店铺详情 -->
	<view class="card-margin">
		<storeDescriptionCard />
	</view>
</template>

<script lang="ts" setup>
	import { getCurrentInstance, ref } from "vue";
	import tool from '@/compoments/tool.vue'
	import shopCard from '@/compoments/shopCard.vue'
	import orderList from '@/compoments/orderList.vue'
	import total from '@/compoments/total.vue'
	import addresCompments from '@/compoments/address.vue'
	import editOrder from '@/compoments/editOrder.vue'
	import addressSelect from '@/compoments/addressSelect.vue'
	import editAddress from '@/compoments/editAddress.vue'
	import shopListCard from '@/compoments/shopListCard.vue'
	import selectPopup from '@/compoments/selectPopup.vue'
	import comment from '@/compoments/comment.vue'
	import shoppingCart from '@/compoments/shoppingCart.vue'
	import settlementAll from '@/compoments/settlementAll.vue'
	import deliverySelect from '@/compoments/delivery.vue'
	import orderMessage from '@/compoments/orderMessage.vue'
	import orderStatusCard from '@/compoments/orderStatusCard.vue'
	import refundCard from '@/compoments/refund.vue'
	import certificateCard from '@/compoments/certificate.vue'
	import appealCard from '@/compoments/appeal.vue'
	import appealStatusCard from '@/compoments/appealStatus.vue'
	import multipleReviews from '@/compoments/multiple.vue'
	import storeDescriptionCard from '@/compoments/storeDescription.vue'
	// 类型强制
	import { order, totalType, shopListType, specificationType, commentType, shoppingCartType, deliveryType } from '@/publicFunction/type'
	// 请求接口导入
	import * as API from '@/publicFunction/api'
	// 弹窗导入
	import showtoast from '../../publicFunction/showtoast';
	// 本地储存 使用方法 new stores().setStoreLocation(res) getStoreLocation(key).then(async response=>{}) 只需传入返回值必须是以对象的形式进行传入
	// 常用工具数据
	const toolData = ref([{
		icon: 'photo',
		name: '购物车'
	}, {
		icon: 'photo',
		name: '我的钱包'
	}, {
		icon: 'photo',
		name: '地址管理'
	}, {
		icon: 'photo',
		name: '平台通知'
	}, {
		icon: 'photo',
		name: '商家入住'
	}, {
		icon: 'photo',
		name: '协议中心'
	}, {
		icon: 'photo',
		name: '隐私政策'
	}, {
		icon: 'photo',
		name: '隐私政策'
	}])
	// 商品数据
	const shopCardData = ref([{
		image: 'https://images.unsplash.com/photo-1701213327963-742e60643f28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
		title: '12.88尊享爆裂手撕烤鸡(半只)...',
		number: '1个',
		money: '￥12.88',
		originMoney: '￥14',
		newNumber: 1
	}, {
		image: 'https://images.unsplash.com/photo-1701213327963-742e60643f28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
		title: '12.88尊享爆裂手撕烤鸡(半只)...',
		number: '1个',
		money: '￥12.88',
		originMoney: '￥14',
		newNumber: 1
	}, {
		image: 'https://images.unsplash.com/photo-1701213327963-742e60643f28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8',
		title: '12.88尊享爆裂手撕烤鸡(半只)...',
		number: '1个',
		money: '￥12.88',
		originMoney: '￥14',
		newNumber: 1
	}])

	const orderData = ref<order['arbitrary']>([{
		image: 'https://images.unsplash.com/photo-1701293773241-de1a7bff8e3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
		title: '炭烤面筋我烤面筋你烤清华北大清华',
		money: '￥5',
		newmoney: '￥2.88',
		newnumber: '1串',
		totalnumber: '×1',
	}, {
		image: 'https://images.unsplash.com/photo-1701293773241-de1a7bff8e3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
		title: '炭烤面筋我烤面筋你烤清华北大清华',
		money: '￥5',
		newmoney: '￥2.88',
		newnumber: '1串',
		totalnumber: '×1'
	}, {
		image: 'https://images.unsplash.com/photo-1701293773241-de1a7bff8e3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8',
		title: '炭烤面筋我烤面筋你烤清华北大清华',
		money: '￥5',
		newmoney: '￥2.88',
		newnumber: '1串',
		totalnumber: '×1'
	}])

	// 
	const shopList = ref<totalType['total']>([{
		name: '商品小计',
		text: '￥57.88'
	}, {
		name: '打包费',
		text: '￥3.4'
	}, {
		name: '配送费',
		text: '￥3.8'
	}])

	const addressData = ref<totalType['total']>([{
		name: '配送地址',
		text: '金华园小区(A栋7-1)'
	}, {
		name: '电话',
		text: '17823106360'
	}, {
		name: '备注',
		text: '无备注'
	}, {
		name: '餐具数量',
		text: '商家按餐量提供'
	}])

	const currentIndex = ref<number>(0)
	const addressSelectData = ref<totalType['total']>([{
		title: '金华园小区 A栋 7-1',
		username: '李 先生 17823106360',
		disabled: '家',
	}, {
		title: '观音桥红鼎国际 A栋 1420',
		username: '李 先生 17823106360',
		disabled: '公司',
	}, {
		title: '观音桥红鼎国际 B栋 1622',
		username: '李 先生 17823106360',
	}, {
		title: '观音桥红鼎国际 B栋 1622',
		username: '李 先生 17823106360',
	}, {
		title: '观音桥红鼎国际 B栋 1622',
		username: '李 先生 17823106360',
	}])


	// 
	const editOrderData = ref<totalType['total']>([{
		name: '配送地址',
		text: '金华园小区(A栋7-1)'
	}, {
		name: '收货电话',
		text: '17823106360'
	}, {
		name: '餐具数量',
		text: '商家按餐量提供'
	}, {
		name: '备注',
		text: '口味、偏好等要求'
	}])

	const newCurrentIndex = ref<number>(0)
	const editAddressData = ref<totalType['total']>([{
		address: '金华园小区-E栋',
		username: '重庆市渝北区五童街99号'
	}, {
		address: '金华园小区-E栋',
		username: '重庆市渝北区五童街99号'
	}, {
		address: '金华园小区-E栋',
		username: '重庆市渝北区五童街99号'
	}, {
		address: '金华园小区-E栋',
		username: '重庆市渝北区五童街99号'
	}])

	const shopListData = ref<shopListType['shopList']>([{
		image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8fDA%3D',
		title: '享多味中国汉堡',
		score: '4.7',
		children: ['满30减3', '满30减3', '满30减3'],
		childrenShop: [{ image: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2ZjfGVufDB8fDB8fHww', title: '冲销四件套...' }, { image: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2ZjfGVufDB8fDB8fHww', title: '冲销四件套...' }, { image: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2ZjfGVufDB8fDB8fHww', title: '冲销四件套...' }],
		money: '￥20.9',
		originMoney: '￥20.9'
	}, {
		image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8fDA%3D',
		title: '享多味中国汉堡',
		score: '4.7',
		children: ['满30减3', '满30减3', '满30减3'],
		childrenShop: [{ image: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2ZjfGVufDB8fDB8fHww', title: '冲销四件套...' }, { image: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2ZjfGVufDB8fDB8fHww', title: '冲销四件套...' }, { image: 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2ZjfGVufDB8fDB8fHww', title: '冲销四件套...' }],
		money: '￥20.9',
		originMoney: '￥20.9'
	}])

	console.log(toolData)
	
	// 规格
	const specification = ref<boolean>(false)
	const specificationCurrentIndex = ref<number>(0)
	const towCurrentIndex = ref<number>(0)
	const chosen = ref<string>()
	const chosenTow = ref<string>()
	const specificationObjectData = ref<specificationType['objects']>({
		title: '福利！0元免费享素菜六选一（多点无 效）香喷喷！',
		text: '菜品',
		level: '辣度',
		children: ['土豆片', '四季豆', '金针菇', '黄瓜片', '青椒', '香菇'],
		towChildren: ['微辣', '中辣', '特辣', '变态辣']
	})
	chosen.value = specificationObjectData.value.children[specificationCurrentIndex.value]
	chosenTow.value = specificationObjectData.value.towChildren[specificationCurrentIndex.value]

	// 评论
	const commentsData = ref<commentType['array']>([{
		avatar: 'https://images.unsplash.com/photo-1621114957135-7f88c8447439?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2ZjfGVufDB8fDB8fHww',
		nickname: 'jonl1564813',
		time: '2023.11.12',
		commentText: '非常满意',
		textarea: '味道不错，点的不辣的，但是肉腌制的嘎嘎香，自己撒了点辣椒粉精确控制辣度，超级安逸，很好吃',
		children: ['https://images.unsplash.com/photo-1600147184950-b0a367a98bc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGtmY3xlbnwwfHwwfHx8MA%3D%3D', 'https://images.unsplash.com/photo-1644032982093-b4a7b38935ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGtmY3xlbnwwfHwwfHx8MA%3D%3D', 'https://images.unsplash.com/photo-1644204010282-b697f0e3f8db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGtmY3xlbnwwfHwwfHx8MA%3D%3D'],
		shopText: '商家回复：蟹蟹亲的好评,看到亲的表扬,心里暖暖的,您的认可就是我们继续努力的动力,希望有机会为 亲亲再次服务~'
	}])

	// 购物车
	const shoppingCartData = ref<shoppingCartType['array']>([{
		check: false,
		title: '原始人烧烤（石坪桥店）',
		image: 'https://images.unsplash.com/photo-1597227772909-a6d166b48b79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1lcmNoYW50fGVufDB8fDB8fHww',
		children: [{
			title: '碳烤鲜猪肝串（不新鲜不要钱）',
			quantity: '×2'
		}, {
			title: '五彩鲜牛肉',
			quantity: '×2'
		}, {
			title: '烤雪花牛肉粒',
			quantity: '×2'
		}],
		money: '51.81',
		totalNumber: '10'
	}, {
		check: false,
		title: '原始人烧烤（石坪桥店）',
		image: 'https://images.unsplash.com/photo-1597227772909-a6d166b48b79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1lcmNoYW50fGVufDB8fDB8fHww',
		children: [{
			title: '碳烤鲜猪肝串（不新鲜不要钱）',
			quantity: '×2'
		}, {
			title: '五彩鲜牛肉',
			quantity: '×2'
		}, {
			title: '烤雪花牛肉粒',
			quantity: '×2'
		}],
		money: '51.81',
		totalNumber: '10'
	}])

	// 配送方式选择数据
	const deliveryData = ref<deliveryType['array']>(['外卖配送', '到店自取'])

	// 全选
	const selectShow = ref<boolean>(false)
	const totalNumber = ref<number | string>(0)

	// 接口请求使用 无需传入任何参数
	API.login().then(async response => {
		
		if (!response) {
			new showtoast().showtoast('网络错误')
		}
	})

	// 事件
	const onChange = async (parms : object) => new Promise(async resolve => {
		console.log(parms)
	})

	const addChange = async (parms) => new Promise(async resolve => {
		return parms.newNumber++
	})
	// 减少事件
	const closeChange = async (parms) => new Promise(async resolve => {
		if (parms.newNumber > 1) {
			return parms.newNumber--
		}
	})
	// 选择事件
	const selectChange = async (parms : AnyObject, index : number) => new Promise(async resolve => {
		currentIndex.value = index
	})
	// 修改选择事件
	const editChange = async (parms : AnyObject) => new Promise(async resolve => {
		console.log(parms)
	})
	// 修改地址选择事件
	const editSelectChange = async (parms : AnyObject, index : number) => new Promise(async resolve => {
		newCurrentIndex.value = index
	})
	// 选择规格事件
	const selectSpecificationChange = async () => new Promise(async resolve => {
		specification.value = !specification.value
	})
	// 添加购物车事件
	const addShopCardChange = async (parms) => new Promise(async resolve => {
		console.log(parms)
	})
	// 去结算
	const settlementChange = async () => new Promise(async reolve => {

	})
	// 规格选择事件
	const currentIndexChange = async (index : number) => new Promise(async resolve => {
		specificationCurrentIndex.value = index
		chosen.value = specificationObjectData.value.children[index]
	})
	// 二级规格选择事件
	const towCurrentIndexChange = async (index : number) => new Promise(async resolve => {
		towCurrentIndex.value = index
		chosenTow.value = specificationObjectData.value.towChildren[index]
	})
	// 勾选购物车事件
	const totalMoneys = ref<string | number>(0)
	const selectIndex = ref<Array<object>>([])
	const moreSelectChange = async (parms : AnyObject, index : number) => new Promise(async resolve => {
		parms.check = !parms.check
		allFunction(parms, index, 0)
	})
	// 全选商品事件
	const selectAllChange = async (parms : boolean) => new Promise(async resolve => {
		selectShow.value = !selectShow.value
		totalMoneys.value = 0
		selectIndex.value = []
		for (let k in shoppingCartData.value) {
			allFunction({}, (k as unknown as number), 1)
		}
	})
	// 全选封装
	const allFunction = async (parms : object, index : number, type : number) => new Promise(async resolve => {
		const anyObject = (shoppingCartData.value[index] as AnyObject)
		const values = (anyObject.check) = true;
		if (type == 0) {
			if (values == true) {
				selectIndex.value.push(shoppingCartData.value[index]);
				totalNumber.value = selectIndex.value.length;
				(totalMoneys.value as number) += Number(anyObject.money)
			} else {
				selectIndex.value.splice(0, 1);
				totalNumber.value = selectIndex.value.length;
				(totalMoneys.value as number) -= Number(anyObject.money)
			}
		} else {
			if (selectShow.value == true) {
				selectIndex.value.push(shoppingCartData.value[index]);
				totalNumber.value = selectIndex.value.length;
				(totalMoneys.value as number) += Number(anyObject.money)
			} else {
				selectIndex.value = [];
				totalNumber.value = selectIndex.value.length;
				anyObject.check = false;
				(totalMoneys.value as number) = 0
			}
		}
	})
	// 全选删除商品事件
	const delectShopChange = async () => new Promise(async resolve => {

	})
	// 结算全部商品事件
	const settlementAllChange = async () => new Promise(async resolve => {

	})

	// 配送方式
	const deliverCurrentIndex = ref<number>(1)
	const deliverAddressData = ref<boolean>(true)
	const deliverChange = async (index : number) => new Promise(async resolve => {
		deliverCurrentIndex.value = index
	})
	const addAddressChange = async () => new Promise(async resolve => {

	})

	// 选择区号
	const areaShow = ref<boolean>(false)
	const columns = ref<Array<any>>([['中国大陆+86', '中国香港+852', '中国澳门+853']])
	const selectAreaCodeChange = async () => new Promise(async resolve => {
		areaShow.value = !areaShow.value
		console.log(areaShow.value)
	})

	// 消息模板
	const template = ref<number>(1)

	// 订单状态卡片模板
	const orderTemplate = ref<number>(2)
	const salesData = ref<totalType['total']>([{
		name: 'car',
		text: '确认收货'
	}, {
		name: 'rmb-circle',
		text: '申请售后'
	}, {
		name: 'more-circle',
		text: '联系商家'
	}])
	const completedData = ref<totalType['total']>([{
		name: 'plus-circle',
		text: '再来一单'
	}, {
		name: 'file-text',
		text: '评价订单'
	}])


	// 退款申请
	// 上传图片事件
	const uploadingChange = async () => new Promise(async resolve => {
		uni.chooseImage({
			sourceType: ['album', 'camera'],
			success: (chooseImageRes) => {
				const tempFilePaths = chooseImageRes.tempFilePaths
				uni.uploadFile({
					url: 'https://www.example.com/upload', //仅为示例，非真实的接口地址
					filePath: tempFilePaths[0],
					method: 'POST',
					name: 'file',
					formData: {
						'user': 'test'
					},
					success: (uploadFileRes) => {
						console.log(uploadFileRes.data);
					}
				});
			}
		})
	})
	
	// 多层评价
	const heartData = ref<deliveryType['array']>(['不满意','满意'])
	const currentindexHeart = ref<string | number>(1)
	const selectChangeHeart = async (parms:string,index:number) => new Promise(async resolve=>{
		currentindexHeart.value = index
	})
	// 评价标签
	const statifyData = ref<deliveryType['array']>(['礼貌热情','货品完好','快速准时','风雨无阻','仪表整洁','穿戴工服','写评论'])
	const statifyCurrentIndex = ref<number>(0)
	const statifyChange = async (parms : string, index : number) => new Promise(async resolve => {
		statifyCurrentIndex.value = index
	})
</script>

<style lang="scss" scoped>
	.card-margin {
		margin: 0 30rpx;
	}
</style>