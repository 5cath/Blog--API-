# Blog--API-
 API backend pour gestion des articles

# 📌 API Backend - Blog (INF222 TAF1)

## 🧾 Description
Ce projet est une API backend simple développée avec Node.js et Express.  
Elle permet de gérer des articles de blog avec les opérations suivantes :
- Créer un article
- Lire les articles
- Modifier un article
- Supprimer un article
- Rechercher des articles

---

## ⚙️ Technologies utilisées
- Node.js
- Express.js
- JavaScript

---

## 🚀 Installation et exécution

### 1. Cloner le projet
```
git clone https://github.com/5cath/Blog--API

### 2. Accéder au dossier
```
cd NOM-DU-REPO
```

### 3. Installer les dépendances
```
npm install express
```

### 4. Lancer le serveur
```
node server.js
```

Le serveur sera accessible sur :
```
http://localhost:3000
```

---

## 📡 Endpoints de l’API

### 🔹 Créer un article
```
POST /api/articles
```

Body (JSON) :
```json
{
  "titre": "Mon article",
  "contenu": "Contenu de l'article",
  "auteur": "Nom",
  "categorie": "Tech",
  "tags": ["node", "api"]
}
```

---

### 🔹 Récupérer tous les articles
```
GET /api/articles
```

---

### 🔹 Récupérer un article par ID
```
GET /api/articles/{id}
```

---

### 🔹 Modifier un article
```
PUT /api/articles/{id}
```

---

### 🔹 Supprimer un article
```
DELETE /api/articles/{id}
```

---

### 🔹 Rechercher des articles
```
GET /api/articles/search?query=mot
```

---

## ✅ Codes HTTP utilisés
- 200 : Requête réussie  
- 201 : Création réussie  
- 400 : Requête invalide  
- 404 : Ressource non trouvée  
- 500 : Erreur serveur  

---

## 📁 Structure du projet
```
server.js
README.md
```

---

## 👨🏽‍💻 Auteur
Nom : CATHERINE DE GRÂCE EYIA 
Matricule : 22U2101
Filière : INF-L2 (INF222)

---
