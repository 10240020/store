"use strict";
const publicFunction_requset = require("./requset.js");
const login = async () => new Promise(async (resolve) => {
  let data = new publicFunction_requset.requset().data = {
    openid: "032131",
    userName: "123a1s23da13d",
    avatar: "1213a1s3d1a3"
  };
  let path = "/api/login";
  new publicFunction_requset.requset().getRqueset(data, path).then(async (response) => {
    return resolve(response);
  });
});
exports.login = login;
