const state = await fetch("data.json", { cache: "no-store" })
  .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
  .catch(() => ({ updated_at: "unavailable", metrics: [], repositories: [] }));
document.querySelector("#updated").textContent = `Updated ${state.updated_at ?? "unknown"}`;
const cards = document.querySelector("#cards");
for (const metric of state.metrics ?? []) {
  const el = document.createElement("article");
  el.className = "card";
  el.innerHTML = `<strong>${metric.value}</strong><span>${metric.label}</span>`;
  cards.append(el);
}
const repos = document.querySelector("#repos");
if ((state.repositories ?? []).length) {
  repos.innerHTML = "<h2>Repositories</h2><table><thead><tr><th>Repository</th><th>Status</th><th>PRs</th></tr></thead><tbody>" +
    state.repositories.map((r) => `<tr><td>${r.repo_name}</td><td>${r.workflow_status}</td><td>${r.pr_open_count}</td></tr>`).join("") +
    "</tbody></table>";
}
