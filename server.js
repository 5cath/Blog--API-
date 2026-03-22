const express = require("express");
const app = express();

app.use(express.json());

let articles = [];
let id = 1;

// CREATE
app.post("/api/articles", (req, res) => {
  const { titre, contenu, auteur, categorie, tags } = req.body;

  if (!titre || !auteur) {
    return res.status(400).json({ message: "Titre et auteur obligatoires" });
  }

  const article = {
    id: id++,
    titre,
    contenu,
    auteur,
    categorie,
    tags,
    date: new Date()
  };

  articles.push(article);
  res.status(201).json(article);
});

// READ ALL
app.get("/api/articles", (req, res) => {
  res.json(articles);
});

// READ ONE
app.get("/api/articles/:id", (req, res) => {
  const article = articles.find(a => a.id == req.params.id);

  if (!article) {
    return res.status(404).json({ message: "Article non trouvé" });
  }

  res.json(article);
});

// UPDATE
app.put("/api/articles/:id", (req, res) => {
  const article = articles.find(a => a.id == req.params.id);

  if (!article) {
    return res.status(404).json({ message: "Article non trouvé" });
  }

  Object.assign(article, req.body);
  res.json(article);
});

// DELETE
app.delete("/api/articles/:id", (req, res) => {
  articles = articles.filter(a => a.id != req.params.id);
  res.json({ message: "Article supprimé" });
});

// SEARCH
app.get("/api/articles/search", (req, res) => {
  const query = req.query.query;

  const result = articles.filter(a =>
    a.titre.includes(query) || a.contenu.includes(query)
  );

  res.json(result);
});

// START SERVER
app.listen(3000, () => {
  console.log("Serveur lancé sur http://localhost:3000");
});
