var profilearray =["kitty.jpeg","kitty.jpeg","kitty.jpeg","kitty.jpeg","kitty.jpeg","kitty.jpeg","kitty.jpeg","kitty.jpeg"];
var titlearray =["card 1","card 2","card 3","card 4","card 5","card 6","card 7","card 8"];
var imagearray = ["kitty.jpeg","kitty.jpeg","kitty.jpeg","kitty.jpeg", "kitty.jpeg","kitty.jpeg","kitty.jpeg","kitty.jpeg"];
var namearray = ["Kitty 1","Kitty 2","Kitty 3","Kitty 4", "Kitty 5","Kitty 6","Kitty 7","Kitty 8"];
var headingarray = ["Heading","Heading","Heading","Heading", "Heading","Heading","Heading","Heading"];
var contentarray = ["contentLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem quas, maiores atque quis a neque, reprehenderit eaque praesentium, animi id nesciunt laudantium? Voluptatem nam alias nulla repellat. Molestiae, explicabo!","contentLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem quas, maiores atque quis a neque, reprehenderit eaque praesentium, animi id nesciunt laudantium? Voluptatem nam alias nulla repellat. Molestiae, explicabo!","contentLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem quas, maiores atque quis a neque, reprehenderit eaque praesentium, animi id nesciunt laudantium? Voluptatem nam alias nulla repellat. Molestiae, explicabo!","contentLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem quas, maiores atque quis a neque, reprehenderit eaque praesentium, animi id nesciunt laudantium? Voluptatem nam alias nulla repellat. Molestiae, explicabo!","contentLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem quas, maiores atque quis a neque, reprehenderit eaque praesentium, animi id nesciunt laudantium? Voluptatem nam alias nulla repellat. Molestiae, explicabo!","contentLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem quas, maiores atque quis a neque, reprehenderit eaque praesentium, animi id nesciunt laudantium? Voluptatem nam alias nulla repellat. Molestiae, explicabo!","contentLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem quas, maiores atque quis a neque, reprehenderit eaque praesentium, animi id nesciunt laudantium? Voluptatem nam alias nulla repellat. Molestiae, explicabo!","contentLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates exercitationem quas, maiores atque quis a neque, reprehenderit eaque praesentium, animi id nesciunt laudantium? Voluptatem nam alias nulla repellat. Molestiae, explicabo!"];

const cards = document.querySelector(".cardholder");

for (var i = 0; i < titlearray.length; i++) {
  let code = `
  <div class="card">
		<div class="card__inner">
			<div class="card__face card__face--front">
			
			<img class="profile" src="${profilearray[i]}" alt="" >
				<h2>${titlearray[i]}</h2>
				
			</div>
			<div class="card__face card__face--back">
				<div class="card__content">
					<div class="card__header">
						<img src="${imagearray[i]}" alt="" class="pp" />
						<h2>${namearray[i]}</h2>
					</div>
					<div class="card__body">
						<h3>${headingarray[i]}</h3>
						<p>${contentarray[i]}</p>
					</div>
				</div>
			</div>
		</div>
    </div>
    `;

cards.innerHTML += code;
}








let card = document.querySelectorAll('.card__inner');

for(let i=0;i<card.length;i++){
card[i].addEventListener("click", function (e) {
  card[i].classList.toggle('is-flipped');
});
}
























let text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);
for(var i=2;i>=0;i--){
let code=document.querySelector(".demo");
let content= obj.employees[i].firstName + " " + obj.employees[i].lastName;
code.innerHTML += content;
}
