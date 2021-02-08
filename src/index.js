import SRT from "./SRT";

const pkg = require("../package.json");

export default {
  npm_name: pkg.name,
  version: pkg.version,
  incidents: [
    {
      exportable: SRT,
      name: "SRT",
    },
  ],
};
