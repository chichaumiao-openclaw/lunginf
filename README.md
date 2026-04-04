# lunginf

`lunginf` is the infection axis of the four-database lung single-cell program:

- `lungdev`: development
- `lunginf`: infection / inflammation
- `lungcancer`: cancer
- `lungevo`: evolution

## Mission

Lung Infection Atlas is a disease-focused resource for studying how lung cell states, immune responses, and tissue programs change across infectious conditions.

This site is the **Infection-first MVP** for the infection portal. The navigation, modules, and dataset framing are organized around healthy-versus-infected comparison, pathogen class, immune remodeling, and inflammatory signal interpretation rather than developmental time, tumor biology, or species homology.

## MVP routes

- `home`
- `conditions`
- `immune-states`
- `signals`
- `datasets`
- `about`

## Working scope

- Healthy reference plus viral, bacterial, fungal, and repair-associated condition anchors
- Condition-centered single-cell viewer using simulated subsets until curated infection datasets are integrated
- Immune-state comparison modules
- Searchable inflammatory and repair signal catalog
- Condition-scoped dataset release table with provenance and evidence framing
- Cross-linked bundle navigation to `lungdev`, `lungcancer`, and `lungevo`
- Mobile-friendly header, route navigation, and footer shell
- About page describing mission, scope, and portfolio role

## Bundle and domains

- GitHub Pages target: `https://chichaumiao-openclaw.github.io/lunginf/`
- Custom domain: `https://lunginf.gznl.org/`
- Build output includes `dist/CNAME` with `lunginf.gznl.org`

## Local development

From `/Users/chichau/current_projects/database4/lunginf`:

```bash
npm install
npm test
cd singlecell-viewer
npm install
npm run build
cd ..
npm run build
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080/dist/
```

## Validation

```bash
npm test
npm run build
npm run verify:mvp
```
