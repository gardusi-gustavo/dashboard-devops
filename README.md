# dashboard-devops

Static operational dashboard for ecosystem health, workflow status, PR quotas, and backup summaries.

## Layout

| Path | Holds |
| --- | --- |
| `index.html` | page shell |
| `app.js` | fetch and render |
| `styles.css` | layout |
| `infra/scripts/` | build and CI |

## Validation

```bash
bash infra/scripts/ci.sh
```
