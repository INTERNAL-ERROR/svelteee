import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../chunks/index-9846fa25.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "";
  return `<input${add_attribute("value", name, 0)}>

<nav><a sveltekit:prefetch${add_attribute("href", "about/" + name, 0)}>Home</a></nav>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}`;
});
export { Routes as default };
