// List of plugins to dynamically load and use
const plugins = ['markdown-it-attrs', 'markdown-it-anchor'];   // Add plugin names here

// Load required modules
const fs = require('fs');
const markdownIt = require('markdown-it');

// Create a markdown-it instance
const md = markdownIt({
  html: true,
  //linkify: true,
  //typographer: true
});

// Dynamically load and apply each plugin
plugins.forEach(pluginName => {
  const plugin = require(pluginName);
  md.use(plugin);
});

const markdownItEleventyImg = require("markdown-it-eleventy-img");

md.use(markdownItEleventyImg, {
  imgOptions: {
    urlPath: "./",

    outputDir: "./docs/"
  },
  globalAttributes: {
    outputDir: "./docs/"
  }

});

// Read the input Markdown file (provided as the first command-line argument)
const input = fs.readFileSync(process.argv[2], 'utf8');

// Convert the Markdown to HTML and output it
console.log(md.render(input));
