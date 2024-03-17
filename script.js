let repeatedWords = [];
window.onload = () => {
  fetch("https://random-word-api.herokuapp.com/word?number=10")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 10; i++) {
        let index = Math.floor(Math.random() * 10);
        // console.log(data[index]);
        repeatedWords.push(data[index]);
      }
      // console.log(repeatedWords);
      document.getElementsByClassName("word")[0].innerText = repeatedWords[0];
      console.log(document.getElementsByClassName("word"));
    })
    .catch((error) => console.error(error));
};
