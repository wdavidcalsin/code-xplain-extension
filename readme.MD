# Linkedin Connect Chrome extension

Hi, welcome to LinkedIn Connect Chrome extension repository.
This extension automates connecting users you searched for in LinkedIn.

## Disclaimer

Thank you for using this demo tool. Please note that this extension is designed
solely for demonstration purposes, and should not be used to violate LinkedIn's
policies or to engage in any abusive behavior towards LinkedIn users.
We strongly advise you to only use this tool to connect with individuals you know
and to respect their privacy and boundaries. Please understand that any misuse
of this tool may result in the suspension or termination of your LinkedIn account.

## Installation ( extension under review )

The extension is under review by the chrome developer team and is
currently unavailable for installation.

## How to use this extension

1. Search for the users you want to connect on LinkedIn
2. Open the extension and click 'Start connecting'. You can pause connecting by
3. clicking on the 'Stop connecting' button.

## Demo mode

There is a "demo mode" checkbox that is turned on by default. Running the extension in
Demo mode would only turn the background of the connect buttons to the color red rather than
actually clicking them. This is useful if you want to test the functionality without actually
connecting to users

## Development

Chrome requires bundling the final output as a zip file. I also love hot module replacement ( live reloads).
I configured Vite for the same.

1. Run this command to start the dev server. It will keep building the extension as you make changes.

```bash
npm run build:watch
```

1. You can update the extension in the chrome extensions manager page by clicking on the 'update' button.

## Code Architecture

The extension is built with HTML, CSS and Javascript. The file extension.html in src
provides the markup for the extension as well tailwind classes for styling. The CSS file 'extension.css' in src imports tailwind utilities.
In addition, there are two entry point scripts, one with the extension's HTML document API for
managing the extension's elements and another with the active tabs API for managing the web page.
They are respectively in 'content-scripts' and 'extension-scripts' folder.
Both these scripts use other services which are in the src/services folder

| Particular          | File path                      |
| ------------------- | ------------------------------ |
| Extension markup    | src/extension.html             |
| Extension styling   | src/extension.css              |
| Extension scripting | src/extension-scripts/index.ts |
| Web page scripting  | src/content-scripts/index.ts   |

# References

1. [How to create a chrome extension - Freecodecamp](https://www.freecodecamp.org/news/building-chrome-extension/)
2. [Message passing between content and extension pop up script](https://developer.chrome.com/docs/extensions/mv3/messaging/)
