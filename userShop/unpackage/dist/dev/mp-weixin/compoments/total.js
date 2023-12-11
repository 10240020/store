"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "total",
  props: {
    shopList: Array || []
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.shopList, (s, k, i0) => {
          return common_vendor.e({
            a: k < 2
          }, k < 2 ? {
            b: common_vendor.t(s.name)
          } : {
            c: common_vendor.t(s.name)
          }, {
            d: common_vendor.t(s.text)
          });
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-192c7eae"], ["__file", "F:/软件项目/小程序/userShop/compoments/total.vue"]]);
wx.createComponent(Component);
