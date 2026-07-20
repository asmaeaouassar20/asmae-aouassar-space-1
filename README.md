# <a href="https://asmae-aouassar.netlify.app/" >Click to view my portfolio - Netlify</a>
# <a href="https://asmaeaouassar20.github.io/asmae-aouassar-space-1/" >Click to view my portfolio - GitHub Pages</a>

#### vite
Vite est un outil de développement JavaScript qui sert à créer et lancer rapidement des projets (comme avec React, Vue ou Svelte).  
Il offre : 
- Démarrage très rapide du projet.
- Rechargement instantané des modifications (Hot Module Replacement).
- Génère une version optimisée pour la production.

#### daisyUI
daisyUI est une bibliothèque de composants basée sur Tailwind CSS.  
Elle fournit des composants prêts à l'emploi (boutons, cartes, menus, formulaires, modales, etc.).  
Disponible à <a href="https://daisyui.com/docs/install/">daisyUI</a>


#### Lucide React
- C'est une bibliothèque d'icônes SVG pour React.
- Elle permet d'ajouter facilement des icônes à ton interface (menu, recherche, utilisateur, paramètres, etc.) sous forme de composants React.

Disponible sur <a href="https://lucide.dev/guide/react/getting-started"> lucide.dev</a>

# Déploiement sur GitHub pages 

1.
``` npm install gh-pages --save-dev ```

2. Dans package.json, on ajoute :

```
"homepage" : "https://github.com/asmaeaouassar20/asmae-aouassar-space-1",
et
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3.
 ``` npm run deploy ```
