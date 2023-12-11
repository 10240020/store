"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_checkbox2 = common_vendor.resolveComponent("u-checkbox");
  const _easycom_u_checkbox_group2 = common_vendor.resolveComponent("u-checkbox-group");
  const _easycom_u_rate2 = common_vendor.resolveComponent("u-rate");
  (_easycom_u_icon2 + _easycom_u_checkbox2 + _easycom_u_checkbox_group2 + _easycom_u_rate2)();
}
const _easycom_u_icon = () => "../uni_modules/uview-plus/components/u-icon/u-icon.js";
const _easycom_u_checkbox = () => "../uni_modules/uview-plus/components/u-checkbox/u-checkbox.js";
const _easycom_u_checkbox_group = () => "../uni_modules/uview-plus/components/u-checkbox-group/u-checkbox-group.js";
const _easycom_u_rate = () => "../uni_modules/uview-plus/components/u-rate/u-rate.js";
if (!Math) {
  (_easycom_u_icon + _easycom_u_checkbox + _easycom_u_checkbox_group + _easycom_u_rate)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "multiple",
  props: {
    heartData: Array,
    currentindexHeart: Number,
    statifyData: Array,
    statifyCurrentIndex: Number
  },
  emits: ["selectChangeHeart", "statifyChange"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const checkboxList1 = common_vendor.ref([{
      name: "匿名提交",
      disabled: false
    }]);
    const checkboxValue1 = common_vendor.ref("");
    const selectChangeHeart = async (parms, index) => new Promise(async (resolve) => {
      emits("selectChangeHeart", parms, index);
    });
    const statifyChange = async (parms, index) => new Promise(async (resolve) => {
      emits("statifyChange", parms, index);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(props.heartData, (s, k, i0) => {
          return {
            a: "116fcbfa-0-" + i0,
            b: common_vendor.t(s),
            c: common_vendor.n(props.currentindexHeart == k ? "activebg" : ""),
            d: common_vendor.o(($event) => selectChangeHeart(s, k))
          };
        }),
        b: common_vendor.p({
          name: "heart",
          size: "25"
        }),
        c: props.currentindexHeart == 1
      }, props.currentindexHeart == 1 ? common_vendor.e({
        d: common_vendor.f(props.statifyData, (s, k, i0) => {
          return {
            a: common_vendor.t(s),
            b: common_vendor.n(props.statifyCurrentIndex == k ? "iconbgColors" : ""),
            c: common_vendor.o(($event) => statifyChange(s, k))
          };
        }),
        e: props.statifyCurrentIndex == props.statifyData.length - 1
      }, props.statifyCurrentIndex == props.statifyData.length - 1 ? {} : {}) : {}, {
        f: common_vendor.f(checkboxList1.value, (item, index, i0) => {
          return {
            a: index,
            b: "116fcbfa-2-" + i0 + ",116fcbfa-1",
            c: common_vendor.p({
              belSize: "12",
              shape: "circle",
              label: item.name,
              name: item.name
            })
          };
        }),
        g: common_vendor.o(_ctx.checkboxChange),
        h: common_vendor.o(($event) => checkboxValue1.value = $event),
        i: common_vendor.p({
          placement: "column",
          modelValue: checkboxValue1.value
        }),
        j: common_vendor.o(($event) => _ctx.value = $event),
        k: common_vendor.p({
          count: _ctx.count,
          size: "24",
          activeColor: "#1FADF6",
          modelValue: _ctx.value
        }),
        l: common_vendor.p({
          size: "24",
          name: "photo"
        }),
        m: common_vendor.p({
          size: "24",
          name: "play-circle"
        })
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-116fcbfa"], ["__file", "F:/软件项目/小程序/userShop/compoments/multiple.vue"]]);
wx.createComponent(Component);
