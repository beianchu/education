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
var api_api = require("../../api/api.js");
require("../../request/request.js");
const _sfc_main = {
  setup() {
    const data = common_vendor.reactive({
      listItem: [],
      value: "",
      resList: []
    });
    api_api.getSearchList().then((res) => {
      data.listItem = res.message.goods;
      console.log(res, "\u641C\u7D22\u6570\u636E\u63A5\u53E3");
    });
    const listSearch = () => {
      api_api.getSearesList(data.value).then((res) => {
        console.log(res, "hhhhhh");
        data.resList = res.message;
      });
    };
    const resout = () => {
      data.value = "";
      data.resList = [];
    };
    const ToIndex = (item) => {
      console.log(item);
      common_vendor.index.navigateTo({
        url: `/pages/shopIndex/shopIndex?id=${item.goods_id}`
      });
    };
    return __spreadValues({
      ToIndex,
      listSearch,
      resout
    }, common_vendor.toRefs(data));
  }
};
if (!Array) {
  const _easycom_u_input2 = common_vendor.resolveComponent("u-input");
  const _easycom_u_button2 = common_vendor.resolveComponent("u-button");
  (_easycom_u_input2 + _easycom_u_button2)();
}
const _easycom_u_input = () => "../../uni_modules/vk-uview-ui/components/u-input/u-input.js";
const _easycom_u_button = () => "../../uni_modules/vk-uview-ui/components/u-button/u-button.js";
if (!Math) {
  (_easycom_u_input + _easycom_u_button)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($setup.listSearch),
    b: common_vendor.o(($event) => _ctx.value = $event),
    c: common_vendor.p({
      type: _ctx.type,
      border: _ctx.border,
      border: true,
      modelValue: _ctx.value
    }),
    d: _ctx.resList.length > 0,
    e: common_vendor.o($setup.resout),
    f: _ctx.resList == 0,
    g: common_vendor.f(_ctx.resList, (item, index, i0) => {
      return {
        a: common_vendor.t(item.goods_name),
        b: index,
        c: common_vendor.o(($event) => $setup.ToIndex(item), index)
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/86184/Desktop/\u9879\u76EE\u4F5C\u4E1A/bays/pages/searchPage/searchPage.vue"]]);
wx.createPage(MiniProgramPage);
