function analyze() {
  const url = document.getElementById("urlInput").value;
  const results = document.getElementById("results");

  if (!url) {
    alert("Please enter a URL.");
    return;
  }

  // Simulated AI output
  const summary = "This blog explains how habits influence productivity and provides steps to form better routines.";
  const keywords = ["habits", "productivity", "routine", "focus"];
  const sentiment = "Positive";
  const seoScore = "82 / 100";

  results.innerHTML = `
    <div><strong>🔗 URL:</strong> ${url}</div>
    <div><strong>📋 Summary:</strong> ${summary}</div>
    <div><strong>🔑 Keywords:</strong> ${keywords.join(", ")}</div>
    <div><strong>😄 Sentiment:</strong> ${sentiment}</div>
    <div><strong>📈 SEO Score:</strong> ${seoScore}</div>
  `;
}
