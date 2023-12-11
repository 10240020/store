"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "appealStatus",
  props: {
    editBackground: Number || String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(props.editBackground == 1 ? "bgcolor" : props.editBackground == 2 ? "gncolor" : "rdcolor")
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f4f6d04a"], ["__file", "F:/软件项目/小程序/userShop/compoments/appealStatus.vue"]]);
wx.createComponent(Component);
