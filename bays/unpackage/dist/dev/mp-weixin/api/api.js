"use strict";
var request_request = require("../request/request.js");
const getSwiperData = () => {
  return request_request.request("/home/swiperdata").then((res) => res, (err) => err);
};
const getNavData = () => {
  return request_request.request("/home/catitems").then((res) => res, (err) => err);
};
exports.getNavData = getNavData;
exports.getSwiperData = getSwiperData;
