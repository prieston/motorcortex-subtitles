import MC from "@kissmybutton/motorcortex";
import { parseSync } from "subtitle";

/*INNER PLUGIN*/
class ParseTextIncident extends MC.Effect {
  getScratchValue() {
    return "";
  }
  onProgress(fraction, currentTime) {
    for (const i in this.targetValue) {
      const { start, end, text } = this.targetValue[i].data;
      if (currentTime >= start && currentTime < end) {
        this.element.innerHTML = text;
        break;
      } else {
        this.element.innerHTML = "";
      }
    }
  }
}

const parseTextDefinition = {
  npm_name: "parse-text-definition",
  version: "1.0.0",
  incidents: [
    {
      exportable: ParseTextIncident,
      name: "ParseTextIncident",
      attributesValidationRules: {
        animatedAttrs: {
          type: "object",
          props: {
            subsArray: {
              type: "array",
            },
          },
        },
      },
    },
  ],
};

const ParseTextPlugin = MC.loadPlugin(parseTextDefinition);

/*EXPORTED CLIP*/
export default class ParseText extends MC.HTMLClip {
  get html() {
    return `
    <div class="container">
      <div id="subs-container"></div>
    </div>
    `;
  }

  get css() {
    let position = "center";

    if (this.attrs.position == "top") {
      position = "flex-start";
    } else if (this.attrs.position == "bottom") {
      position = "flex-end";
    }

    return `
    .container {
      display:flex;
      justify-content:center;
      align-items:${position};
      font-size:${this.attrs.fontSize || 12}px;
      color:${this.attrs.textColor || "white"};
      font-family: ${this.attrs.fontFamily || "'Ubuntu'"};
      width: 100%;
      height: 100%;

    }
    #subs-container{
      max-width:${this.attrs.maxWidth ? this.attrs.maxWidth + "px" : "100%"};
      text-align:center;
      padding-top:${this.attrs.paddingTop || 0}px;
      padding-bottom:${this.attrs.paddingBottom || 0}px;
    }
  `;
  }

  buildTree() {
    try {
      const subs = parseSync(this.attrs.subtitles);
      const subtitle = new ParseTextPlugin.ParseTextIncident(
        {
          animatedAttrs: {
            subsArray: subs,
          },
        },
        {
          duration: subs[subs.length - 1].data.end,
          selector: "#subs-container",
        }
      );
      this.addIncident(subtitle, 0);
    } catch (e) {
      console.error("Error while loading subtitles", e);
    }
  }
}
