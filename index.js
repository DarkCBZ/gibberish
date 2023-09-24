let key = {
  a: "s", A: "S",
  b: "n", B: "N",
  c: "v", C: "V",
  d: "f", D: "F",
  e: "r", E: "R",
  f: "g", F: "G",
  g: "h", G: "H",
  h: "j", H: "J",
  i: "o", I: "O",
  j: "k", J: "K",
  k: "l", K: "L",
  l: ";", L: ";",
  m: ",", M: ",",
  n: "m", N: "M",
  o: "p", O: "P",
  p: "[", P: "[",
  q: "w", Q: "W",
  r: "t", R: "T",
  s: "d", S: "D",
  t: "y", T: "Y",
  u: "i", U: "I",
  v: "b", V: "B",
  w: "e", W: "E",
  x: "c", X: "C",
  y: "u", Y: "U",
  z: "x", Z: "X"
};

function englishToEncode(str) {
  let encodedStr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    encodedStr += key[char] || char;
  }
  return encodedStr;
}

function encodeToEnglish(str) {
  let decodedStr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i);
    let translatedChar = null;
    for (let encodedChar in key) {
      if (key[encodedChar] === char) {
        translatedChar = encodedChar;
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
