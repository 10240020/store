"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  _easycom_u_icon2();
}
const _easycom_u_icon = () => "../uni_modules/uview-plus/components/u-icon/u-icon.js";
if (!Math) {
  _easycom_u_icon();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      color: "rgba(0,0,0,0.2);",
      name: "heart-fill"
    }),
    b: common_vendor.p({
      color: "#FF2E2E",
      name: "star-fill"
    }),
    c: common_vendor.p({
      name: "map"
    }),
    d: common_vendor.p({
      name: "phone"
    }),
    e: common_vendor.f(3, (s, k, i0) => {
      return {};
    }),
    f: common_vendor.f(2, (s, k, i0) => {
      return {
        a: "be2502fb-4-" + i0
      };
    }),
    g: common_vendor.p({
      name: "info-circle"
    }),
    h: common_vendor.f(3, (s, k, i0) => {
      return {
        a: "be2502fb-5-" + i0
      };
    }),
    i: common_vendor.p({
      name: "info-circle"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-be2502fb"], ["__file", "F:/软件项目/小程序/userShop/compoments/storeDescription.vue"]]);
wx.createComponent(Component);
