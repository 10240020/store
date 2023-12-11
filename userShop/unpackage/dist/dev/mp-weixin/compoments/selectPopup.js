"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_popup2 = common_vendor.resolveComponent("u-popup");
  (_easycom_u_icon2 + _easycom_u_popup2)();
}
const _easycom_u_icon = () => "../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_popup = () => "../uni_modules/uview-plus/components/u-popup/u-popup.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_popup)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "selectPopup",
  props: {
    selectPopup: Boolean,
    specificationData: Object,
    specificationCurrentIndex: Number,
    towCurrentIndex: Number,
    chosenTow: String,
    chosen: String
  },
  emits: ["closeChange", "addShopCardChange", "settlementChange", "currentIndexChange", "towCurrentIndexChange"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const closeChange = async () => new Promise(async (resolve) => {
      emits("closeChange");
    });
    const addShopCardChange = async (parms) => new Promise(async (resolve) => {
      emits("addShopCardChange", parms);
    });
    const settlementChange = async () => new Promise(async (resolve) => {
      emits("settlementChange");
    });
    const currentIndexChange = async (index) => new Promise(async (reolve) => {
      emits("currentIndexChange", index);
    });
    const towCurrentIndexChange = async (index) => new Promise(async (resolve) => {
      emits("towCurrentIndexChange", index);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(props.specificationData.title),
        b: common_vendor.t(props.specificationData.text),
        c: common_vendor.f(props.specificationData.children, (s, k, i0) => {
          return {
            a: common_vendor.t(s),
            b: common_vendor.o(($event) => currentIndexChange(k)),
            c: common_vendor.n(props.specificationCurrentIndex == k ? "actives" : "")
          };
        }),
        d: common_vendor.t(props.specificationData.level),
        e: common_vendor.f(props.specificationData.towChildren, (s, k, i0) => {
          return {
            a: common_vendor.t(s),
            b: common_vendor.n(props.towCurrentIndex == k ? "actives" : ""),
            c: common_vendor.o(($event) => towCurrentIndexChange(k))
          };
        }),
        f: common_vendor.t(props.chosen),
        g: common_vendor.t(props.chosenTow),
        h: common_vendor.o(($event) => addShopCardChange(props.specificationData)),
        i: common_vendor.o(settlementChange),
        j: _ctx.offset
      }, _ctx.offset ? {} : {}, {
        k: common_vendor.o(closeChange),
        l: common_vendor.p({
          name: "close-circle",
          color: "white",
          size: "24"
        }),
        m: common_vendor.o(closeChange),
        n: common_vendor.p({
          mode: "center",
          customStyle: {
            margin: "0 40rpx;"
          },
          round: "10",
          show: props.selectPopup
        })
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-95b4fdc7"], ["__file", "F:/软件项目/小程序/userShop/compoments/selectPopup.vue"]]);
wx.createComponent(Component);
