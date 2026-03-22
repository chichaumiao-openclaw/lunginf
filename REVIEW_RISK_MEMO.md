# T-REV-001 Skeptical Risk Memo (research_reviewer)

Date: 2026-03-06
Scope reviewed: Home/Browse/Detail MVP + 3-theme switch + README run flow

## Executive decision
**decision = hold**

Current implementation is a functional visual shell, but not yet acceptable as a scientific database frontend MVP claim without stronger validity safeguards, provenance rigor, and reproducibility evidence.

## Prioritized issues (severity, evidence, required fix)

### 1) Critical — Placeholder metrics and records are presented as factual without machine-readable synthetic flags
- **Evidence:** Home page shows concrete counts ("12,430 curated entries", "1,904 DOI-indexed studies") and entity-like records in static HTML strings.
- **Risk:** Demo values can be mistaken for real validated corpus statistics, enabling accidental misreporting and stakeholder overconfidence.
- **Fix required:** Add explicit `data-synthetic="true"` markers and a persistent on-screen synthetic-data banner across all routes. Gate any factual-looking aggregate values behind a documented mock dataset file with source annotation.

### 2) High — No dataset contract or schema validation path in MVP runtime
- **Evidence:** App content is hard-coded in render functions; no schema checks for record shape/provenance fields.
- **Risk:** Downstream integration can silently accept malformed data, causing hidden data leakage and inconsistent evidence presentation.
- **Fix required:** Introduce JSON schema for shared entity/search/evidence models and add validation in test/build pipeline.

### 3) High — Provenance UI exists but lacks reproducibility artifact linkage
- **Evidence:** Detail page renders provenance/evidence sections, but repository has no fixture bundle documenting source->transform->render lineage.
- **Risk:** Claims of provenance support are not reproducible; reviewers cannot replay evidence generation.
- **Fix required:** Add reproducibility artifacts: `fixtures/` with synthetic source docs, transform script, generated output checksum, and instructions to regenerate.

### 4) Medium — Accessibility/test coverage insufficient for decision-critical UI controls
- **Evidence:** Minimal test harness (`node --test`) with no explicit a11y or interaction regression checks in reviewed files.
- **Risk:** Theme switch and navigation can regress silently; external validity for broad user set is weak.
- **Fix required:** Add interaction tests for route switching/theme persistence and basic semantic/a11y assertions for landmark roles and control labels.

### 5) Medium — External validity limitations undocumented in acceptance framing
- **Evidence:** README states synthetic data but does not define non-goals, threat model, or limits of inference.
- **Risk:** Stakeholders extrapolate from visual success to scientific correctness.
- **Fix required:** Add "Validity Limits" section in README: synthetic-only, non-benchmark, non-biological inference, not representative of production data distributions.

## Minimum acceptance gate to move from HOLD -> GO
1. Persistent synthetic-data disclosure + machine-readable synthetic markers.
2. Schema + validation tests integrated in `npm test`.
3. Reproducibility bundle (fixtures + transform + checksum + regeneration steps).
4. Updated README with explicit validity limits and review caveats.

Until these are met, status should remain **hold**.

---

## Hourly review update (2026-03-06 23:56 CST)

### What was re-verified
- `README.md` run flow still documents `npm test` and `npm run build`.
- UI/content implementation remains synthetic-demo oriented with factual-looking counts and no machine-readable synthetic marker attributes in rendered records.
- No reproducibility fixture bundle (`fixtures/` with transform + checksums) present in this workdir.

### Updated reviewer call
- **decision = hold** (unchanged)
- **Must-fix blockers before GO:**
  1. Persistent synthetic disclosure banner + machine-readable synthetic markers in UI data rendering.
  2. Schema-driven validation wired into test pipeline.
  3. Reproducibility artifacts (fixtures, transform script, checksum manifest, regeneration instructions).
---

## Hourly review update (2026-03-07 00:56 CST)

### Additional evidence from code inspection
- `src/main.js` still renders concrete corpus-like counts and publication totals ("12,430 curated entries", "1,904 DOI-indexed studies") while labeling only one hero line as synthetic preview text.
- `src/modules.js` provenance/evidence panels are static strings and include definitive-sounding statements such as "schema validation complete" without linked artifact IDs, checksums, or fixture references.
- Test scope in `test/theme.test.js` remains theme-token only; no tests for synthetic-data disclosure, provenance linkage integrity, or route-level evidence rendering semantics.

