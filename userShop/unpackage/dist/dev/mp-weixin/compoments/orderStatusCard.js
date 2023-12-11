"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "orderStatusCard",
  props: {
    orderTemplate: Number,
    salesData: Array,
    completedData: Array
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: props.orderTemplate == 1
      }, props.orderTemplate == 1 ? {
        b: common_vendor.f(props.salesData, (s, k, i0) => {
          return {
            a: "ec1c25c3-0-" + i0,
            b: common_vendor.p({
              color: k == 2 ? "#1FADF6" : "",
              size: "24",
              name: s.name
            }),
            c: common_vendor.t(s.text),
            d: common_vendor.n(k == 2 ? "font-color" : "")
          };
        })
      } : {}, {
        c: props.orderTemplate == 2
      }, props.orderTemplate == 2 ? {
        d: common_vendor.p({
          name: "plus-circle",
          size: "20"
        })
      } : {}, {
        e: props.orderTemplate == 3
      }, props.orderTemplate == 3 ? {
        f: common_vendor.f(props.completedData, (s, k, i0) => {
          return {
            a: "ec1c25c3-2-" + i0,
            b: common_vendor.p({
              size: "26",
              name: s.name
            }),
            c: common_vendor.t(s.text)
          };
        })
      } : {}, {
        g: props.orderTemplate == 4
      }, props.orderTemplate == 4 ? {
        h: common_vendor.f(props.completedData, (s, k, i0) => {
          return {
            a: "ec1c25c3-3-" + i0,
            b: common_vendor.p({
              size: "26",
              name: props.orderTemplate == 4 ? s.name == "file-text" ? "more-circle" : s.name : ""
            }),
            c: common_vendor.t(props.orderTemplate == 4 ? s.text == "评价订单" ? "联系商家" : s.text : "")
          };
        })
      } : {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ec1c25c3"], ["__file", "F:/软件项目/小程序/userShop/compoments/orderStatusCard.vue"]]);
wx.createComponent(Component);
