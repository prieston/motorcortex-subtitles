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
        fontSize: "number",
        textColor: "string",
        fontFamily: "string",
        subtitles: "string",
      },
    },
  ],
};
