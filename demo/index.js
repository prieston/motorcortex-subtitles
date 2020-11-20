import Player from "@kissmybutton/motorcortex-player";
import { HTMLClip, loadPlugin } from "@kissmybutton/motorcortex/";
import SubtitlesDefinition from "../src/";
const Subtitles = loadPlugin(SubtitlesDefinition);

const css = `
  .container{
  	width: 500px;
    height: 500px;
  	position:relative;
  }
  #subs-container{
    text-align:center;
    position:absolute;
    bottom:80px;
    left:50%;
    transform:translateX(-50%);
  }
`;
const html = `
<div class="container">
  <div id="subs-container"></div>
</div>`;
const host = document.getElementById("clip");

const containerParams = {
  width: "100%",
  height: "100%",
};

const clip = new HTMLClip({
  css,
  html,
  host,
  containerParams,
});
const subtitle = new Subtitles.SRT(
  {
    attrs: {
      css: `color:white;font-size:20px`,
    },
    animatedAttrs: {
      text: `
      	1
      	00:00:00,000 --> 00:00:05,000
      	These are some captions

      	2
      	00:00:05,000 --> 00:00:10,000
      	These are some other captions

        2
        00:00:12,000 --> 00:00:15,000
        These are some other captions goes here sadfsad dsaf sadf sadf sadf 
      	`,
    },
  },
  { duration: 15000, selector: "#subs-container" }
);
clip.addIncident(subtitle, 0);
new Player({
  scaleToFit: true,
  clip: clip,
  theme: "mc-blue",
  preview: false,
  pointerEvents: false,
});

window.myclip = clip;
