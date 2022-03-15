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
  default: () => U5Bnameu5D,
  load: () => load
});
var import_index_9846fa25 = require("../../../chunks/index-9846fa25.js");
const getStores = () => {
  const stores = (0, import_index_9846fa25.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
async function load({ params, fetch, session, stuff }) {
  const url = `/emoji`;
  const response = await fetch(url);
  return {
    status: response.status,
    props: {
      c: await response.json().then((data) => {
        return data.emoji;
      })
    }
  };
}
const U5Bnameu5D = (0, import_index_9846fa25.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_9846fa25.b)(page, (value) => $page = value);
  let { c } = $$props;
  const name = $page.params.name;
  if ($$props.c === void 0 && $$bindings.c && c !== void 0)
    $$bindings.c(c);
  $$unsubscribe_page();
  return `<h1>${(0, import_index_9846fa25.e)(name)}</h1>
<br>
<br>
<br>
<p>${(0, import_index_9846fa25.e)(c)}</p>`;
});
module.exports = __toCommonJS(stdin_exports);
