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
  __name: "certificate",
  props: {
    uploadingData: Array
  },
  emits: ["uploadingChange"],
  setup(__props, { emit: emits }) {
    const uploadingChange = async () => new Promise(async (resolve) => {
      emits("uploadingChange");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(3, (s, k, i0) => {
          return {
            a: "7b4fc896-0-" + i0
          };
        }),
        b: common_vendor.p({
          name: "photo",
          size: "30"
        }),
        c: common_vendor.o(uploadingChange)
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7b4fc896"], ["__file", "F:/软件项目/小程序/userShop/compoments/certificate.vue"]]);
wx.createComponent(Component);