### Reviewer decision for this run
- **decision = hold**
- **Blockers remain unchanged and unresolved in repository state at review time.**

---

## Hourly review update (2026-03-07 01:55 CST)

### Re-check evidence (this run)
- Verified canonical workdir path is correct (`/Users/macmini/coding/web_template`).
- Re-ran quality gates: `npm test` (8/8 pass) and `npm run build` (build complete to `dist/`).
- No code-level evidence of resolved must-fix blockers: synthetic disclosure is still not enforced as persistent/global machine-readable markers, schema validation is not wired for runtime data contracts, and reproducibility fixtures/checksum pipeline is still absent.

### Reviewer decision for this run
- **decision = hold**
- **Rationale:** Passing tests/build validate baseline template integrity but do not satisfy scientific validity/reproducibility acceptance gates defined above.

---

## Hourly review update (2026-03-07 02:55 CST)

### Re-check evidence (this run)
- Confirmed assigned reviewer task in dashboard remains `T-REV-001` (owner `research_reviewer`, status `Todo`).
- Revalidated repository gates from canonical workdir: `npm test` and `npm run build` complete successfully.
- Must-fix scientific validity blockers are still unresolved in codebase state: no persistent global synthetic-data disclosure markers across routes, no schema validation contract wired into runtime/test pipeline for dataset inputs, and no reproducibility fixture/checksum regeneration bundle.

### Reviewer decision for this run
- **decision = hold**
- **Rationale:** Engineering quality gates pass, but evidence quality and reproducibility gates for scientific-review acceptance remain unmet.

## Hourly review update (2026-03-07 03:55 CST)

### Re-check evidence (this run)
- Confirmed canonical workdir remains `/Users/macmini/coding/web_template`.
- Re-ran repository gates: `npm test` (12/12 pass) and `npm run build` (build complete: `dist/`).
- Re-inspected scientific-risk controls and still found no merged evidence for the acceptance gate items: (1) persistent global synthetic-data disclosure with machine-readable markers, (2) schema contract validation wired into runtime/test ingestion, (3) reproducibility artifact bundle with fixture lineage + checksum regeneration path.

### Reviewer decision for this run
- **decision = hold**
- **Rationale:** Functional quality gates pass, but critical validity/reproducibility controls needed for scientific-review GO remain unresolved.

## Hourly review update (2026-03-07 04:55 CST)

### Re-check evidence (this run)
- Verified assignment scope: intake currently contains no `research_reviewer` rows; active reviewer task remains `T-REV-001` in dashboard queue.
- Confirmed canonical workdir and re-ran gates: `npm test` (12/12 pass), `npm run build` (Build complete: `dist/`).
- Re-validated must-fix controls against current source:
  1. No persistent global synthetic-data banner + machine-readable `data-synthetic` markers across rendered records/routes.
  2. No runtime/test-integrated schema contract enforcement for dataset-shaped inputs.
  3. No reproducibility fixture lineage package (fixtures + transform + checksum manifest + regeneration command).

### Reviewer decision for this run
- **decision = hold**
- **Rationale:** Build/test health is green, but scientific validity and reproducibility acceptance gates remain unmet.

## Hourly review update (2026-03-07 05:55 CST)

### Re-check evidence (this run)
- Verified canonical workdir path is `/Users/macmini/coding/web_template`.
- Parsed task sources per cron instruction: `task-intake.json` contains no active rows owned by `research_reviewer`; active reviewer queue item remains `T-REV-001` in `TASK_DASHBOARD.md`.
- Re-ran quality gates from canonical workdir: `npm test` (14/14 pass) and `npm run build` (Build complete: `dist/`).
- Re-assessed acceptance blockers against current repository state: persistent global synthetic-data disclosure markers, schema-enforced dataset contract wiring, and reproducibility fixture/checksum regeneration bundle are still not evidenced as complete.

### Reviewer decision for this run
- **decision = hold**
- **Rationale:** Engineering checks are green, but reviewer must-fix scientific validity/reproducibility gates remain open.

## Hourly review update (2026-03-07 06:55 CST)

