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
        fontSize: { type: "number", optional: true },
        textColor: { type: "color", optional: true },
        fontFamily: { type: "string", optional: true },
        position: {
          type: "enum",
          optional: true,
          values: ["top", "center", "bottom"],
        },
        maxWidth: { type: "number", optional: true },
        paddingTop: { type: "number", optional: true },
        paddingBottom: { type: "number", optional: true },
        subtitles: "string",
      },
    },
  ],
};
