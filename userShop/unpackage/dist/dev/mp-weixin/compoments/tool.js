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
  __name: "tool",
  props: {
    // 图标渲染数据
    parms: Array,
    // 图标大小
    size: Number || String,
    // 图标颜色
    color: String
  },
  emits: ["onChange"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const onChange = async (parms) => new Promise(async (resolve) => {
      return resolve(emits("onChange", parms));
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: props.parms.length > 0 && props.parms
      }, props.parms.length > 0 && props.parms ? {
        b: common_vendor.f(props.parms, (s, k, i0) => {
          return common_vendor.e({
            a: s.logo
          }, s.logo ? {
            b: s.logo
          } : {
            c: "0f37ce4c-0-" + i0,
            d: common_vendor.p({
              name: s.icon,
              size: props.size,
              color: props.color
            })
          }, {
            e: common_vendor.t(s.name),
            f: common_vendor.o(($event) => onChange(s))
          });
        })
      } : {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f37ce4c"], ["__file", "F:/软件项目/小程序/userShop/compoments/tool.vue"]]);
wx.createComponent(Component);
