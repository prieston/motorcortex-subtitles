import ParseText from "./ParseText";
import { name, version } from "../package.json";

export default {
  npm_name: name,
  version: version,
  incidents: [
    {
      exportable: ParseText,
      name: "ParseText",
      attributesValidationRules: {
        animatedAttrs: {
          type: "object",
          props: {
            text: {
              type: "string",
            },
          },
        },
        attrs: {
          type: "object",
          props: {
            css: "string",
          },
        },
      },
    },
  ],
};
