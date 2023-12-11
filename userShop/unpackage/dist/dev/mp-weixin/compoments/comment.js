"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_u_rate2 = common_vendor.resolveComponent("u-rate");
  _easycom_u_rate2();
}
const _easycom_u_rate = () => "../uni_modules/uview-plus/components/u-rate/u-rate.js";
if (!Math) {
  _easycom_u_rate();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "comment",
  props: {
    commentData: Array,
    count: Number,
    value: Number
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.commentData, (s, k, i0) => {
          return {
            a: s.avatar,
            b: common_vendor.t(s.nickname),
            c: common_vendor.t(s.time),
            d: "5626183d-0-" + i0,
            e: common_vendor.t(s.commentText),
            f: common_vendor.t(s.textarea),
            g: common_vendor.f(s.children, (n, m, i1) => {
              return {
                a: n
              };
            }),
            h: common_vendor.t(s.shopText)
          };
        }),
        b: common_vendor.o(($event) => props.value = $event),
        c: common_vendor.p({
          count: props.count,
          ["active-color"]: "#1FADF6",
          size: "13",
          modelValue: props.value
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5626183d"], ["__file", "F:/软件项目/小程序/userShop/compoments/comment.vue"]]);
wx.createComponent(Component);
