"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "shoppingCart",
  props: {
    shoppingCartData: Array
  },
  emits: ["moreSelectChange", "deleteShopChange", "pleaseBillChange"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const moreSelectChange = async (parms, index) => new Promise(async (resolve) => {
      emits("moreSelectChange", parms, index);
    });
    const deleteShopChange = async (parms, index) => new Promise(async (resolve) => {
      emits("deleteShopChange");
    });
    const pleaseBillChange = async (parms, index) => new Promise(async (resolve) => {
      emits("pleaseBillChange");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.shoppingCartData, (s, k, i0) => {
          return {
            a: s.image,
            b: common_vendor.t(s.title),
            c: common_vendor.n(s.check ? "actives" : ""),
            d: common_vendor.o(($event) => moreSelectChange(s, k)),
            e: common_vendor.f(s.children, (n, m, i1) => {
              return {
                a: common_vendor.t(n.title),
                b: common_vendor.t(n.quantity)
              };
            }),
            f: common_vendor.t(s.totalNumber),
            g: common_vendor.t(s.money),
            h: common_vendor.o(($event) => deleteShopChange()),
            i: common_vendor.o(($event) => pleaseBillChange())
          };
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-12e9d7f0"], ["__file", "F:/软件项目/小程序/userShop/compoments/shoppingCart.vue"]]);
wx.createComponent(Component);
