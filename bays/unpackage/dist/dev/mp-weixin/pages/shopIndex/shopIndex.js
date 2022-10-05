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
      loctionList: [],
      list: [],
      obj: {},
      options: [
        {
          icon: "headphones",
          text: "\u5BA2\u670D"
        },
        {
          icon: "shop",
          text: "\u5E97\u94FA",
          info: 2,
          infoBackgroundColor: "#007aff",
          infoColor: "red"
        },
        {
          icon: "cart",
          text: "\u8D2D\u7269\u8F66",
          info: 2
        }
      ],
      buttonGroup: [
        {
          text: "\u52A0\u5165\u8D2D\u7269\u8F66",
          backgroundColor: "#ff0000",
          color: "#fff"
        },
        {
          text: "\u7ACB\u5373\u8D2D\u4E70",
          backgroundColor: "#ffa200",
          color: "#fff"
        }
      ]
    });
    const onClick = (e) => {
      common_vendor.index.navigateTo({
        url: "/pages/carsList/carsList"
      });
      console.log(1);
    };
    const getLoctionLsit = () => {
      common_vendor.index.getStorage({
        key: "catsList",
        success: function(res) {
          data.loctionList = res.data;
          console.log(res.data, "\u83B7\u53D6\u672C\u5730\u6570\u636E\xB7");
        }
      });
    };
    const getBenList = () => {
      common_vendor.index.setStorage({
        key: "catsList",
        data: data.loctionList,
        success: function() {
          console.log("success");
        }
      });
    };
    const buttonClick = (e) => {
      let list = {
        name: data.obj.goods_name,
        price: data.obj.goods_price,
        num: 1,
        id: data.obj.cat_one_id,
        flag: false
      };
      getLoctionLsit();
      const itemList = data.loctionList.find((item) => item.id == data.obj.cat_one_id);
      if (itemList) {
        itemList.num++;
        getBenList();
      } else {
        data.loctionList.push(list);
        getBenList();
      }
    };
    return __spreadValues({ getBenList, getLoctionLsit, onClick, buttonClick }, common_vendor.toRefs(data));
  },
  onLoad(options) {
    api_api.getIndexlist(options.id).then((res) => {
      this.obj = res.message;
      console.log(res, "\u8BE6\u60C5\u6570\u636E\u63A5\u53E3");
    });
    console.log(options.id, "\u5546\u54C1\u8BE6\u60C5id");
  }
};
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_u_parse2 = common_vendor.resolveComponent("u-parse");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  (_easycom_u_swiper2 + _easycom_u_parse2 + _easycom_uni_goods_nav2)();
}
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
const _easycom_u_parse = () => "../../uni_modules/vk-uview-ui/components/u-parse/u-parse.js";
const _easycom_uni_goods_nav = () => "../../uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
if (!Math) {
  (_easycom_u_swiper + _easycom_u_parse + _easycom_uni_goods_nav)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      list: _ctx.obj.pics,
      name: "pics_mid_url",
      height: "500"
    }),
    b: common_vendor.t(_ctx.obj.goods_price),
    c: common_vendor.t(_ctx.obj.goods_name),
    d: common_vendor.p({
      html: _ctx.obj.goods_introduce
    }),
    e: common_vendor.o($setup.onClick),
    f: common_vendor.o($setup.buttonClick),
    g: common_vendor.p({
      fill: true,
      options: _ctx.options,
      buttonGroup: _ctx.buttonGroup
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/86184/Desktop/\u9879\u76EE\u4F5C\u4E1A/bays/pages/shopIndex/shopIndex.vue"]]);
wx.createPage(MiniProgramPage);
