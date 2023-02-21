const search = document.getElementById("btn");
const output = document.getElementById("output");

// function getWordMeaning() {
//   const word = document.getElementById("word");
//   const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`;
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       data.forEach((item) => {
//         return (output.innerHTML = `
//         ${item.meanings[0].definitions[0].definition}
//         `);
//       });
//     });
// }
const app_id = "431f1a75";
const app_key = "81713b0087f6403e9b5275507e584336";
fetch("https://od-api.oxforddictionaries.com/api/v2/entries/en-us/Dog")
  .then((response) => response.json())
  .then((data) => console.log(data));
// search.addEventListener("click", getWordMeaning);
