"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "editOrder",
  props: {
    editOrderData: Array || []
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.editOrderData, (s, k, i0) => {
          return {
            a: common_vendor.t(s.name),
            b: common_vendor.t(s.text)
          };
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a3cd8e20"], ["__file", "F:/软件项目/小程序/userShop/compoments/editOrder.vue"]]);
wx.createComponent(Component);
