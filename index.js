////////////////////////
// Import necessities //
////////////////////////

// Express
const express = require("express");
const app = express();
const port = 3000;

// Path
const path = require("path");

// Handlebars
const handlebars = require("handlebars");

// filesystem
const fs = require("fs");

// languages
const en = require("./lang/en.json");
const fr = require("./lang/fr.json");
const select = require("./lang/select.json");

///////////////
// Configure //
///////////////

// Index
var index;

function configure() {
  // Handlebar templates //

  fs.readFile(
    path.join(__dirname, "public/index.html"),
    { encoding: "utf-8" },
    (err, data) => {
      if (err) console.log(`[!] Failed to load index template.`);
      else {
        // Compile template
        index = handlebars.compile(data.toString());
      }
    }
  );
}

configure();

// Express

app.get("/", (req, res) => {
  configure();
  res.send(index(select));
});

app.get("/en", (req, res) => {
  res.send(index(en));
});

app.get("/fr", (req, res) => {
  res.send(index(fr));
});

app.use(express.static("public"));

app.listen(port, () =>
  console.log(`Boutique Western JS is listening on port ${port}`)
);
