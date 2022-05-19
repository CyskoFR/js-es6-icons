// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
// BONUS
// 1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
// 2- popolare le options della select della milestone 3 dinamicamente.

// Consigli del giorno
// Come sempre, iniziamo prima di tutto dall'analisi e comprensione della consegna. Scomponiamo il problema in micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.
// Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa assicuriamoci di aver inserito il link alla cdn nell'head della pagina.
// Dopodiché, basandoci sul codice di riferimento nel sito di Font Awesome, analizziamo come è formato il tag <i> di un'icona qualsiasi, in particolare focalizziamoci sulle classi.
// Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto e visualizzare l'icona in pagina?
// Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e uno span con il nome. Solamente quando la parte logica è completa, ci dedichiamo al css.

// const allIcons = [
// 	{
// 		name: 'cat',
// 		prefix: 'fa-',
// 		type: 'animal',
// 		family: 'fas',
// 		color: 'orange'
// 	},
// 	{
// 		name: 'crow',
// 		prefix: 'fa-',
// 		type: 'animal',
// 		family: 'fas',
// 		color: 'orange'
// 	},
// 	{
// 		name: 'dog',
// 		prefix: 'fa-',
// 		type: 'animal',
// 		family: 'fas',
// 		color: 'orange'
// 	},
// 	{
// 		name: 'dove',
// 		prefix: 'fa-',
// 		type: 'animal',
// 		family: 'fas',
// 		color: 'orange'
// 	},
// 	{
// 		name: 'dragon',
// 		prefix: 'fa-',
// 		type: 'animal',
// 		family: 'fas',
// 		color: 'orange'
// 	},
// 	{
// 		name: 'horse',
// 		prefix: 'fa-',
// 		type: 'animal',
// 		family: 'fas',
// 		color: 'orange'
// 	},
// 	{
// 		name: 'hippo',
// 		prefix: 'fa-',
// 		type: 'animal',
// 		family: 'fas',
// 		color: 'orange'
// 	},
// 	{
// 		name: 'fish',
// 		prefix: 'fa-',
// 		type: 'animal',
// 		family: 'fas',
// 		color: 'orange'
// 	},
// 	{
// 		name: 'carrot',
// 		prefix: 'fa-',
// 		type: 'vegetable',
// 		family: 'fas',
// 		color: 'green'
// 	},
// 	{
// 		name: 'apple-alt',
// 		prefix: 'fa-',
// 		type: 'vegetable',
// 		family: 'fas',
// 		color: 'green'
// 	},
// 	{
// 		name: 'lemon',
// 		prefix: 'fa-',
// 		type: 'vegetable',
// 		family: 'fas',
// 		color: 'green'
// 	},
// 	{
// 		name: 'pepper-hot',
// 		prefix: 'fa-',
// 		type: 'vegetable',
// 		family: 'fas',
// 		color: 'green'
// 	},
// 	{
// 		name: 'user-astronaut',
// 		prefix: 'fa-',
// 		type: 'user',
// 		family: 'fas',
// 		color: 'blue'
// 	},
// 	{
// 		name: 'user-graduate',
// 		prefix: 'fa-',
// 		type: 'user',
// 		family: 'fas',
// 		color: 'blue'
// 	},
// 	{
// 		name: 'user-ninja',
// 		prefix: 'fa-',
// 		type: 'user',
// 		family: 'fas',
// 		color: 'blue'
// 	},
// 	{
// 		name: 'user-secret',
// 		prefix: 'fa-',
// 		type: 'user',
// 		family: 'fas',
// 		color: 'blue'
// 	}
// ];

// const animalIcons = allIcons.filter(e => e.type === "animal");
// const vegetableIcons = allIcons.filter(e => e.type === "vegetable");
// const userIcons = allIcons.filter(e => e.type === "user");
// const form = document.getElementById("form");
// const iconBox = document.getElementById("icon-box");
// const iconSlot = document.createElement("div");
// const option = document.querySelector("option");

