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
  __name: "refund",
  props: {
    unnecessary: Boolean,
    templateRefund: Boolean
  },
  emits: ["uploadingChange"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const textChange = common_vendor.ref("");
    const textNumber = common_vendor.ref(0);
    common_vendor.watch(textChange, (originText) => {
      textNumber.value = originText.split("").length;
    });
    const uploadingChange = async () => new Promise(async (resolve) => {
      emits("uploadingChange");
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: props.unnecessary
      }, props.unnecessary ? common_vendor.e({
        b: props.selectContent
      }, props.selectContent ? {} : {}) : {}, {
        c: props.templateRefund
      }, props.templateRefund ? {
        d: textChange.value,
        e: common_vendor.o(($event) => textChange.value = $event.detail.value),
        f: common_vendor.t(textNumber.value)
      } : {}, {
        g: props.unnecessary
      }, props.unnecessary ? {
        h: common_vendor.p({
          name: "photo",
          size: "24"
        }),
        i: common_vendor.o(uploadingChange)
      } : {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8823ad91"], ["__file", "F:/软件项目/小程序/userShop/compoments/refund.vue"]]);
wx.createComponent(Component);
