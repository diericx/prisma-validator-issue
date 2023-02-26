import { c as create_ssr_component } from "../../../chunks/index.js";
import { Prisma } from "@prisma/client";
Prisma.validator()({
  include: {
    days: true
  }
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation</p>`;
});
export {
  Page as default
};
