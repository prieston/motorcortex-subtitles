# MotorCortex Subtitles

[Subtitle](https://www.npmjs.com/package/subtitle) library as a MotorCortex Incident

## Installation
```bash
$ npm install @kissmybutton/motorcortex-subtitles
# OR
$ yarn add @kissmybutton/motorcortex-subtitles
```

```javascript
import Subtitle from "@kissmybutton/motorcortex-subtitles";
```


## Key Concepts / Features
MotorCortex Subtitles takes the capabilities of Subtitle library of parsing subtilte files. 
The library exposes just one Incident with the name "ParseText" which can parse supported subtitle files and add them to your donkey clip.

## Subtitle Formats supported
SRT or WebVTT

## Documentation
### Import and load the plugin to MotorCortex
```javascript
import MotorCortex from "@kissmybutton/motorcortex";
import SubtitleDefinition from "@kissmybutton/motorcortex-subtitles";

const Subtitle = MotorCortex.loadPlugin(SubtitleDefinition);
```

### Create an subtitle Incident and place it anywhere in your Clip
```javascript
import { Clip, loadPlugin } from "@kissmybutton/motorcortex/";
import SubtitlesDef from "../src/";
import mySubsTextFile from "./subs.srt";

const Subtitles = loadPlugin(SubtitlesDef);

const clip = new Clip({
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
  { duration: 75000, selector: "#subs-container" }
);

clip.addIncident(subtitle, 0);
clip.play();
```

### Demo
https://kissmybutton.github.io/motorcortex-subtitles/demo/


## License
[MIT License](https://opensource.org/licenses/MIT)

  
  
[![Kiss My Button](https://presskit.kissmybutton.gr/logos/kissmybutton-logo-small.png)](https://kissmybutton.gr)
