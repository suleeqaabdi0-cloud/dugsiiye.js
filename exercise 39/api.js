const countries = {
  "af": "Afrikaans",
  "ar": "Arabic",
  "bn": "Bengali",
  "zh": "Chinese",
  "en": "English",
  "fr": "French",
  "de": "German",
  "hi": "Hindi",
  "it": "Italian",
  "ja": "Japanese",
  "ko": "Korean",
  "pt": "Portuguese",
  "ru": "Russian",
  "es": "Spanish",
  "so": "Somali",
  "sw": "Swahili",
  "tr": "Turkish",
  "ur": "Urdu",
  "vi": "Vietnamese"
};


let fromSelect = document.getElementById("fromLang");
let toSelect = document.getElementById("toLang");

for (let code in countries) {
  let option1 = `<option value="${code}">${countries[code]}</option>`;
  let option2 = `<option value="${code}">${countries[code]}</option>`;

  fromSelect.innerHTML += option1;
  toSelect.innerHTML += option2;
}


fromSelect.value = "en";
toSelect.value = "so";


async function translateText() {
  let text = document.getElementById("text").value;
  let from = fromSelect.value;
  let to = toSelect.value;

  let url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${from}|${to}`;

  try {
    let res = await fetch(url);
    let data = await res.json();

    document.getElementById("result").innerText =
      data.responseData.translatedText;

  } catch {
    document.getElementById("result").innerText = "Error!";
  }
}