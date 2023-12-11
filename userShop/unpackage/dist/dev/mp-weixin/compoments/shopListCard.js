"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "shopListCard",
  props: {
    shopListData: Array || []
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.shopListData, (s, k, i0) => {
          return {
            a: s.image,
            b: common_vendor.t(s.title),
            c: common_vendor.t(s.score),
            d: common_vendor.f(s.children, (l, j, i1) => {
              return {
                a: common_vendor.t(l)
              };
            }),
            e: common_vendor.f(s.childrenShop, (n, m, i1) => {
              return {
                a: n.image,
                b: common_vendor.t(n.title)
              };
            }),
            f: common_vendor.t(s.money),
            g: common_vendor.t(s.originMoney)
          };
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c540a01b"], ["__file", "F:/软件项目/小程序/userShop/compoments/shopListCard.vue"]]);
wx.createComponent(Component);
