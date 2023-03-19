# Codexplain

Codexplain is a Chrome extension that allows you to select any code on a web page and get a detailed explanation of that code. It uses OpenAI's API to provide the explanations. Simply select the code you want to explain and a popover will appear with the relevant information.

<p align="center">
  <a href="#" rel="noopener" target="_blank"><img width="900" src="https://i.postimg.cc/PfZMxQcX/Captura-de-pantalla-2023-03-18-203245.png" alt="Grammar logo"></a>
</p>
<p align="center">
  <a href="#" rel="noopener" target="_blank"><img width="900" src="https://i.postimg.cc/65XfGGJd/Captura-de-pantalla-2023-03-18-203323.png" alt="Grammar logo"></a>
</p>

## Installation

The extension is being reviewed by the Chrome development team and is currently not available for installation.

## How to use this extension

1. Open a web page with code you want to explain
2. Select the code you want to explain with the cursor
3. A popover with the explanation of the selected code will open

## Development

Chrome requires bundling the final output as a zip file. I also love hot module replacement ( live reloads).
I configured Vite for the same.

1. Run this command to start the dev server. It will keep building the extension as you make changes.

```bash
npm run build:watch
```

2. You can update the extension in the chrome extensions manager page by clicking on the 'update' button.

# Contributing

Thank you for considering contributing to Codexplain! If you want to make a contribution, please follow these steps:

1. Fork this repository
2. Create a branch with your change (git checkout -b my-change)
3. Make your changes and commit them (git commit -am "Added a new change")
4. Push your changes to your fork (git push origin my-change)
5. Open a pull request in this repository and describe your changes.

# License

This project is under the MIT License.
