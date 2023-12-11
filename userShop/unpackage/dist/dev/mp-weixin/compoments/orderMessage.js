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
  __name: "orderMessage",
  props: {
    template: Number || String
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: props.template == 1
      }, props.template == 1 ? {
        b: common_vendor.p({
          name: "bell-fill"
        })
      } : {}, {
        c: props.template == 2
      }, props.template == 2 ? {} : {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-51881820"], ["__file", "F:/软件项目/小程序/userShop/compoments/orderMessage.vue"]]);
wx.createComponent(Component);
