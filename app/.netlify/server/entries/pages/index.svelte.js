var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
var import_index_9846fa25 = require("../../chunks/index-9846fa25.js");
const Header = (0, import_index_9846fa25.c)(($$result, $$props, $$bindings, slots) => {
  let name = "";
  return `<input${(0, import_index_9846fa25.a)("value", name, 0)}>

<nav><a sveltekit:prefetch${(0, import_index_9846fa25.a)("href", "about/" + name, 0)}>Home</a></nav>`;
});
const Routes = (0, import_index_9846fa25.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_9846fa25.v)(Header, "Header").$$render($$result, {}, {}, {})}`;
});
module.exports = __toCommonJS(stdin_exports);
