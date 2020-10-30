import MC from "@kissmybutton/motorcortex";

export default class SRT extends MC.API.MonoIncident {
  onGetContext() {
    this.element.style = this.attrs.attrs.css;
    this.subs = this.attrs.animatedAttrs.text
      .trim()
      .split(/\n\n/)
      .map((subtitle) => {
        const splitted = subtitle.split("\n");
        const index = Number(splitted[0]);

        const time = splitted[1].trim();
        const start = time.split("-->")[0];
        const end = time.split("-->")[1];

        const startTime =
          start.split(":")[0] * 3600 +
          start.split(":")[1] * 60 +
          Number(start.split(":")[2].replace(",", ".")) * 1000;
        const endTime =
          end.split(":")[0] * 3600 +
          end.split(":")[1] * 60 +
          Number(end.split(":")[2].replace(",", ".")) * 1000;

        const text = splitted.slice(2, splitted.length).join(" ").trim();

        return {
          index,
          startTime,
          endTime,
          text,
        };
      });
  }

  getScratchValue() {
    return "";
  }
  onProgress(fraction, currentTime) {
    if (fraction == 0) {
      return false;
    }
    for (const i in this.subs) {
      const { startTime, endTime, text } = this.subs[i];
      if (currentTime >= startTime && currentTime < endTime) {
        this.element.innerHTML = text;
        break;
      } else {
        this.element.innerHTML = "";
      }
    }
  }
}
