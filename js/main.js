const MainDisplay = document.querySelector("#mainDisplay")

  const getRandomDrink = () => {
      fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
       .then(res => res.json()) // parse response as JSON
       .then(data => {
          console.log(data)
          console.log(data.drinks[0])
          // document.querySelector('h2').innerText = data.drinks[0].strDrink;
          // document.querySelector('img').src = data.drinks[0].strDrinkThumb;
          // document.querySelector('p').innerText = data.drinks[0].strInstructions;
       })
        .catch(err => {
               console.log(`error ${err}`)
        });
      }
class Card {
   constructor(title, picUrl, body) {
      this.title = title;
      this.picUrl = picUrl;
      this.body = body;
   }
   // Getter
   get getHTML() {
      return `
      <section class="card">
				<section class="cardTitle">
               ${this.title}
				</section>
				<img src="${this.picUrl}" alt="Picture of ${this.title}">
				
				<section class="cardBody">
               <p>Instructions:</p>
               ${this.body}
				</section>
			</section>
         `
   }
}
const getDrinkByName = (name) => {
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(name)}`)
       .then(res => res.json()) // parse response as JSON
       .then(data => {
         MainDisplay.innerHTML = "";
          console.log(data)
          // console.log(data.drinks[0])
          data.drinks.forEach(element => {
             console.log(element);
             const card = new Card(element.strDrink, element.strDrinkThumb, element.strInstructions)
             MainDisplay.innerHTML += card.getHTML;
          });
          // document.querySelector('h2').innerText = data.drinks[0].strDrink;
          // document.querySelector('img').src = data.drinks[0].strDrinkThumb;
          // document.querySelector('p').innerText = data.drinks[0].strInstructions;
       })
        .catch(err => {
               console.log(`error ${err}`)
        });
}    
const getDrink = () => {
   const drink = document.querySelector("#drinkInput")
   getDrinkByName(drink.value);
}

document.querySelector("#searchButton").addEventListener('click', getDrink)
// console.log("random");
// getRandomDrink()


