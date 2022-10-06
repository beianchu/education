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
      list: [],
      value: "",
      allOK: false
    });
    common_vendor.index.getStorage({
      key: "catsList",
      success: function(res) {
        data.list = res.data;
        console.log(data.list, "hhahaaaa");
      }
    });
    const priceNum = common_vendor.computed$1(() => {
      let pricCount = 0;
      let numNumber = 0;
      data.list.forEach((item) => {
        if (item.flag == true) {
          pricCount += item.price * item.num;
          numNumber += item.num;
        }
      });
      return { pricCount, numNumber };
    });
    const check = (item) => {
      item.flag = !item.flag;
      data.allOK = data.list.every((item2) => item2.flag == true);
    };
    const valChange = (index) => {
      if (data.list[index].num == 0) {
        common_vendor.index.showModal({
          title: "\u63D0\u793A",
          content: "\u786E\u5B9A\u8981\u79FB\u9664\u5546\u54C1\u4E48\uFF1F",
          success: function(res) {
            if (res.confirm) {
              data.list.splice(index, 1);
              console.log("\u7528\u6237\u70B9\u51FB\u786E\u5B9A");
            } else if (res.cancel) {
              data.list[index].num = 1;
              console.log("\u7528\u6237\u70B9\u51FB\u53D6\u6D88");
            }
          }
        });
      }
    };
    return __spreadValues({
      priceNum,
      check,
      checkboxChange,
      valChange
    }, common_vendor.toRefs(data));
  }
};
if (!Array) {
  const _easycom_u_checkbox2 = common_vendor.resolveComponent("u-checkbox");
  const _easycom_u_number_box2 = common_vendor.resolveComponent("u-number-box");
  (_easycom_u_checkbox2 + _easycom_u_number_box2)();
}
const _easycom_u_checkbox = () => "../../uni_modules/vk-uview-ui/components/u-checkbox/u-checkbox.js";
const _easycom_u_number_box = () => "../../uni_modules/vk-uview-ui/components/u-number-box/u-number-box.js";
if (!Math) {
  (_easycom_u_checkbox + _easycom_u_number_box)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(_ctx.list, (item, index, i0) => {
      return {
        a: common_vendor.o(($event) => $setup.check(item)),
        b: "f98d0f60-0-" + i0,
        c: common_vendor.o(($event) => item.flag = $event),
        d: common_vendor.p({
          checked: item.flag,
          modelValue: item.flag
        }),
        e: item.img.goods_small_logo,
        f: common_vendor.t(item.name),
        g: common_vendor.t(item.price),
        h: common_vendor.o(($event) => $setup.valChange(index)),
        i: "f98d0f60-1-" + i0,
        j: common_vendor.o(($event) => item.num = $event),
        k: common_vendor.p({
          modelValue: item.num
        }),
        l: index
      };
    }),
    b: common_vendor.o($setup.checkboxChange),
    c: common_vendor.o(($event) => _ctx.allOK = $event),
    d: common_vendor.p({
      modelValue: _ctx.allOK
    }),
    e: common_vendor.t($setup.priceNum.pricCount),
    f: common_vendor.t($setup.priceNum.numNumber)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/86184/Desktop/\u9879\u76EE\u4F5C\u4E1A/bays/pages/car/car.vue"]]);
wx.createPage(MiniProgramPage);
