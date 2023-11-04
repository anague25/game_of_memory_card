const cartes = document.querySelectorAll('.carte');
let carteRetournee = false;
let verouaillage = false;
let premiereCarte,secondeCarte;



cartes.forEach(carte => {
carte.addEventListener('click',retourneCarte);
});


function retourneCarte(){
    if(verouaillage) return ;
    console.log(this.childNodes[1].classList.toggle('active'));

    if(!carteRetournee){
        premiereCarte = this;
        carteRetournee = true;
        return;

    }
    carteRetournee = false;
    secondeCarte = this;
    
    console.log(premiereCarte,secondeCarte);

    correspondance();
}

function correspondance(){
    if(premiereCarte.getAttribute('data-attr')=== secondeCarte.getAttribute('data-attr')){
       premiereCarte.removeEventListener('click',retourneCarte);
       secondeCarte.removeEventListener('click',retourneCarte);
    }else{
        verouaillage = true;
        setTimeout(()=>{
            premiereCarte.childNodes[1].classList.remove('active');
            secondeCarte.childNodes[1].classList.remove('active');
            verouaillage = false;
        },1500)
    }
}

function aleatoire(){
    cartes.forEach(card =>{
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    })
}

aleatoire();


