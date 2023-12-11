"use strict";
const common_vendor = require("../common/vendor.js");
class showtoast {
  constructor() {
    this.showtoast = (parms) => new Promise(async (resolve) => {
      common_vendor.index.showToast({
        title: parms,
        icon: "none"
      });
    });
  }
}
exports.showtoast = showtoast;
