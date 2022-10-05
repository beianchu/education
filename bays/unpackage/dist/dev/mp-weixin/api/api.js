"use strict";
var request_request = require("../request/request.js");
const getSwiperData = () => {
  return request_request.request("/home/swiperdata").then((res) => res, (err) => err);
};
const getNavData = () => {
  return request_request.request("/home/catitems").then((res) => res, (err) => err);
};
const getFolr = () => {
  return request_request.request("/home/floordata").then((res) => res, (err) => err);
};
const getCatelist = () => {
  return request_request.request("/categories").then((res) => res, (err) => err);
};
const getSearchList = () => {
  return request_request.request("/goods/search").then((res) => res, (err) => err);
};
const getSearesList = (id) => {
  return request_request.request(`/goods/qsearch?query=${id}`).then((res) => res, (err) => err);
};
const getIndexlist = (id) => {
  return request_request.request(`/goods/detail?goods_id=${id}`).then((err) => err);
};
exports.getCatelist = getCatelist;
exports.getFolr = getFolr;
exports.getIndexlist = getIndexlist;
exports.getNavData = getNavData;
exports.getSearchList = getSearchList;
exports.getSearesList = getSearesList;
exports.getSwiperData = getSwiperData;
