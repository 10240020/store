"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "editAddress",
  props: {
    editAddress: Array || [],
    newCurrentIndex: Number
  },
  emits: ["editSelectChange"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const editSelectChange = async (parms, index) => new Promise(async (resolve) => {
      emits("editSelectChange", parms, index);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.editAddress, (s, k, i0) => {
          return {
            a: common_vendor.t(s.address),
            b: common_vendor.t(s.username),
            c: common_vendor.n(props.newCurrentIndex == k ? "active" : ""),
            d: common_vendor.o(($event) => editSelectChange(s, k))
          };
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-162a8302"], ["__file", "F:/软件项目/小程序/userShop/compoments/editAddress.vue"]]);
wx.createComponent(Component);
