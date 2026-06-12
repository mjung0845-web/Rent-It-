# Business Animations (Remotion)

Komplettes [Remotion](https://www.remotion.dev)-Setup zum Erstellen von Videos und
Animationen mit React. Alle Animationen werden als Code geschrieben und können live
im Browser bearbeitet und als MP4/PNG exportiert werden.

## Voraussetzungen

- **Node.js** (Version 18 oder neuer) – mit `node --version` prüfen
- Zum Rendern von Videos wird FFmpeg automatisch von Remotion mitgeliefert

## Installation

Im Ordner `business/`:

```bash
npm install
```

## Studio starten (live bearbeiten)

```bash
npm run dev
```

Dadurch öffnet sich das **Remotion Studio** im Browser (meist http://localhost:3000).
Dort siehst du links die Animation `HelloWorld`, kannst sie abspielen, die Texte über
die Props ändern und das Ergebnis in Echtzeit sehen.

## Video rendern (Export als MP4)

```bash
npm run render
```

Das fertige Video liegt danach in `out/video.mp4`.

## Einzelbild exportieren (PNG)

```bash
npm run render:still
```

## Projektstruktur

| Datei | Zweck |
|-------|-------|
| `src/index.ts` | Einstiegspunkt – registriert das Projekt |
| `src/Root.tsx` | Liste aller Animationen (Compositions) |
| `src/HelloWorld.tsx` | Beispiel-Animation (Titel + Untertitel, animiert) |
| `remotion.config.ts` | Render-Einstellungen |

## Eigene Animation hinzufügen

1. Neue Datei in `src/` anlegen, z. B. `MeineAnimation.tsx`
2. Eine React-Komponente exportieren, die `useCurrentFrame()` verwendet
3. In `src/Root.tsx` eine neue `<Composition />` mit eindeutiger `id` ergänzen

Mehr in der offiziellen Doku: https://www.remotion.dev/docs/
