"use strict";
var common_vendor = require("../common/vendor.js");
var api_api = require("../api/api.js");
require("../request/request.js");
if (!Array) {
  const _easycom_u_col2 = common_vendor.resolveComponent("u-col");
  const _easycom_u_grid_item2 = common_vendor.resolveComponent("u-grid-item");
  const _easycom_u_grid2 = common_vendor.resolveComponent("u-grid");
  const _easycom_u_row2 = common_vendor.resolveComponent("u-row");
  (_easycom_u_col2 + _easycom_u_grid_item2 + _easycom_u_grid2 + _easycom_u_row2)();
}
const _easycom_u_col = () => "../uni_modules/vk-uview-ui/components/u-col/u-col.js";
const _easycom_u_grid_item = () => "../uni_modules/vk-uview-ui/components/u-grid-item/u-grid-item.js";
const _easycom_u_grid = () => "../uni_modules/vk-uview-ui/components/u-grid/u-grid.js";
const _easycom_u_row = () => "../uni_modules/vk-uview-ui/components/u-row/u-row.js";
if (!Math) {
  (_easycom_u_col + _easycom_u_grid_item + _easycom_u_grid + _easycom_u_row)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "foolr",
  setup(__props) {
    const data = common_vendor.reactive({
      list: []
    });
    api_api.getFolr().then((res) => {
      data.list = res.message;
      console.log(res, "\u697C\u5C42");
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(data.list, (item, index, i0) => {
          return {
            a: item.floor_title.image_src,
            b: common_vendor.f(item.product_list, (obj, i, i1) => {
              return {
                a: obj.image_src,
                b: i,
                c: i == 0
              };
            }),
            c: "30c30b1c-1-" + i0 + "," + ("30c30b1c-0-" + i0),
            d: common_vendor.f(item.product_list, (obj, i, i1) => {
              return {
                a: obj.image_src,
                b: i,
                c: i != 0,
                d: "30c30b1c-4-" + i0 + "-" + i1 + "," + ("30c30b1c-3-" + i0)
              };
            }),
            e: "30c30b1c-3-" + i0 + "," + ("30c30b1c-2-" + i0),
            f: "30c30b1c-2-" + i0 + "," + ("30c30b1c-0-" + i0),
            g: "30c30b1c-0-" + i0,
            h: index
          };
        }),
        b: common_vendor.p({
          span: "4"
        }),
        c: common_vendor.p({
          col: 2,
          border: "false",
          ["custom-style"]: "{padding:'0 0'}"
        }),
        d: common_vendor.p({
          span: "8"
        }),
        e: common_vendor.p({
          gutter: "16"
        })
      };
    };
  }
});
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-30c30b1c"], ["__file", "C:/Users/86184/Desktop/\u9879\u76EE\u4F5C\u4E1A/bays/component/foolr.vue"]]);
wx.createComponent(Component);
