let key = { a: "s", b: "n", c: "v", d: "f", e: "r", f: "g", g: "h", h: "j", i: "o", j: "k", k: "l", l: ";", m: ",", n: "m", o: "p", p: "[", q: "w", r: "t", s: "d", t: "y", u: "i", v: "b", w: "e", x: "c", y: "u", z: "x" };

function englishToEncode(str) {
  let encodedStr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    let translatedChar = key[char.toLowerCase()];
    if (char.toUpperCase() === char) {
      translatedChar = translatedChar.toUpperCase();
    }
    encodedStr += translatedChar || char;
  }
  return encodedStr;
}

function encodeToEnglish(str) {
  let decodedStr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    let translatedChar = null;

    for (let encodedChar in key) {
      if (key[encodedChar].toLowerCase() === char.toLowerCase()) {
        translatedChar = encodedChar;
        if (char.toUpperCase() === char) {
          translatedChar = translatedChar.toUpperCase();
        }
        break;
      }
    }
    decodedStr += translatedChar || char;
  }
  return decodedStr;
}



const englishInput = document.getElementById("englishInput");
const gibberishInput = document.getElementById("gibberishInput");
const gibberishOutput = document.getElementById("gibberishOutput");
const englishOutput = document.getElementById("englishOutput");

englishInput.addEventListener("input", () => {
  const inputText = englishInput.value;
  const encodedText = englishToEncode(inputText);
  gibberishOutput.value = encodedText;
});

gibberishInput.addEventListener("input", () => {
  const inputText = gibberishInput.value;
  const decodedText = encodeToEnglish(inputText);
  englishOutput.value = decodedText;
});
