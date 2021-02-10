import SRT from "./SRT";

import {name,version}  from '../package.json'

export default {
  npm_name: name,
  version: version,
  incidents: [
    {
      exportable: SRT,
      name: "SRT",
    },
  ],
};
