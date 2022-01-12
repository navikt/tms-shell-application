import { getEnvironment } from "./environment"

const MIN_SIDE_URL = {
  local: "http://localhost:7100/tms-min-side/bundle.js",
  development: "https://person.dev.nav.no/tms-min-side/bundle.js",
  production: "https://person.nav.no/tms-min-side/bundle.js",
};

export const minSideUrl = MIN_SIDE_URL[getEnvironment()];
