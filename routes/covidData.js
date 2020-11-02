import express from "express";
import request from "request";

const router = express.Router();

const options = {
  url:
    "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true",
  method: "GET",
  headers: {
    Accept: "application/json",
    "Accept-Charset": "utf-8",
    "User-Agent": "my-reddit-client"
  }
};
const _EXTERNAL_URL =
  "https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true";

const _URL_TR =
  "https://api.apify.com/v2/datasets/LYeOfHQwsv7FsfdGV/items?format=json&clean=1";

const _URL_UK =
  "https://api.apify.com/v2/datasets/K1mXdufnpvr53AFk6/items?format=json&clean=1";

function countofObj(obj) {
  let result = 0;
  // obj.forEach(element => {
  //   console.log("bukk", element);
  // });
  return result;
  // for (var prop in obj) {
  //   console.log("bukii", prop);
  //   if (obj.hasOwnProperty(prop)) {
  //     // or Object.prototype.hasOwnProperty.call(obj, prop)
  //     result++;
  //   }
  // }
  // return result;
}

router.get("/country", (req, res) => {
  console.log(req.query);
  var _URL;

  if (req.query.id == "tr") {
    _URL =
      "https://api.apify.com/v2/datasets/LYeOfHQwsv7FsfdGV/items?format=json&clean=1";
  } else if (req.query.id == "uk") {
    _URL =
      "https://api.apify.com/v2/datasets/K1mXdufnpvr53AFk6/items?format=json&clean=1";
  } else if (req.query.id == "hr") {
    _URL =
      "https://api.apify.com/v2/datasets/dQxN0GCqxJ1MhgLR4/items?format=json&clean=1";
  } else {
    console.log("ERROR with user request.");
    return response.sendStatus(500); // Return back that an error occurred
  }

  request(_URL).pipe(res);
});

router.get("/", (req, res) => {
  let responseList = [];
  request(options, function(err, response, body) {
    if (err) {
      console.log("ERROR with user request.");
      return response.sendStatus(500); // Return back that an error occurred
    } else {
      console.log(response.statusCode);
      JSON.parse(body).forEach(element => {
        console.log("fdfd ", element.country + " " + element.infected);
        if (element.infected > 154000) {
          responseList.push(element);
        }
        console.log(responseList);
      });
    }
    // console.log(body);
    // return body.length();
    // res = "dssdsd";
    // res = res.concat(res2.body);
  }).pipe(res);

  // console.log(res.body);

  // console.log(body);
});

export default router;
