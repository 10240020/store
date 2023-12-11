"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "shopCard",
  props: {
    // 卡片数据
    parms: Array || []
  },
  emits: ["addChange", "closeChange"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const addChange = async (parms) => new Promise(async (resolve) => {
      emits("addChange", parms);
    });
    const closeChange = async (parms) => new Promise(async (resolve) => {
      if (parms.newNumber > 1) {
        emits("closeChange", parms);
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.parms, (s, k, i0) => {
          return {
            a: s.image,
            b: common_vendor.t(s.title),
            c: common_vendor.t(s.number),
            d: common_vendor.t(s.money),
            e: common_vendor.t(s.originMoney),
            f: common_vendor.o(($event) => closeChange(s)),
            g: s.newNumber,
            h: common_vendor.o(($event) => s.newNumber = $event.detail.value),
            i: common_vendor.o(($event) => addChange(s))
          };
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9ca4d4ce"], ["__file", "F:/软件项目/小程序/userShop/compoments/shopCard.vue"]]);
wx.createComponent(Component);
