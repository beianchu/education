"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
require("../../request/request.js");
if (!Array) {
  const _easycom_u_swiper2 = common_vendor.resolveComponent("u-swiper");
  const _easycom_u_grid_item2 = common_vendor.resolveComponent("u-grid-item");
  const _easycom_u_grid2 = common_vendor.resolveComponent("u-grid");
  (_easycom_u_swiper2 + _easycom_u_grid_item2 + _easycom_u_grid2)();
}
const _easycom_u_swiper = () => "../../uni_modules/vk-uview-ui/components/u-swiper/u-swiper.js";
const _easycom_u_grid_item = () => "../../uni_modules/vk-uview-ui/components/u-grid-item/u-grid-item.js";
const _easycom_u_grid = () => "../../uni_modules/vk-uview-ui/components/u-grid/u-grid.js";
if (!Math) {
  (_easycom_u_swiper + _easycom_u_grid_item + _easycom_u_grid)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const data = common_vendor.reactive({
      list: [],
      navList: []
    });
    api_api.getSwiperData().then((res) => {
      data.list = res.message;
      console.log(res, "res");
    });
    api_api.getNavData().then((res) => {
      data.navList = res.message;
      console.log(res, "\u5BFC\u822A");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          list: _ctx.list,
          name: "item.image_src"
        }),
        b: common_vendor.f(data.navList, (item, index, i0) => {
          return {
            a: item.image_src,
            b: index,
            c: "75cdb10c-2-" + i0 + ",75cdb10c-1"
          };
        }),
        c: common_vendor.p({
          col: 4
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/86184/Desktop/\u9879\u76EE\u4F5C\u4E1A/bays/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
