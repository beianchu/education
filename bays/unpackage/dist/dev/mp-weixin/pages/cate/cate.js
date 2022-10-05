"use strict";
var common_vendor = require("../../common/vendor.js");
var api_api = require("../../api/api.js");
require("../../request/request.js");
if (!Array) {
  const _easycom_u_col2 = common_vendor.resolveComponent("u-col");
  const _easycom_u_icon2 = common_vendor.resolveComponent("u-icon");
  const _easycom_u_grid_item2 = common_vendor.resolveComponent("u-grid-item");
  const _easycom_u_grid2 = common_vendor.resolveComponent("u-grid");
  const _easycom_u_row2 = common_vendor.resolveComponent("u-row");
  (_easycom_u_col2 + _easycom_u_icon2 + _easycom_u_grid_item2 + _easycom_u_grid2 + _easycom_u_row2)();
}
const _easycom_u_col = () => "../../uni_modules/vk-uview-ui/components/u-col/u-col.js";
const _easycom_u_icon = () => "../../uni_modules/vk-uview-ui/components/u-icon/u-icon.js";
const _easycom_u_grid_item = () => "../../uni_modules/vk-uview-ui/components/u-grid-item/u-grid-item.js";
const _easycom_u_grid = () => "../../uni_modules/vk-uview-ui/components/u-grid/u-grid.js";
const _easycom_u_row = () => "../../uni_modules/vk-uview-ui/components/u-row/u-row.js";
if (!Math) {
  (search + _easycom_u_col + _easycom_u_icon + _easycom_u_grid_item + _easycom_u_grid + _easycom_u_row)();
}
const search = () => "../../component/searchbtn/searchbtn2.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "cate",
  setup(__props) {
    const data = common_vendor.reactive({
      tabrlist: [],
      indexId: 0
    });
    api_api.getCatelist().then((res) => {
      data.tabrlist = res.message;
      console.log(res, "c\u5C59\u5C4E\u4E3A");
    });
    const qie = (index) => {
      data.indexId = index;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(data.tabrlist, (item, index, i0) => {
          return {
            a: common_vendor.t(item.cat_name),
            b: common_vendor.n(data.indexId == index ? "active" : ""),
            c: index,
            d: common_vendor.o(($event) => qie(index), index)
          };
        }),
        b: _ctx.scrollTop,
        c: common_vendor.p({
          span: "3"
        }),
        d: common_vendor.f(data.tabrlist[data.indexId].children, (item, index, i0) => {
          return {
            a: common_vendor.t(item.cat_name),
            b: common_vendor.f(item.children, (obj, index2, i1) => {
              return {
                a: "56dc8334-6-" + i0 + "-" + i1 + "," + ("56dc8334-5-" + i0 + "-" + i1),
                b: common_vendor.p({
                  name: obj.cat_icon,
                  size: 76
                }),
                c: common_vendor.t(obj.cat_name),
                d: index2,
                e: "56dc8334-5-" + i0 + "-" + i1 + "," + ("56dc8334-4-" + i0)
              };
            }),
            c: "56dc8334-4-" + i0 + ",56dc8334-3",
            d: index
          };
        }),
        e: common_vendor.p({
          col: 3,
          border: false
        }),
        f: _ctx.scrollTop,
        g: common_vendor.p({
          span: "9"
        }),
        h: common_vendor.p({
          gutter: "16"
        })
      };
    };
  }
});
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-56dc8334"], ["__file", "C:/Users/86184/Desktop/\u9879\u76EE\u4F5C\u4E1A/bays/pages/cate/cate.vue"]]);
wx.createPage(MiniProgramPage);