// form.onchange = changeFilter;

// function changeFilter() {
// 	let formValue = this.value;
// 	if(formValue === "user") {
// 		for (let i = 0; i < userIcons.length; i++) {
// 			const iconSlot = document.createElement("div");
// 			const iconName = document.createElement("p");
// 			iconSlot.classList.add("icon-slot");
// 			let iconImg = `<i class="${userIcons[i].prefix}solid ${userIcons[i].prefix}${userIcons[i].name}"></i>`;
// 			iconSlot.innerHTML = iconImg;
// 			iconName.innerText = userIcons[i].name.toUpperCase();
// 			iconSlot.style.color = userIcons[i].color;
// 			iconSlot.append(iconName);
// 			iconBox.append(iconSlot);
// 		};
// 	} else if(formValue === "animal") {
// 		for (let i = 0; i < animalIcons.length; i++) {
// 			const iconSlot = document.createElement("div");
// 			const iconName = document.createElement("p");
// 			iconSlot.classList.add("icon-slot");
// 			let iconImg = `<i class="${animalIcons[i].prefix}solid ${animalIcons[i].prefix}${animalIcons[i].name}"></i>`;
// 			iconSlot.innerHTML = iconImg;
// 			iconName.innerText = animalIcons[i].name.toUpperCase();
// 			iconSlot.style.color = animalIcons[i].color;
// 			iconSlot.append(iconName);
// 			iconBox.append(iconSlot);
// 		};
// 	} else if(formValue === "vegetable") {
// 		for (let i = 0; i < vegetableIcons.length; i++) {
// 			const iconSlot = document.createElement("div");
// 			const iconName = document.createElement("p");
// 			iconSlot.classList.add("icon-slot");
// 			let iconImg = `<i class="${vegetableIcons[i].prefix}solid ${vegetableIcons[i].prefix}${vegetableIcons[i].name}"></i>`;
// 			iconSlot.innerHTML = iconImg;
// 			iconName.innerText = vegetableIcons[i].name.toUpperCase();
// 			iconSlot.style.color = vegetableIcons[i].color;
// 			iconSlot.append(iconName);
// 			iconBox.append(iconSlot);
// 		};
// 	} else {
// 		allIcons.forEach((e) =>  {
// 			const iconSlot = document.createElement("div");
// 			const iconName = document.createElement("p");
// 			iconSlot.classList.add("icon-slot");
// 			let iconImg = `<i class="${e.prefix}solid ${e.prefix}${e.name}"></i>`;
// 			iconSlot.innerHTML = iconImg;
// 			iconName.innerText = e.name.toUpperCase();
// 			iconSlot.style.color = e.color;
// 			iconSlot.append(iconName);
// 			iconBox.append(iconSlot);
// 		});
// 	} 
// }

const containerHTML = document.querySelector('.container');
const selectIcon = document.querySelector('#icon-type');

function printIcons(icons, container) {
    // svuoto il container delle icone
    container.innerHTML = "";
    // aggiungo le icone
    icons.forEach((elm) => {
        const icon = `
            <div class="icon">
                <i class="${elm.family} ${elm.prefix+elm.name}" style="color: ${elm.color}"></i>
                <div>${elm.name}</div>
            </div>
        `;
        container.innerHTML = container.innerHTML + icon;
    });
}

// on load della pagina aggiungo tutte le icone presenti nell'array
printIcons(icons, containerHTML);

// on select change filtro e stampo le icone
selectIcon.addEventListener("change", function() {
    // leggo il valore della select
    const iconTypeSelected = this.value;
    // filtro le icone in base al type, icon.type === iconTypeSelected ma se iconTypeSelected è vuoto vuol dire che è stato selezionato "All"
    const iconsFiltered = icons.filter(elm => elm.type === iconTypeSelected || iconTypeSelected === "");
    // stampo nuovamente le icone
    printIcons(iconsFiltered, containerHTML);
});
