async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()

    document.querySelector('.quote').innerHTML = data.content;
    document.querySelector('cite').innerHTML = data.author;
  }
  randomQuote()
