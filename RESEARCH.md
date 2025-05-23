# Controlled vs. Uncontrolled Components

## Controlled Components
- State lives in React (`useState`).
- Pros: real-time validation, single source of truth.
- Cons: more boilerplate, potential perf on huge forms.
- Use cases: dynamic forms, password strength checks.

## Uncontrolled Components
- State lives in DOM, accessed via `ref`.
- Pros: less code, simpler for static forms.
- Cons: imperative access, no live validation.
- Use cases: simple forms, file inputs, third-party widgets.
