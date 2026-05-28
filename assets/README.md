# Assets

Drop your files here. The site references them at these paths:

| Path                         | What                                              |
| ---------------------------- | ------------------------------------------------- |
| `./profile.jpg`              | Square photo (~400×400, < 50KB, WebP preferred)   |
| `./floating-waste.png`       | Optional Floating Waste project thumbnail         |

Optimize before committing — aim for < 50KB each. On macOS:

```
cwebp -q 80 input.jpg -o output.webp
```

The site renders fine without these files. They're optional polish for
later — V1 ships text-only on purpose, to keep the page < 30KB.

`cv.pdf` does NOT go here — it goes in the repo root (the "Download CV"
button links to `./cv.pdf` relative to the site root).
