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
  __name: "delivery",
  props: {
    deliveryData: Array,
    deliverCurrentIndex: Number,
    deliverAddressData: Boolean
  },
  emits: ["deliverChange", "addAddressChange", "selectAreaCodeChange"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const deliverChange = async (parms, index) => new Promise(async (resolve) => {
      emits("deliverChange", index);
    });
    const addAddressChange = async () => new Promise(async (resolve) => {
      emits("addAddressChange");
    });
    const selectAreaCodeChange = async () => new Promise(async (resolve) => {
      emits("selectAreaCodeChange");
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(props.deliveryData, (s, k, i0) => {
          return {
            a: common_vendor.t(s),
            b: common_vendor.o(($event) => deliverChange(s, k)),
            c: common_vendor.n(props.deliverCurrentIndex == k ? "select-actives" : "")
          };
        }),
        b: props.deliverCurrentIndex == 0
      }, props.deliverCurrentIndex == 0 ? common_vendor.e({
        c: props.deliverAddressData == false
      }, props.deliverAddressData == false ? {} : {
        d: common_vendor.p({
          name: "plus-circle",
          color: "#1FADF6",
          size: "16"
        })
      }, {
        e: common_vendor.o(addAddressChange)
      }) : {}, {
        f: props.deliverCurrentIndex == 0
      }, props.deliverCurrentIndex == 0 ? common_vendor.e({
        g: props.deliverAddressData == true
      }, props.deliverAddressData == true ? {} : {}) : {}, {
        h: props.deliverCurrentIndex == 1 && props.deliverAddressData == true
      }, props.deliverCurrentIndex == 1 && props.deliverAddressData == true ? {
        i: common_vendor.p({
          size: "8",
          name: "arrow-down-fill"
        }),
        j: common_vendor.o(selectAreaCodeChange),
        k: common_vendor.p({
          name: "edit-pen"
        })
      } : {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d8699d47"], ["__file", "F:/软件项目/小程序/userShop/compoments/delivery.vue"]]);
wx.createComponent(Component);
