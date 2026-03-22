# UMAP + h5ad Implementation Plan (PI -> Eng)

Date: 2026-03-07
Owner: Eng (`research_engineer`)
Reviewer: Rev (`research_reviewer`)

## Goal
Upgrade web_template UMAP visualization to support selective AnnData (`.h5ad`) loading with minimal reads and interactive coloring.

## Input example
- `/Users/macmini/coding/data/pbmc3k.h5ad`

## Scope
1. UMAP base render
   - Read only UMAP coordinates from `obsm['X_umap']`.
   - Read only `obs` metadata needed for labels/colors.
2. Base color fallback logic
   - Prefer cell-type-like obs keys (`cell_type`, `celltype`, `CellType`, etc.).
   - Else use sample-like keys (`sample`, `batch`, `donor`, etc.).
   - Else no color grouping (single-color point cloud).
3. Gene expression coloring
   - Provide searchable gene input from `var_names`.
   - On select gene, load only one gene vector (not full matrix).
   - Color UMAP by expression intensity.
4. Metadata coloring
   - Allow choosing any obs field.
   - Categorical -> discrete palette.
   - Numeric -> continuous colormap.

## Technical plan
- Add Python helper API (lightweight local service) for h5ad selective reads:
  - Endpoint `/meta`: returns available obs columns, var_names (or paged search), and heuristics for default color key.
  - Endpoint `/umap`: returns coordinates + selected obs field values only.
  - Endpoint `/gene?name=<gene>`: returns expression vector for one gene only.
- Keep frontend WebGL scatter (deck.gl) and update colors via interaction.
- Do not parse full h5ad in browser JS.

## Deliverables
- Frontend:
  - gene search box + metadata selector + mode toggle (coordinates / metadata / gene)
  - updated UMAP panel and legends
- Backend/helper:
  - selective h5ad reader service/script
- Docs:
  - run instructions + verification commands
- Tests:
  - selective gene loading behavior
  - fallback color logic behavior
  - build/test pass

## Acceptance checklist
- [ ] UMAP renders from `X_umap` with no full-matrix load in base mode.
- [ ] Correct fallback color logic (celltype > sample > none).
- [ ] Gene search selects one gene and only single-gene vector is read.
- [ ] Metadata coloring works for categorical and numeric fields.
- [ ] `npm test` pass.
- [ ] `npm run build` pass.
- [ ] Evidence report includes pwd, changed files, command outputs, commit hash.

## Reviewer checklist (Rev)
- [ ] Confirm no full expression matrix load for base view.
- [ ] Confirm per-gene request path exists and is used.
- [ ] Confirm categorical vs numeric mapping behavior.
- [ ] decision=go|hold with reasons.
