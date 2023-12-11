"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "settlementAll",
  props: {
    selectShow: Boolean,
    totalMoneys: Number || String,
    totalNumber: Number || String
  },
  emits: ["selectAllChange", "delectShopChange", "settlementAllChange"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const selectAllChange = async (parms) => new Promise(async (resolve) => {
      emits("selectAllChange", parms);
    });
    const delectShopChange = async () => new Promise(async (resolve) => {
      emits("delectShopChange");
    });
    const settlementAllChange = async () => new Promise(async (resolve) => {
      emits("settlementAllChange");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n(props.selectShow ? "actives" : ""),
        b: common_vendor.t(props.totalNumber),
        c: common_vendor.o(($event) => selectAllChange(props.selectShow)),
        d: common_vendor.t(props.totalMoneys),
        e: common_vendor.o(delectShopChange),
        f: common_vendor.o(settlementAllChange)
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-22738383"], ["__file", "F:/软件项目/小程序/userShop/compoments/settlementAll.vue"]]);
wx.createComponent(Component);
