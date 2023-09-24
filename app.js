const OPENAI_API_KEY_EXAMPLE = "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";
const form = document.querySelector("form")
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const img = document.querySelector(".img")

form.addEventListener("submit", async(evt) => {
  evt.preventDefault();
  if (input.value === "") {
    alert("Please enter a prompt");
    return;
  }
  btn.disabled = true
  const res = await fetch("https://api.openai.com/v1/images/generations",{
    method: "POST",
    body: JSON.stringify({
      prompt: input.value,
      n: 1,
      size: "1024x1024"
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY_EXAMPLE}`
    }
  });
  const data = await res.json();
  img.src = data.data[0].url;
  btn.disabled = false
});
