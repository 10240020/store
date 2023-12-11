"use strict";
const common_vendor = require("../common/vendor.js");
class stores {
  constructor() {
    this.setStoreLocation = (parms) => new Promise(async (resolve) => {
      let newParms = {
        key: String,
        value: Object || Array
      };
      if (typeof parms == "object") {
        for (let k in parms) {
          newParms.key = k;
          newParms.value = parms;
        }
      }
      return resolve(common_vendor.index.setStorageSync(newParms.key, newParms.value));
    });
    this.getStoreLocation = (key) => new Promise(async (resolve) => {
      return resolve(common_vendor.index.getStorageSync(key));
    });
  }
}
exports.stores = stores;
