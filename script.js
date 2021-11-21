// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
// Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. 
// Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo tutte le card del nostro team.
// BONUS: Utilizziamo poi gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team.
// Consigli del giorno: Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice. console.log() è nostro amico.
// Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.

let team = [
    {
        'image':'img/wayne-barnett-founder-ceo.jpg',
        'name':'Wayne Barnet',
        'role':'Founder & CEO',
    },
    {
        'image':'img/angela-caroll-chief-editor.jpg',
        'name':'Angela Caroll',
        'role':'Chief Editor',
    },
    {
        'image':'img/walter-gordon-office-manager.jpg',
        'name':'Walter Gordon',
        'role':'Office Manager',
    },
    {
        'image':'img/angela-lopez-social-media-manager.jpg',
        'name':'Angela Lopez',
        'role':'Social Media Manager',
    },
    {
        'image':'img/scott-estrada-developer.jpg',
        'name':'Scott Estrada',
        'role':'Developer',
    },
    {
        'image':'img/barbara-ramos-graphic-designer.jpg',
        'name':'Barbara Ramos',
        'role':'Office Manager',
    },
        
]

function getTeam(array){
    let cards = '';
    for(i = 0; i < array.length; i++){
    
    cards +=
    `<div class="team-card">
        <div class="card-image">
            <img src="${array[i].image}" alt="${array[i].name}"/>
        </div>
        <div class="card-text">
             <h3>${array[i].name}</h3>
            <p>${array[i].role}</p>
        </div>
    </div>`;
    }
    return cards;
}
document.querySelector('.team-container').innerHTML = getTeam(team);

// BONUS (aggiungo una card tramite valori in input)------------------------------------------------------------

const addMember = document.getElementById('addMemberButton');

addMember.addEventListener("click",
    function() {
        // prendo i valori in imput
        const name2 = document.getElementById('name').value;
        const role2 = document.getElementById('role').value;
        const image2 = document.getElementById('image').value;

        // let newArray= {'image': image2, 'name': name2, 'role': role2};

        // document.querySelector('.team-container').innerHTML +=
        // `<div class="team-card">
        //     <div class="card-image">
        //         <img src="${newArray.image}" alt="${newArray.name}"/>
        //     </div>
        //     <div class="card-text">
        //          <h3>${newArray.name}</h3>
        //         <p>${newArray.role}</p>
        //     </div>
        // </div>`;

        document.querySelector('.team-container').innerHTML +=
        `<div class="team-card">
            <div class="card-image">
                <img src="${image2}" alt="${name2}"/>
            </div>
            <div class="card-text">
                 <h3>${name2}</h3>
                <p>${role2}</p>
            </div>
        </div>`;

        //elimina il contenuto dalla casella di input
        document.getElementById('name').value = '';
        document.getElementById('role').value = '';
        document.getElementById('image').value = '';
    }
);





// sotto lascio spezzoni di alcuni dei tanti tentativi fatti prima di riuscire a finire l'esercizio -> -> ->

// console.log(getTeam(team));

// document.getElementById('addMemberButton').addEventListener('click', function(){
//     play(team);
// });

// function play(array){
//     let images = document.getElementById('image');
//     let names = document.getElementById('name');
//     let roles = document.getElementById('role');
//     array.push({
//         'image': images,
//         'name': names,
//         'role': roles,
//     },);
//     // array.image += images;
//     // array.name += names;
//     // array.name += roles;
//     return array.push;

// }
// // document.querySelector('.team-container').innerHTML = play(team);
// console.log(play(team));





// document.getElementById('addMemberButton').addEventListener('click', function(){
//     play(team);
// });

// function play(array){
    // let images = document.getElementById('image');
    // let names = document.getElementById('name');
    // let roles = document.getElementById('role');
//     array.push( {
//         'image': images,
//         'name': names,
//         'role': roles,
//     },)
//     // array.image += images;
//     // array.name += names;
//     // array.name += roles;

// }
// // document.querySelector('.team-container').innerHTML = play(team);
// console.log(play(team));



// function appendObjTo(thatArray, newObj) {
//     const frozenObj = Object.freeze(newObj);
//     return Object.freeze(thatArray.concat(frozenObj));
// }



// const newArray = appendObjTo(team, {'image': images, 'name': names, 'role': roles,});
// console.log(team);
// console.log(newArray);

// function addCard(array){
   
//     let cardContent = '';

//     for (let i = 0; i < array.length; i++) {
//         cardContent = 
//         `<div class="team-card">
//             <div class="card-image">
//                 <img src=${array[i]['image']} alt=${array[i]['name']}/>
//             </div>
//             <div class="card-text">
//                 <h3>${array[i]['name']}</h3>
//                 <p>${array[i]['role']}</p>
//             </div>
//         </div>`;
//     }
//     // return cardContent;
//     document.querySelector('.team-container').innerHTML = addCard(team);
// }


// document.getElementById('addMemberButton').addEventListener('click', function(){
//     addCard(team);
// });





// for(i = 0; i < team.length; i++){
//     document.getElementById('team-container').innerHTML +=
//     `<div class="team-card">
//         <div class="card-image">
//             <img src="${team[i].image}" alt="${team[i].name}"/>
//         </div>
//         <div class="card-text">
//              <h3>${team[i].name}</h3>
//             <p>${team[i].role}</p>
//         </div>
//     </div>`;
// }

// let card = '';
// for(i = 0; i < team.length; i++){
//     card +=`
//     <div class="team-card">
//         <div class="card-image">
//             <img
//                 src="${team[i].image}"
//                 alt="${team[i].image}"
//               />
//         </div>
//         <div class="card-text">
//             <h3>${team[i].name}</h3>
//             <p>${team[i].role}</p>
//         </div>
//     </div>
//     `
// }
// document.querySelector('.team-container').innerHTML = getTeam(team);



// let cardd = '';
// for(i = 0; i < team.length; i++){
//     cardd += getTeam(team[i]);
// }

// let teamContainer = document.getElementsByClassName('.team-container');
// teamContainer.appendChild(cardd);

