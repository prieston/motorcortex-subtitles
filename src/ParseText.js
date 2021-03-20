import MC from "@kissmybutton/motorcortex";
import { parseSync } from "subtitle";

export default class ParseText extends MC.API.MonoIncident {
  onGetContext() {
    this.element.style = this.attrs.attrs.css;
    try {
      this.subs = parseSync(this.attrs.animatedAttrs.text.trim());
    } catch (e) {
      console.error("Error while loading subtitles", e);
    }
  }

  getScratchValue() {
    return "";
  }
  onProgress(fraction, currentTime) {
    for (const i in this.subs) {
      const { start, end, text } = this.subs[i].data;
      if (currentTime >= start && currentTime < end) {
        this.element.innerHTML = text;
        break;
      } else {
        this.element.innerHTML = "";
      }
    }
  }
}
