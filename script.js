let ajouter = document.querySelector('.ajouter');
let tableau = document.querySelector('table');
let i = 1;

ajouter.addEventListener('click', ajouterPersonne);

function ajouterPersonne(){
    let nom = document.querySelector('.nom').value;
    let prenom = document.querySelector('.prenom').value;
    let cnie = document.querySelector('.cnie').value;
    
    // ajouter les infos de la personne dans le tableau
    let nomCellule = tableau.rows[i].cells[0];
        nomCellule.textContent = nom;
    
    let prenomCellule = tableau.rows[i].cells[1];
        prenomCellule.textContent = prenom;
    
    let cnieCellule = tableau.rows[i].cells[2];
        cnieCellule.textContent = cnie;
    
    i++;
    
    // effacer les champs du formulaire
    document.querySelector('.nom').value = "";
    document.querySelector('.prenom').value = "";
    document.querySelector('.cnie').value = "";
}
