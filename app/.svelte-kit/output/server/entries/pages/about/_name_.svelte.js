import { g as getContext, c as create_ssr_component, b as subscribe, e as escape } from "../../../chunks/index-9846fa25.js";
const getStores = () => {
  const stores = getContext("__svelte__");
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
const U5Bnameu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { c } = $$props;
  const name = $page.params.name;
  if ($$props.c === void 0 && $$bindings.c && c !== void 0)
    $$bindings.c(c);
  $$unsubscribe_page();
  return `<h1>${escape(name)}</h1>
<br>
<br>
<br>
<p>${escape(c)}</p>`;
});
export { U5Bnameu5D as default, load };
