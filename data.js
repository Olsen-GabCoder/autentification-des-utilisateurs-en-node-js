const bcrypt = require("bcrypt");

const utilisateurs = [];

// Fonction asynchrone pour initialiser les utilisateurs avec des mots de passe hashés
(async () => {
  const salt = await bcrypt.genSalt(10);

  // Utilisateur 1
  const passwordLouis = await bcrypt.hash("1234", salt);
  utilisateurs.push({
    id: 1,
    nom: "Louis Musole",
    email: "louis@drcmind.com",
    password: passwordLouis, // Mot de passe hashé
  });

  // Utilisateur 2
  const passwordOlsen = await bcrypt.hash("olsen2024", salt);
  utilisateurs.push({
    id: 2,
    nom: "Olsen kampala",
    email: "olsenkampala@gmail.com",
    password: passwordOlsen, // Mot de passe hashé
  });
})();

module.exports = {
  cours: [
    {
      titre: "Location de vehicules ecologiques",
      desc: `Location et achats des vehicules ecologiques`,
      lienVideo: "public/video/mongoose.mp4",
      lienThumbnail: "/images/thumbnail/voiture.webp",
      duree: "01h:03min",
    },
    {
      titre: "Fallah Connect",
      desc: `Vous apprendrez dans ce cours les notions fondamentales du langage de programmation
           Javascript.`,
      lienVideo: "public/video/mongoose.mp4",
      lienThumbnail: "/images/thumbnail/agriculture.jpg",
      duree: "02h:04min",
    },
    {
      titre: "Marketplace pour débutants",
      desc: `Gérez vos données avec la base de données non relationnelle MongoDB.`,
      lienVideo: "public/video/mongoose.mp4",
      lienThumbnail: "/images/thumbnail/marketplace.png",
      duree: "00h:54min",
    },
    {
      titre: "projet gestionaire des taches",
      desc: `Dans ce cours, vous apprendrez les notions fondamentales sur 
          l'utilisation de Git et Github pour gérer vos projets.`,
      lienVideo: "public/video/mongoose.mp4",
      lienThumbnail: "/images/thumbnail/gestion.webp",
      duree: "04h:11min",
    },
    {
      titre: "Créer des applications NodeJs Sécurisées",
      desc: `Dans ce cours, vous apprendrez les meilleures pratiques pour sécuriser vos applications Node.js.`,
      lienVideo: "public/video/mongoose.mp4",
      lienThumbnail: "/images/thumbnail/safenodejs.jpg",
      duree: "02h:06min",
    },
    {
      titre: "Cloner Youtube avec Flutter Web",
      desc: `Dans ce cours, vous apprendrez à cloner l'application Youtube en utilisant Flutter Web.`,
      lienVideo: "public/video/mongoose.mp4",
      lienThumbnail: "/images/thumbnail/youtubeclone.jpg",
      duree: "01h:00min",
    },
  ],
  utilisateurs,
};

