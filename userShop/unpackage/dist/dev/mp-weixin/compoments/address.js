"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "address",
  props: {
    addressData: Array || []
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.addressData, (s, k, i0) => {
          return {
            a: common_vendor.t(s.name),
            b: common_vendor.t(s.text)
          };
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-115ee0e6"], ["__file", "F:/软件项目/小程序/userShop/compoments/address.vue"]]);
wx.createComponent(Component);
