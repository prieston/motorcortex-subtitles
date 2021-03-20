import Player from "@kissmybutton/motorcortex-player";
import { HTMLClip, loadPlugin } from "@kissmybutton/motorcortex/";
import mySubsTextFile from "./subs.srt.js";
import SubtitlesDefinition from "../src/";
const Subtitles = loadPlugin(SubtitlesDefinition);

const clip = new HTMLClip({
  html: `
    <div class="container">
      <div id="subs-container"></div>
    </div>`,
  css: `
  .container{
    width:100%;
    height:100%;
    position:relative;
    background:black;
  }
  #subs-container{
    text-align:center;
    position:absolute;
    bottom:80px;
    left:50%;
    transform:translateX(-50%);
  }
`,
  host: document.getElementById("clip"),
  containerParams: {
    width: "100%",
    height: "100%",
  },
});

const subtitle = new Subtitles.ParseText(
  {
    attrs: {
      css: `color:white;font-size:20px`,
    },
    animatedAttrs: {
      text: mySubsTextFile,
    },
  },
  { duration: 23000, selector: "#subs-container" }
);

clip.addIncident(subtitle, 0);
new Player({
  scaleToFit: true,
  clip: clip,
  theme: "mc-blue",
  preview: false,
  pointerEvents: false,
});
