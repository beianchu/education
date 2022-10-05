"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  setup() {
    const data = common_vendor.reactive({
      list: []
    });
    const valChange = (e) => {
      console.log("\u5F53\u524D\u503C\u4E3A: " + e.value);
    };
    return __spreadValues({ valChange }, common_vendor.toRefs(data));
  },
  onLoad() {
    common_vendor.index.getStorage({
      key: "catsList",
      success: (res) => {
        this.list = res.data;
        console.log(res.data, this.list);
      }
    });
  }
};
if (!Array) {
  const _easycom_u_number_box2 = common_vendor.resolveComponent("u-number-box");
  _easycom_u_number_box2();
}
const _easycom_u_number_box = () => "../../uni_modules/vk-uview-ui/components/u-number-box/u-number-box.js";
if (!Math) {
  _easycom_u_number_box();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($setup.valChange),
    b: common_vendor.o(($event) => _ctx.value = $event),
    c: common_vendor.p({
      modelValue: _ctx.value
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/86184/Desktop/\u9879\u76EE\u4F5C\u4E1A/bays/pages/carsList/carsList.vue"]]);
wx.createPage(MiniProgramPage);
