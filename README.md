# ESG Lernplattform

Moderne Lernplattform für die **Elisabeth-Selbert-Gesamtschule, Bonn**

## Übersicht

Diese Website dient als zentrale Lernplattform für die Fächer:
- **Informatik**
- **Deutsch**
- **Sport**

## Features

- ✨ Modernes, ansprechendes Design
- 🌓 Hell-/Dunkelmodus
- 📱 Vollständig responsiv (Mobile, Tablet, Desktop)
- 🎓 Interaktives Onboarding für neue Schüler
- 📚 Lehrpläne und Prüfungstermine
- 🎮 Interaktive digitale Übungen
- 📧 Kontaktinformationen (E-Mail & Microsoft Teams)

## Schnellstart

### Website lokal starten

```bash
npm start
```

Die Website wird automatisch im Browser unter `http://localhost:3000` geöffnet.

### Alternative: Ohne npm

Öffne einfach die `index.html` Datei in deinem Browser.

## 🎨 Logo der Schule hinzufügen

**WICHTIG:** Derzeit wird ein Platzhalter-Logo verwendet. So fügst du das echte Schullogo ein:

### Schritt 1: Logo exportieren

1. Öffne die **Fotos** App auf deinem Mac
2. Finde das Logo der Elisabeth-Selbert-Gesamtschule
3. Rechtsklick → **"Exportieren 1 Foto..."**
4. Speichere es als: `/Users/acabrera/WebstormProjects/learning-website/assets/logo.png`
   - Oder alternativ als: `assets/logo.svg` (wenn verfügbar)

### Schritt 2: Datei umbenennen

- Das exportierte Logo sollte `logo.png` oder `logo.svg` heißen
- Lege es in den Ordner `assets/` ab

### Schritt 3: HTML aktualisieren (falls nötig)

Falls dein Logo `.png` statt `.svg` ist, ändere in `index.html` Zeile 49:

```html
<!-- Von: -->
<img src="assets/logo.svg" alt="ESG Logo" class="logo" id="school-logo">

<!-- Zu: -->
<img src="assets/logo.png" alt="ESG Logo" class="logo" id="school-logo">
```

### Schritt 4: Farben anpassen (optional)

Nach dem Hinzufügen des echten Logos kannst du die Farbpalette in `css/styles.css` anpassen:

```css
:root {
    /* Passe diese Farben an die Farben des Schullogos an */
    --primary-color: #2563eb;      /* Hauptfarbe */
    --primary-dark: #1e40af;       /* Dunklere Variante */
    --primary-light: #3b82f6;      /* Hellere Variante */
    --secondary-color: #10b981;    /* Akzentfarbe */
    --accent-color: #f59e0b;       /* Highlight-Farbe */
}
```

## Projektstruktur

```
learning-website/
├── index.html              # Hauptdatei
├── css/
│   └── styles.css         # Alle Styles inkl. Hell-/Dunkelmodus
├── js/
│   └── script.js          # Interaktivität & Funktionalität
├── assets/
│   └── logo.svg           # Schullogo (PLATZHALTER - bitte ersetzen!)
├── package.json
└── README.md
```

## Anpassungen

### Prüfungstermine ändern

Bearbeite die Termine in `index.html`:
- Informatik: Zeilen 126-137
- Deutsch: Zeilen 201-212
- Sport: Zeilen 276-287

### Lernmaterialien-Links aktualisieren

Füge neue Links in den entsprechenden Abschnitten hinzu (Zeilen 138-150, 213-225, 288-300)

### Kontaktinformationen

Die Kontaktdaten sind bereits konfiguriert:
- **E-Mail:** alberto.cabrera@esg.nrw.schule
- **Teams:** a.cabrera@191401.schulen-bn.de

## Technologien

- HTML5
- CSS3 (CSS Custom Properties für Theming)
- Vanilla JavaScript (keine Frameworks!)
- Font Awesome Icons

## Browser-Unterstützung

- ✅ Chrome (empfohlen)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile Browser (iOS Safari, Chrome Mobile)

## Lizenz

© 2026 Elisabeth-Selbert-Gesamtschule, Bonn. Alle Rechte vorbehalten.

---

**Entwickelt mit ❤️ für unsere Schüler**

Bei Fragen: alberto.cabrera@esg.nrw.schule
