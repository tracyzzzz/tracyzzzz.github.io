(async function () {
  try {
    const res = await fetch("./income-vs-trees.vl.json");
    if (!res.ok) throw new Error(`Spec fetch failed: ${res.status}`);
    const spec = await res.json();

    await vegaEmbed("#incomeTrees", spec, {
      mode: "vega-lite",
      actions: false, // hides "Open in Vega Editor" etc.
    });
  } catch (err) {
    console.warn(err);
    const el = document.querySelector("#incomeTrees");
    if (el) el.textContent = "Failed to load chart.";
  }
})();