### Re-check evidence (this run)
- Verified canonical workdir path is `/Users/macmini/coding/web_template`.
- Parsed task sources per cron instruction: `task-intake.json` currently has no rows owned by `research_reviewer`; active reviewer queue item remains `T-REV-001` in `TASK_DASHBOARD.md`.
- Re-ran quality gates from canonical workdir: `npm test` (17/17 pass) and `npm run build` (Build complete: `dist/`).
- Re-inspected reviewer acceptance blockers against current repository contents:
  1. Synthetic placeholders are disclosed in text, but persistent global machine-readable synthetic markers (for example `data-synthetic` on rendered records/routes) are still not evidenced.
  2. Schema artifacts and contract tests now exist under `docs/data-stewardship` and `test/data-contract.test.js`, but runtime ingestion in `src/` is still static/hard-coded and not schema-validated at render time.
  3. Reproducibility fixture/checksum regeneration bundle (`fixtures/` + transform + manifest) is still not present in workdir.

### Reviewer decision for this run
- **decision = hold**
- **Rationale:** Build/test gates pass and schema test coverage improved, but reproducibility and machine-readable synthetic-disclosure controls remain incomplete for scientific-review GO.

## Hourly review update (2026-03-07 07:55 CST)

### Re-check evidence (this run)
- Verified canonical workdir path is `/Users/macmini/coding/web_template`.
- Parsed requested task sources: `task-intake.json` has no active rows owned by `research_reviewer`; active reviewer queue still lists `T-REV-001` in `TASK_DASHBOARD.md` (`Todo`).
- Re-ran repository quality gates from canonical workdir: `npm test` and `npm run build` both complete successfully.
- Re-checked review acceptance controls in current source tree:
  1. Persistent global machine-readable synthetic markers (for example `data-synthetic` across rendered records/routes) are still not fully evidenced.
  2. Schema/contract docs and tests exist, but runtime UI rendering remains static and not schema-validated at ingestion/render boundaries.
  3. Reproducibility fixture lineage bundle (`fixtures/` + transform + checksum manifest + regeneration command path) is still not present.

### Reviewer decision for this run
- **decision = hold**
- **Rationale:** Functional build/test health is green, but critical scientific validity and reproducibility gates for reviewer GO remain unresolved.

## Hourly review update (2026-03-07 08:55 CST)

### Re-check evidence (this run)
- Verified canonical workdir path is `/Users/macmini/coding/web_template`.
- Parsed task sources per cron scope: `task-intake.json` still contains no active rows owned by `research_reviewer`; active reviewer assignment remains `T-REV-001` (`Todo`) in `TASK_DASHBOARD.md`.
- Re-ran required quality gates from canonical workdir: `npm test` (17/17 pass) and `npm run build` (Build complete: `dist/`).
- Re-assessed reviewer acceptance controls against repository state:
  1. Global machine-readable synthetic markers/disclosure are not consistently evidenced across rendered records/routes.
  2. Contract tests are present, but runtime rendering remains static and does not demonstrate schema-validated ingest boundaries.
  3. Reproducibility fixture lineage package (`fixtures/` + transform + checksum manifest + regeneration steps) remains absent.

### Reviewer decision for this run
- **decision = hold**
- **Rationale:** Engineering gates pass, but must-fix scientific validity and reproducibility controls remain open for `T-REV-001`.

## Hourly review update (2026-03-07 09:55 CST)

### Re-check evidence (this run)
- Verified canonical workdir path is `/Users/macmini/coding/web_template` prior to review actions.
- Parsed task sources per cron scope: `task-intake.json` still has no rows owned by `research_reviewer`; active reviewer assignment remains `T-REV-001` (`Todo`) in `TASK_DASHBOARD.md`.
- Re-ran required repository gates from canonical workdir: `npm test` (18/18 pass) and `npm run build` (Build complete: `dist/`).
- Re-checked reviewer acceptance blockers against current source tree:
  1. Machine-readable synthetic disclosure markers are not consistently applied across rendered scientific-looking records/routes.
  2. Schema/contract tests exist, but runtime UI rendering in `src/` remains static and not schema-validated at ingest/render boundaries.
  3. End-to-end reproducibility fixture lineage bundle (`fixtures/` + transform + checksum manifest + regeneration command path) is still not present.

### Reviewer decision for this run
- **decision = hold**
- **Rationale:** Functional gates are green, but scientific validity and reproducibility acceptance controls for reviewer sign-off remain unmet.

## Hourly review update (2026-03-07 10:55 CST)

