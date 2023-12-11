"use strict";
const common_vendor = require("../../common/vendor.js");
const publicFunction_api = require("../../publicFunction/api.js");
const publicFunction_showtoast = require("../../publicFunction/showtoast.js");
require("../../publicFunction/requset.js");
require("../../publicFunction/store.js");
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_picker2 = common_vendor.resolveComponent("u-picker");
  (_easycom_u_icon2 + _easycom_u_picker2)();
}
const _easycom_u_icon = () => "../../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_picker = () => "../../uni_modules/uview-plus/components/u-picker/u-picker.js";
if (!Math) {
  (tool + shopCard + orderList + addresCompments + total + editOrder + addressSelect + editAddress + shopListCard + _easycom_u_icon + selectPopup + comment + shoppingCart + settlementAll + deliverySelect + _easycom_u_picker + orderMessage + orderStatusCard + refundCard + certificateCard + appealCard + appealStatusCard + multipleReviews + storeDescriptionCard)();
}
const tool = () => "../../compoments/tool.js";
const shopCard = () => "../../compoments/shopCard.js";
const orderList = () => "../../compoments/orderList.js";
const total = () => "../../compoments/total.js";
const addresCompments = () => "../../compoments/address.js";
const editOrder = () => "../../compoments/editOrder.js";
const addressSelect = () => "../../compoments/addressSelect.js";
const editAddress = () => "../../compoments/editAddress.js";
const shopListCard = () => "../../compoments/shopListCard.js";
const selectPopup = () => "../../compoments/selectPopup.js";
const comment = () => "../../compoments/comment.js";
const shoppingCart = () => "../../compoments/shoppingCart.js";
const settlementAll = () => "../../compoments/settlementAll.js";
const deliverySelect = () => "../../compoments/delivery.js";
const orderMessage = () => "../../compoments/orderMessage.js";
const orderStatusCard = () => "../../compoments/orderStatusCard.js";
const refundCard = () => "../../compoments/refund.js";
const certificateCard = () => "../../compoments/certificate.js";
const appealCard = () => "../../compoments/appeal.js";
const appealStatusCard = () => "../../compoments/appealStatus.js";
const multipleReviews = () => "../../compoments/multiple.js";
const storeDescriptionCard = () => "../../compoments/storeDescription.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const toolData = common_vendor.ref([{
      icon: "photo",
      name: "购物车"
    }, {
      icon: "photo",
      name: "我的钱包"
    }, {
      icon: "photo",
      name: "地址管理"
    }, {
      icon: "photo",
      name: "平台通知"
    }, {
      icon: "photo",
      name: "商家入住"
    }, {
      icon: "photo",
      name: "协议中心"
    }, {
      icon: "photo",
      name: "隐私政策"
    }, {
      icon: "photo",
      name: "隐私政策"
    }]);
    const shopCardData = common_vendor.ref([{
      image: "https://images.unsplash.com/photo-1701213327963-742e60643f28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
      title: "12.88尊享爆裂手撕烤鸡(半只)...",
      number: "1个",
      money: "￥12.88",
      originMoney: "￥14",
      newNumber: 1
    }, {
      image: "https://images.unsplash.com/photo-1701213327963-742e60643f28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
      title: "12.88尊享爆裂手撕烤鸡(半只)...",
      number: "1个",
      money: "￥12.88",
      originMoney: "￥14",
      newNumber: 1
    }, {
      image: "https://images.unsplash.com/photo-1701213327963-742e60643f28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
      title: "12.88尊享爆裂手撕烤鸡(半只)...",
      number: "1个",
      money: "￥12.88",
      originMoney: "￥14",
      newNumber: 1
    }]);
    const orderData = common_vendor.ref([{
      image: "https://images.unsplash.com/photo-1701293773241-de1a7bff8e3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
      title: "炭烤面筋我烤面筋你烤清华北大清华",
      money: "￥5",
      newmoney: "￥2.88",
      newnumber: "1串",
      totalnumber: "×1"
    }, {
      image: "https://images.unsplash.com/photo-1701293773241-de1a7bff8e3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
      title: "炭烤面筋我烤面筋你烤清华北大清华",
      money: "￥5",
      newmoney: "￥2.88",
      newnumber: "1串",
      totalnumber: "×1"
    }, {
      image: "https://images.unsplash.com/photo-1701293773241-de1a7bff8e3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8",
      title: "炭烤面筋我烤面筋你烤清华北大清华",
      money: "￥5",
      newmoney: "￥2.88",
      newnumber: "1串",
      totalnumber: "×1"
    }]);
    const shopList = common_vendor.ref([{
      name: "商品小计",
      text: "￥57.88"
    }, {
      name: "打包费",
      text: "￥3.4"
    }, {
      name: "配送费",
      text: "￥3.8"
    }]);
    const addressData = common_vendor.ref([{
      name: "配送地址",
      text: "金华园小区(A栋7-1)"
    }, {
      name: "电话",
      text: "17823106360"
    }, {
      name: "备注",
      text: "无备注"
    }, {
      name: "餐具数量",
      text: "商家按餐量提供"
    }]);
    const currentIndex = common_vendor.ref(0);
    const addressSelectData = common_vendor.ref([{
      title: "金华园小区 A栋 7-1",
      username: "李 先生 17823106360",
      disabled: "家"
    }, {
      title: "观音桥红鼎国际 A栋 1420",
      username: "李 先生 17823106360",
      disabled: "公司"
    }, {
      title: "观音桥红鼎国际 B栋 1622",
      username: "李 先生 17823106360"
    }, {
      title: "观音桥红鼎国际 B栋 1622",
      username: "李 先生 17823106360"
    }, {
      title: "观音桥红鼎国际 B栋 1622",
      username: "李 先生 17823106360"
    }]);
    const editOrderData = common_vendor.ref([{
      name: "配送地址",
      text: "金华园小区(A栋7-1)"
    }, {
      name: "收货电话",
      text: "17823106360"
    }, {
      name: "餐具数量",
      text: "商家按餐量提供"
    }, {
      name: "备注",
      text: "口味、偏好等要求"
    }]);
    const newCurrentIndex = common_vendor.ref(0);
    const editAddressData = common_vendor.ref([{
      address: "金华园小区-E栋",
      username: "重庆市渝北区五童街99号"
    }, {
      address: "金华园小区-E栋",
      username: "重庆市渝北区五童街99号"
    }, {
      address: "金华园小区-E栋",
      username: "重庆市渝北区五童街99号"
    }, {
      address: "金华园小区-E栋",
      username: "重庆市渝北区五童街99号"
    }]);
    const shopListData = common_vendor.ref([{
      image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8fDA%3D",
      title: "享多味中国汉堡",
      score: "4.7",
      children: ["满30减3", "满30减3", "满30减3"],
      childrenShop: [{ image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2ZjfGVufDB8fDB8fHww", title: "冲销四件套..." }, { image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2ZjfGVufDB8fDB8fHww", title: "冲销四件套..." }, { image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2ZjfGVufDB8fDB8fHww", title: "冲销四件套..." }],
      money: "￥20.9",
      originMoney: "￥20.9"
    }, {
      image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2R8ZW58MHx8MHx8fDA%3D",
      title: "享多味中国汉堡",
      score: "4.7",
      children: ["满30减3", "满30减3", "满30减3"],
      childrenShop: [{ image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2ZjfGVufDB8fDB8fHww", title: "冲销四件套..." }, { image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2ZjfGVufDB8fDB8fHww", title: "冲销四件套..." }, { image: "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2ZjfGVufDB8fDB8fHww", title: "冲销四件套..." }],
      money: "￥20.9",
      originMoney: "￥20.9"
    }]);
    console.log(toolData);
    const specification = common_vendor.ref(false);
    const specificationCurrentIndex = common_vendor.ref(0);
    const towCurrentIndex = common_vendor.ref(0);
    const chosen = common_vendor.ref();
    const chosenTow = common_vendor.ref();
    const specificationObjectData = common_vendor.ref({
      title: "福利！0元免费享素菜六选一（多点无 效）香喷喷！",
      text: "菜品",
      level: "辣度",
      children: ["土豆片", "四季豆", "金针菇", "黄瓜片", "青椒", "香菇"],
      towChildren: ["微辣", "中辣", "特辣", "变态辣"]
    });
    chosen.value = specificationObjectData.value.children[specificationCurrentIndex.value];
    chosenTow.value = specificationObjectData.value.towChildren[specificationCurrentIndex.value];
    const commentsData = common_vendor.ref([{
      avatar: "https://images.unsplash.com/photo-1621114957135-7f88c8447439?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a2ZjfGVufDB8fDB8fHww",
      nickname: "jonl1564813",
      time: "2023.11.12",
      commentText: "非常满意",
      textarea: "味道不错，点的不辣的，但是肉腌制的嘎嘎香，自己撒了点辣椒粉精确控制辣度，超级安逸，很好吃",
      children: ["https://images.unsplash.com/photo-1600147184950-b0a367a98bc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGtmY3xlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1644032982093-b4a7b38935ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGtmY3xlbnwwfHwwfHx8MA%3D%3D", "https://images.unsplash.com/photo-1644204010282-b697f0e3f8db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGtmY3xlbnwwfHwwfHx8MA%3D%3D"],
      shopText: "商家回复：蟹蟹亲的好评,看到亲的表扬,心里暖暖的,您的认可就是我们继续努力的动力,希望有机会为 亲亲再次服务~"
    }]);
    const shoppingCartData = common_vendor.ref([{
      check: false,
      title: "原始人烧烤（石坪桥店）",
      image: "https://images.unsplash.com/photo-1597227772909-a6d166b48b79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1lcmNoYW50fGVufDB8fDB8fHww",
      children: [{
        title: "碳烤鲜猪肝串（不新鲜不要钱）",
        quantity: "×2"
      }, {
        title: "五彩鲜牛肉",
        quantity: "×2"
      }, {
        title: "烤雪花牛肉粒",
        quantity: "×2"
      }],
      money: "51.81",
      totalNumber: "10"
    }, {
      check: false,
      title: "原始人烧烤（石坪桥店）",
      image: "https://images.unsplash.com/photo-1597227772909-a6d166b48b79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1lcmNoYW50fGVufDB8fDB8fHww",
      children: [{
        title: "碳烤鲜猪肝串（不新鲜不要钱）",
        quantity: "×2"
      }, {
        title: "五彩鲜牛肉",
        quantity: "×2"
      }, {
        title: "烤雪花牛肉粒",
        quantity: "×2"
      }],
      money: "51.81",
      totalNumber: "10"
    }]);
    const deliveryData = common_vendor.ref(["外卖配送", "到店自取"]);
    const selectShow = common_vendor.ref(false);
    const totalNumber = common_vendor.ref(0);
    publicFunction_api.login().then(async (response) => {
      if (!response) {
        new publicFunction_showtoast.showtoast().showtoast("网络错误");
      }
    });
    const onChange = async (parms) => new Promise(async (resolve) => {
      console.log(parms);
    });
    const addChange = async (parms) => new Promise(async (resolve) => {
      return parms.newNumber++;
    });
    const closeChange = async (parms) => new Promise(async (resolve) => {
      if (parms.newNumber > 1) {
        return parms.newNumber--;
      }
    });
    const selectChange = async (parms, index) => new Promise(async (resolve) => {
      currentIndex.value = index;
    });
    const editChange = async (parms) => new Promise(async (resolve) => {
      console.log(parms);
    });
    const editSelectChange = async (parms, index) => new Promise(async (resolve) => {
      newCurrentIndex.value = index;
    });
    const selectSpecificationChange = async () => new Promise(async (resolve) => {
      specification.value = !specification.value;
    });
    const addShopCardChange = async (parms) => new Promise(async (resolve) => {
      console.log(parms);
    });
    const settlementChange = async () => new Promise(async (reolve) => {
    });
    const currentIndexChange = async (index) => new Promise(async (resolve) => {
      specificationCurrentIndex.value = index;
      chosen.value = specificationObjectData.value.children[index];
    });
    const towCurrentIndexChange = async (index) => new Promise(async (resolve) => {
      towCurrentIndex.value = index;
      chosenTow.value = specificationObjectData.value.towChildren[index];
    });
    const totalMoneys = common_vendor.ref(0);
    const selectIndex = common_vendor.ref([]);
    const moreSelectChange = async (parms, index) => new Promise(async (resolve) => {
      parms.check = !parms.check;
      allFunction(parms, index, 0);
    });
    const selectAllChange = async (parms) => new Promise(async (resolve) => {
      selectShow.value = !selectShow.value;
      totalMoneys.value = 0;
      selectIndex.value = [];
      for (let k in shoppingCartData.value) {
        allFunction({}, k, 1);
      }
    });
    const allFunction = async (parms, index, type) => new Promise(async (resolve) => {
      const anyObject = shoppingCartData.value[index];
      const values = anyObject.check = true;
      if (type == 0) {
        if (values == true) {
          selectIndex.value.push(shoppingCartData.value[index]);
          totalNumber.value = selectIndex.value.length;
          totalMoneys.value += Number(anyObject.money);
        } else {
          selectIndex.value.splice(0, 1);
          totalNumber.value = selectIndex.value.length;
          totalMoneys.value -= Number(anyObject.money);
        }
      } else {
        if (selectShow.value == true) {
          selectIndex.value.push(shoppingCartData.value[index]);
          totalNumber.value = selectIndex.value.length;
          totalMoneys.value += Number(anyObject.money);
        } else {
          selectIndex.value = [];
          totalNumber.value = selectIndex.value.length;
          anyObject.check = false;
          totalMoneys.value = 0;
        }
      }
    });
    const delectShopChange = async () => new Promise(async (resolve) => {
    });
    const settlementAllChange = async () => new Promise(async (resolve) => {
    });
    const deliverCurrentIndex = common_vendor.ref(1);
    const deliverAddressData = common_vendor.ref(true);
    const deliverChange = async (index) => new Promise(async (resolve) => {
      deliverCurrentIndex.value = index;
    });
    const addAddressChange = async () => new Promise(async (resolve) => {
    });
    const areaShow = common_vendor.ref(false);
    const columns = common_vendor.ref([["中国大陆+86", "中国香港+852", "中国澳门+853"]]);
    const selectAreaCodeChange = async () => new Promise(async (resolve) => {
      areaShow.value = !areaShow.value;
      console.log(areaShow.value);
    });
    const template = common_vendor.ref(1);
    const orderTemplate = common_vendor.ref(2);
    const salesData = common_vendor.ref([{
      name: "car",
      text: "确认收货"
    }, {
      name: "rmb-circle",
      text: "申请售后"
    }, {
      name: "more-circle",
      text: "联系商家"
    }]);
    const completedData = common_vendor.ref([{
      name: "plus-circle",
      text: "再来一单"
    }, {
      name: "file-text",
      text: "评价订单"
    }]);
    const uploadingChange = async () => new Promise(async (resolve) => {
      common_vendor.index.chooseImage({
        sourceType: ["album", "camera"],
        success: (chooseImageRes) => {
          const tempFilePaths = chooseImageRes.tempFilePaths;
          common_vendor.index.uploadFile({
            url: "https://www.example.com/upload",
            //仅为示例，非真实的接口地址
            filePath: tempFilePaths[0],
            method: "POST",
            name: "file",
            formData: {
              "user": "test"
            },
            success: (uploadFileRes) => {
              console.log(uploadFileRes.data);
            }
          });
        }
      });
    });
    const heartData = common_vendor.ref(["不满意", "满意"]);
    const currentindexHeart = common_vendor.ref(1);
    const selectChangeHeart = async (parms, index) => new Promise(async (resolve) => {
      currentindexHeart.value = index;
    });
    const statifyData = common_vendor.ref(["礼貌热情", "货品完好", "快速准时", "风雨无阻", "仪表整洁", "穿戴工服", "写评论"]);
    const statifyCurrentIndex = common_vendor.ref(0);
    const statifyChange = async (parms, index) => new Promise(async (resolve) => {
      statifyCurrentIndex.value = index;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onChange),
        b: common_vendor.p({
          parms: toolData.value,
          size: 28
        }),
        c: common_vendor.o(closeChange),
        d: common_vendor.o(addChange),
        e: common_vendor.p({
          parms: shopCardData.value
        }),
        f: common_vendor.p({
          orderData: orderData.value
        }),
        g: common_vendor.p({
          addressData: addressData.value
        }),
        h: common_vendor.p({
          shopList: shopList.value
        }),
        i: common_vendor.p({
          editOrderData: editOrderData.value
        }),
        j: common_vendor.o(editChange),
        k: common_vendor.o(selectChange),
        l: common_vendor.p({
          currentIndex: currentIndex.value,
          addressData: addressSelectData.value,
          fontSize: "20"
        }),
        m: common_vendor.o(editSelectChange),
        n: common_vendor.p({
          newCurrentIndex: newCurrentIndex.value,
          editAddress: editAddressData.value
        }),
        o: common_vendor.p({
          shopListData: shopListData.value
        }),
        p: common_vendor.o(selectSpecificationChange),
        q: common_vendor.p({
          color: "white",
          name: "plus-circle",
          size: "10"
        }),
        r: common_vendor.o(towCurrentIndexChange),
        s: common_vendor.o(addShopCardChange),
        t: common_vendor.o(currentIndexChange),
        v: common_vendor.o(settlementChange),
        w: common_vendor.o(selectSpecificationChange),
        x: common_vendor.p({
          chosenTow: chosenTow.value,
          chosen: chosen.value,
          towCurrentIndex: towCurrentIndex.value,
          specificationCurrentIndex: specificationCurrentIndex.value,
          selectPopup: specification.value,
          specificationData: specificationObjectData.value
        }),
        y: common_vendor.p({
          commentData: commentsData.value,
          count: 5,
          value: 5
        }),
        z: common_vendor.o(moreSelectChange),
        A: common_vendor.p({
          shoppingCartData: shoppingCartData.value
        }),
        B: common_vendor.o(settlementAllChange),
        C: common_vendor.o(delectShopChange),
        D: common_vendor.o(selectAllChange),
        E: common_vendor.p({
          totalNumber: totalNumber.value,
          totalMoneys: totalMoneys.value,
          selectShow: selectShow.value
        }),
        F: common_vendor.o(selectAreaCodeChange),
        G: common_vendor.o(addAddressChange),
        H: common_vendor.o(deliverChange),
        I: common_vendor.p({
          deliverAddressData: deliverAddressData.value,
          deliverCurrentIndex: deliverCurrentIndex.value,
          deliveryData: deliveryData.value
        }),
        J: common_vendor.o(($event) => areaShow.value = !areaShow.value),
        K: common_vendor.p({
          show: areaShow.value,
          title: "区号选择",
          columns: columns.value
        }),
        L: common_vendor.p({
          template: template.value
        }),
        M: common_vendor.p({
          completedData: completedData.value,
          salesData: salesData.value,
          orderTemplate: orderTemplate.value
        }),
        N: common_vendor.o(uploadingChange),
        O: common_vendor.p({
          templateRefund: true,
          unnecessary: true
        }),
        P: common_vendor.o(uploadingChange),
        Q: common_vendor.p({
          editBackground: "3"
        }),
        R: common_vendor.o(statifyChange),
        S: common_vendor.o(selectChangeHeart),
        T: common_vendor.p({
          statifyCurrentIndex: statifyCurrentIndex.value,
          statifyData: statifyData.value,
          currentindexHeart: currentindexHeart.value,
          heartData: heartData.value
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "F:/软件项目/小程序/userShop/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
