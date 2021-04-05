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
The library exposes just one Incident with the name "ParseText" which can parse supported subtitle files and add them to your clip. The duration is auto calculated from your subtitles. The container params of the subtitles clip should be the same with the parent clip.

## Subtitle Formats supported
SRT or WebVTT

## Documentation
### Import and load the plugin to MotorCortex
```javascript
import { HTMLClip, loadPlugin } from "@kissmybutton/motorcortex/";
import mySubsTextFile from "./subs.srt.js";
import SubtitlesDefinition from "@kissmybutton/motorcortex-subtitles/";
const Subtitles = loadPlugin(SubtitlesDefinition);
const clip = new HTMLClip({
  html: `
    <div class="container"></div>`,
  css: `
  .container{
    width:100%;
    height:100%;
    position:relative;
    background:#d5d5d5;
  }
`,
  host: document.getElementById("clip"),
  containerParams: {
    width: "720px",
    height: "640px",
  },
});

const subtitle = new Subtitles.ParseText(
  {
    fontSize: 14,
    textColor: "white",
    fontFamily: "Ubuntu",
    subtitles: mySubsTextFile,
    position: "bottom",
    maxWidth: 400,
    paddingBottom: 50,
  },
  {
    selector: ".container",
    containerParams: {
      width: "720px",
      height: "640px",
    },
  }
);

clip.addIncident(subtitle, 0);
clip.play();
```
### Attributes
| Name | Description | Default | Type |
| --------- |:-----------| :----| ------: |
| fontSize | Font size in pixels of the subtitles | 12 | number |
| textColor | The color of the subtitles | white | - |
| fontFamily | Font family of the subtiltes | 'Ubuntu' | string |
| subtitles | The subtitles loaded text | - | string |
| position | Position of the subtitles container [top, center, bottom] | bottom | string |
| maxWidth | The maximum width of the subtitles container in pixels | "100%" | number |
| paddingTop | The padding top value of the subtitles container in pixels | 0 | number |
| paddingBottom | The padding bottom value of the subtitles container in pixels | 0 | number |

### Demo
https://kissmybutton.github.io/motorcortex-subtitles/demo/


## License
[MIT License](https://opensource.org/licenses/MIT)

  
  
[![Kiss My Button](https://presskit.kissmybutton.gr/logos/kissmybutton-logo-small.png)](https://kissmybutton.gr)
