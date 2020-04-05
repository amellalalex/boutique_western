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
const ga = require("./lang/gallery.json");

///////////////
// Configure //
///////////////

// Index
var index;
var gallery;

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

  fs.readFile(
    path.join(__dirname, "public/gallery.html"),
    { encoding: "utf-8" },
    (err, data) => {
      if (err) console.log(`[!] Failed to load gallery template.`);
      else {
        // Compile template
        gallery = handlebars.compile(data.toString());
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

app.get("/en/gallery", (req, res) => {
  res.send(gallery(ga.en));
});

app.get("/en/gallery/hats", (req, res) => {
  res.send(gallery(ga.en.hats));
});

app.get("/en/gallery/anushkas", (req, res) => {
  res.send(gallery(ga.en.anushkas));
});

app.get("/en/gallery/misc", (req, res) => {
  res.send(gallery(ga.en.misc));
});

app.get("/en/gallery/purses", (req, res) => {
  res.send(gallery(ga.en.purses));
});

app.get("/en/gallery/boots", (req, res) => {
  res.send(gallery(ga.en.boots));
});

app.get("/en/gallery/mocassins", (req, res) => {
  res.send(gallery(ga.en.mocassins));
});

app.get("/en/gallery/jackets", (req, res) => {
  res.send(gallery(ga.en.jackets));
});

app.get("/en/gallery/ponchos", (req, res) => {
  res.send(gallery(ga.en.ponchos));
});

app.get("/en/gallery/vests", (req, res) => {
  res.send(gallery(ga.en.vests));
});

app.get("/fr/gallerie", (req, res) => {
  res.send(gallery(ga.fr));
});

app.get("/fr/gallerie/chapeaux", (req, res) => {
  res.send(gallery(ga.fr.hats));
});

app.get("/fr/gallerie/anushkas", (req, res) => {
  res.send(gallery(ga.fr.anushkas));
});

app.get("/fr/gallerie/divers", (req, res) => {
  res.send(gallery(ga.fr.misc));
});

app.get("/fr/gallerie/sacoches", (req, res) => {
  res.send(gallery(ga.fr.purses));
});

app.get("/fr/gallerie/bottes", (req, res) => {
  res.send(gallery(ga.fr.boots));
});

app.get("/fr/gallerie/mocassins", (req, res) => {
  res.send(gallery(ga.fr.mocassins));
});

app.get("/fr/gallerie/jaquettes", (req, res) => {
  res.send(gallery(ga.fr.jackets));
});

app.get("/fr/gallerie/ponchos", (req, res) => {
  res.send(gallery(ga.fr.ponchos));
});

app.get("/fr/gallerie/vestes", (req, res) => {
  res.send(gallery(ga.fr.vests));
});

app.use(express.static("public"));

app.listen(port, () =>
  console.log(`Boutique Western JS is listening on port ${port}`)
);
