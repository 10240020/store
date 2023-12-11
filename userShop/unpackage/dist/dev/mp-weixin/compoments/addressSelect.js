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
  __name: "addressSelect",
  props: {
    addressData: Array || [],
    fontSize: Number || String,
    radiovalue1: Boolean,
    currentIndex: Number
  },
  emits: ["selectChange", "editChange"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const selectChange = async (parms, index) => new Promise(async (resolve) => {
      emits("selectChange", parms, index);
    });
    const editChange = async (parms) => new Promise(async (resolve) => {
      emits("editChange", parms);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.addressData, (s, k, i0) => {
          return common_vendor.e({
            a: common_vendor.n(props.currentIndex == k ? "actives" : ""),
            b: s.disabled
          }, s.disabled ? {
            c: common_vendor.t(s.disabled)
          } : {}, {
            d: common_vendor.t(s.title)
          }, props.image ? {} : {
            e: "041aa29a-0-" + i0,
            f: common_vendor.p({
              name: "edit-pen",
              size: props.fontSize
            })
          }, {
            g: common_vendor.o(($event) => editChange(s)),
            h: common_vendor.t(s.username),
            i: common_vendor.o(($event) => selectChange(s, k))
          });
        }),
        b: props.image
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-041aa29a"], ["__file", "F:/软件项目/小程序/userShop/compoments/addressSelect.vue"]]);
wx.createComponent(Component);
