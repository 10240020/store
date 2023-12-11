"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "orderList",
  props: {
    // 数据
    orderData: Array || []
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.orderData, (s, k, i0) => {
          return {
            a: s.image,
            b: common_vendor.t(s.title),
            c: common_vendor.t(s.money),
            d: common_vendor.t(s.newmoney),
            e: common_vendor.t(s.newnumber),
            f: common_vendor.t(s.totalnumber)
          };
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-66e6d049"], ["__file", "F:/软件项目/小程序/userShop/compoments/orderList.vue"]]);
wx.createComponent(Component);
