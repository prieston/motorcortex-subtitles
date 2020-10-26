import MC from "@kissmybutton/motorcortex";

export default class SRT extends MC.API.MonoIncident {
  onGetContext() {
    this.element.innerHTML = "";
    this.subs = this.attrs.animatedAttrs.text
      .trim()
      .split(/\n\n/)
      .map((subtitle) => {
        const splitted = subtitle.split("\n");
        const index = Number(splitted[0]);

        const time = splitted[1].trim();
        const startTime = time.split("-->")[0];
        const endTime = time.split("-->")[1];

        splitted.splice(0, 2);
        const text = splitted.join(" ").trim();
      });
  }

  getScratchValue() {
    return "";
  }
  onProgress(f) {}
}
