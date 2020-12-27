import React from "react";
import { renderToString } from "react-dom/server";
import { Email } from "./containers/Email";

const title = "Пятёрочка";

console.log(
  [
    `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>`,
    title,
    `</title></head><body style="width:100%;margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">`,
    renderToString(<Email />),
    `</body></html>`,
  ].join("")
);