### Re-check evidence (this run)
- Verified canonical workdir path is `/Users/macmini/coding/web_template` before review actions.
- Processed requested task sources: `task-intake.json` has no active rows owned by `research_reviewer`; active reviewer assignment remains `T-REV-001` (`Todo`) in `TASK_DASHBOARD.md`.
- Re-ran required repository gates from canonical workdir: `npm test` (19/19 pass) and `npm run build` (Build complete: `dist/`).
- Re-inspected `src/main.js` rendering paths and found scientific-looking values/records are still rendered without consistent machine-readable synthetic markers (for example `data-synthetic` attributes) across Home/Browse/Detail.
- Re-checked reproducibility evidence package expectations and still found no end-to-end fixture lineage bundle (`fixtures/` + transform script + checksum manifest + regeneration command path).

### Reviewer decision for this run
- **decision = hold**
- **Rationale:** Functional quality gates remain green, but reviewer must-fix scientific validity and reproducibility controls are still not fully satisfied for `T-REV-001` sign-off.

## Hourly review update (2026-03-07 11:55 CST)

### Re-check evidence (this run)
- Verified canonical workdir path is `/Users/macmini/coding/web_template` before any review activity.
- Processed task sources per cron scope: `task-intake.json` contains no active rows owned by `research_reviewer`; active reviewer assignment remains `T-REV-001` (`Todo`) in `TASK_DASHBOARD.md`.
- Re-ran repository gates from canonical workdir: `npm test` and `npm run build` both complete successfully on this run.
- Re-validated blocker state in current repository snapshot:
  1. Machine-readable synthetic markers/disclosure are still not consistently evidenced across all scientific-looking rendered records/routes.
  2. Schema/contract tests exist, but runtime `src/` rendering path remains static and does not demonstrate schema-validated ingest boundaries.
  3. Reproducibility lineage bundle expectations remain unmet (`fixtures/` + transform + checksum manifest + regeneration path not evidenced).

### Reviewer decision for this run
- **decision = hold**
- **Rationale:** Functional gates are green, but reviewer must-fix scientific validity and reproducibility controls remain open for `T-REV-001`.

## Hourly review update (2026-03-07 12:55 CST)

### Re-check evidence (this run)
- Verified canonical workdir path is `/Users/macmini/coding/web_template` before review actions.
- Processed requested task sources: `task-intake.json` contains no active rows owned by `research_reviewer`; active reviewer assignment remains `T-REV-001` (`Todo`) in `TASK_DASHBOARD.md`.
- Re-ran repository gates from canonical workdir on this run:
  - `npm test`: 19/19 pass, 0 fail.
  - `npm run build`: `Build complete: dist/`.
- Re-assessed reviewer must-fix controls against current source state:
  1. Machine-readable synthetic markers/disclosure remain inconsistent across scientific-looking rendered records/routes.
  2. Contract tests exist, but runtime rendering path in `src/` still does not show schema-validated ingest boundaries.
  3. End-to-end reproducibility lineage package is still not fully evidenced (`fixtures/` + transform + checksum manifest + regeneration command path).

### Reviewer decision for this run
- **decision = hold**
- **Rationale:** Acceptance gates for scientific validity/reproducibility are still open, so reviewer sign-off cannot move to GO.

## Hourly review update (2026-03-07 13:55 CST)

### Re-check evidence (this run)
- Verified canonical workdir path is `/Users/macmini/coding/web_template` before review actions.
- Processed requested task sources: `task-intake.json` contains no active rows owned by `research_reviewer`; active reviewer assignment remains `T-REV-001` (`Todo`) in `TASK_DASHBOARD.md`.
- Re-ran repository gates from canonical workdir on this run:
  - `npm test`: 19/19 pass, 0 fail.
  - `npm run build`: `Build complete: dist/`.
- Re-assessed reviewer must-fix controls against current source state:
  1. Machine-readable synthetic markers/disclosure remain inconsistent across scientific-looking rendered records/routes.
  2. Contract tests exist, but runtime rendering path in `src/` still does not show schema-validated ingest boundaries.
  3. End-to-end reproducibility lineage package is still not fully evidenced (`fixtures/` + transform + checksum manifest + regeneration command path).

### Reviewer decision for this run
- **decision = hold**
- **Rationale:** Functional gates pass, but scientific validity and reproducibility acceptance controls required for reviewer GO are still open.
