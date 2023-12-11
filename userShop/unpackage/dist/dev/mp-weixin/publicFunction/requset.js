"use strict";
const common_vendor = require("../common/vendor.js");
const publicFunction_showtoast = require("./showtoast.js");
const publicFunction_store = require("./store.js");
class requset {
  constructor() {
    this.https = "https://pinia.vuejs.org/introduction.html";
    this.httpsRequset = "";
    this.data = {};
    this.methods = "POST";
    this.pamrs = {
      url: this.https,
      data: this.data,
      method: this.methods
    };
    this.getRqueset = (pamrs, path) => new Promise(async (resolve) => {
      this.pamrs.data = pamrs;
      this.https = this.https + path;
      this.pamrs.url = this.https;
      return resolve(this.requset(this.pamrs));
    });
    this.requset = (parms) => new Promise(async (resolve) => {
      console.log(parms);
      common_vendor.index.request({
        ...parms,
        success: (res) => {
          this.data.openid && res.data.code >= 1 && res.data.code <= 200 ? new publicFunction_store.stores().setStoreLocation(res.data) : "";
          res.data.code < 0 || res.data.code > 400 && res.data.code < 500 ? new publicFunction_showtoast.showtoast().showtoast(res.data.msg) : "";
          return resolve(res.data);
        }
      });
    });
  }
}
exports.requset = requset;
