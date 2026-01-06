# Comment intégrer votre Dashboard Power BI

## Étape 1: Publier votre rapport sur Power BI Service

1. Ouvrez votre fichier `.pbix` dans Power BI Desktop
2. Cliquez sur **Fichier** → **Publier** → **Publier sur Power BI**
3. Sélectionnez votre espace de travail (workspace)
4. Attendez la confirmation de publication

## Étape 2: Obtenir le lien d'intégration

### Option A: Via Power BI Service (Web)

1. Allez sur [app.powerbi.com](https://app.powerbi.com)
2. Ouvrez votre rapport publié
3. Cliquez sur **Fichier** → **Intégrer le rapport** → **Site web ou portail**
4. Cochez **Autoriser les utilisateurs anonymes** (si vous voulez que tout le monde puisse voir sans se connecter)
5. Copiez le code d'intégration (iframe)

### Option B: Paramètres de partage

1. Sur [app.powerbi.com](https://app.powerbi.com), ouvrez votre rapport
2. Cliquez sur **Fichier** → **Intégrer le rapport** → **Publier sur le web (public)**
3. ⚠️ **Attention**: Cette option rend votre rapport accessible à TOUT LE MONDE sur internet
4. Cliquez sur **Créer un code incorporé**
5. Copiez le lien d'intégration

## Étape 3: Intégrer dans votre page GitHub Pages

1. Ouvrez le fichier `index.html` dans ce dossier
2. Trouvez cette ligne:
   ```html
   <iframe class="powerbi-embed" src="https://app.powerbi.com/view?r=YOUR_EMBED_CODE_HERE" ...>
   ```
3. Remplacez `YOUR_EMBED_CODE_HERE` par votre code d'intégration complet

### Exemple de lien d'intégration:

Si Power BI vous donne:
```
https://app.powerbi.com/view?r=eyJrIjoiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXoiLCJ0IjoiMTIzNDU2Nzg5MCJ9
```

Votre iframe devrait être:
```html
<iframe
    class="powerbi-embed"
    src="https://app.powerbi.com/view?r=eyJrIjoiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXoiLCJ0IjoiMTIzNDU2Nzg5MCJ9"
    frameborder="0"
    allowFullScreen="true">
</iframe>
```

## Étape 4: Tester localement

Avant de pousser sur GitHub, testez localement:

```bash
# Dans le dossier malijama.github.io
python3 -m http.server 8000
```

Puis visitez: `http://localhost:8000/projects/pizza-sales/`

## Alternatives si Power BI Service n'est pas disponible

### Option 1: Captures d'écran statiques

Si vous n'avez pas accès à Power BI Service, vous pouvez:

1. Exporter vos visualizations en images haute résolution
2. Créer une galerie d'images dans la page HTML
3. C'est moins interactif mais reste professionnel

### Option 2: Power BI Embedded

Pour une solution plus avancée avec authentification:

1. Utilisez Power BI Embedded API
2. Nécessite un Azure subscription
3. Plus de contrôle sur les permissions

## Notes importantes

- ⚠️ **Publier sur le web** rend votre rapport PUBLIC
- Les rapports publics n'ont PAS de contrôle d'accès
- Ne publiez JAMAIS de données sensibles ou confidentielles
- Pour les données privées, utilisez Power BI Premium avec authentification

## Besoin d'aide?

Si vous rencontrez des problèmes:
1. Vérifiez que votre rapport est bien publié sur Power BI Service
2. Vérifiez que vous avez activé l'option "publier sur le web"
3. Assurez-vous que le lien d'intégration est complet (commence par `https://app.powerbi.com/view?r=`)
