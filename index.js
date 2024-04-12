function getCharacters(done) {
  const result = fetch("https://rickandmortyapi.com/api/character");
  result.then((response) =>
    response.json().then((data) => {
      done(data);
    })
  );
}

getCharacters((data) => {
  console.log(data);

  data.results.forEach((personaje) => {
    const article = document.createRange().createContextualFragment(`
        <article>
            <div class="image-container">
                <img src="${personaje.image}" alt="Personaje" />
            </div>
            <h2>${personaje.name}</h2>
            <span>${personaje.status}</span>
        </article>
        `);
        const main = document.querySelector("main");
        main.append(article);
  });
});
