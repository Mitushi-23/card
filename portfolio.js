

const cards = document.querySelector(".cardholder");


function createCard([img1,front,img,name,heading,content]){
  let code = `
  <div class="card">
		<div class="card__inner">
			<div class="card__face card__face--front">
			
			<img class="profile" src="${img1}" alt="" >
				<h2>${front}</h2>
				
			</div>
			<div class="card__face card__face--back">
				<div class="card__content">
					<div class="card__header">
						<img src="${img}" alt="" class="pp" />
						<h2>${name}</h2>
					</div>
					<div class="card__body">
						<h3>${heading}</h3>
						<p>${content}</p>
					</div>
				</div>
			</div>
		</div>
    </div>
    `;

cards.innerHTML += code;
}

let item1 = ["https://tse2.mm.bing.net/th?id=OIP.IJ2-T02KRn0-mA7Sb1sDFwHaLG&pid=Api&P=0&w=300&h=300",
"Card 1",
"https://tse2.mm.bing.net/th?id=OIP.IJ2-T02KRn0-mA7Sb1sDFwHaLG&pid=Api&P=0&w=300&h=300",
"Kitty1",
"heading 1",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem quas, maiores atque quis a neque, reprehenderit eaque praesentium, animi id nesciunt laudantium? Voluptatem nam alias nulla repellat. Molestiae, explicabo!"];

let item2 = ["https://tse2.mm.bing.net/th?id=OIP.IJ2-T02KRn0-mA7Sb1sDFwHaLG&pid=Api&P=0&w=300&h=300",
"Card 2",
  "https://tse2.mm.bing.net/th?id=OIP.IJ2-T02KRn0-mA7Sb1sDFwHaLG&pid=Api&P=0&w=300&h=300",
"Kitty2",
"heading 2",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem quas, maiores atque quis a neque, reprehenderit eaque praesentium, animi id nesciunt laudantium? Voluptatem nam alias nulla repellat. Molestiae, explicabo!"];

let item3 = ["https://tse2.mm.bing.net/th?id=OIP.IJ2-T02KRn0-mA7Sb1sDFwHaLG&pid=Api&P=0&w=300&h=300",
"Card 3",
  "https://tse2.mm.bing.net/th?id=OIP.IJ2-T02KRn0-mA7Sb1sDFwHaLG&pid=Api&P=0&w=300&h=300",
"Kitty3",
"heading 3",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem quas, maiores atque quis a neque, reprehenderit eaque praesentium, animi id nesciunt laudantium? Voluptatem nam alias nulla repellat. Molestiae, explicabo!"];

let item4 = ["https://tse2.mm.bing.net/th?id=OIP.IJ2-T02KRn0-mA7Sb1sDFwHaLG&pid=Api&P=0&w=300&h=300",
"Card 4",
  "https://tse2.mm.bing.net/th?id=OIP.IJ2-T02KRn0-mA7Sb1sDFwHaLG&pid=Api&P=0&w=300&h=300",
"Kitty4",
"heading 4",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem quas, maiores atque quis a neque, reprehenderit eaque praesentium, animi id nesciunt laudantium? Voluptatem nam alias nulla repellat. Molestiae, explicabo!"];

createCard(item1);
createCard(item2);
createCard(item3);
createCard(item4);
createCard(item1);
createCard(item1);
createCard(item2);
createCard(item3);
createCard(item4);
createCard(item4);
createCard(item2);
createCard(item1);
createCard(item3);
createCard(item4);
createCard(item2);
createCard(item1);













let card = document.querySelectorAll('.card__inner');

for(let i=0;i<card.length;i++){
card[i].addEventListener("click", function (e) {
  card[i].classList.toggle('is-flipped');
});
}




// var dynamic = document.querySelector('.container');  
// for (var i = 0; i < titlearray.length; i++) {
//   var fetch = document.querySelector('.container').innerHTML;  
//   dynamic.innerHTML = `<div id="cards${i}" class="boxes">
//       <div class="box-content">
//         <h2>${titlearray[i]}</h2>
//         <p>
//           ${descriptionarray[i]}
//         </p>
//         <a class="showmore" href="#">ReadMore</a>
//       </div>
//     </div>` + fetch ; 
//     var bgimg = document.getElementById(`cards${i}`);
//     bgimg.style.backgroundImage = `url('img/${titlearray[i]}.jpg')`;
// } 





