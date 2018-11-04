'use strict';

var wynik_uzytkownika = 0;
var wynik_komputera = 0;
var wynik_uzytkownika_span = document.getElementById("wynik_uzytkownika");
var wynik_komputera_span = document.getElementById("wynik_komputera");
var tablica_wynikow_div = document.querySelector(".tablica_wynikow");
var output_p = document.querySelector(".output > p");
var paper_div = document.getElementById("PAPER");
var rock_div = document.getElementById("ROCK");
var scissors_div = document.getElementById("SCISSORS");



function pobierz_wyborKomputera(){
    var wybor_komputera = ['PAPER', 'ROCK', 'SCISSORS'];
    var losowanieLiczby = Math.floor(Math.random() * 3);
    return wybor_komputera[losowanieLiczby];
}

function wygrana(wybor_uzytkownika, wybor_komputera){
    wynik_uzytkownika++;
    wynik_uzytkownika_span.innerHTML = wynik_uzytkownika;
    wynik_komputera_span.innerHTML = wynik_komputera;
    output_p.innerHTML = wybor_uzytkownika + " zabija " + wybor_komputera + ". Wygrywasz!";
}

function przegrana(wybor_uzytkownika, wybor_komputera) {
    wynik_komputera++;
    wynik_uzytkownika_span.innerHTML = wynik_uzytkownika;
    wynik_komputera_span.innerHTML = wynik_komputera;
    output_p.innerHTML = wybor_uzytkownika + " zabija " + wybor_komputera + ". Przegrywasz!";
}
    
    
function remis(wybor_uzytkownika, wybor_komputera) {
    output_p.innerHTML = wybor_uzytkownika + " zabija " + wybor_komputera + ". Remis!";
}
    
    
     
 
    function gra(wybor_uzytkownika){
        var wybor_komputera = pobierz_wyborKomputera();
        switch (wybor_uzytkownika + wybor_komputera){
            case "ROCKSCISSORS":
            case "PAPERROCK":
            case "SCISSORSPAPER":
                wygrana(wybor_uzytkownika, wybor_komputera);
                break;
            case "ROCKPAPER":
            case "PAPERSCISSORS":
            case "SCISSORSROCK":
                przegrana(wybor_uzytkownika, wybor_komputera);
                break;
            case "ROCKROCK":
            case "PAPERPAPER":
            case "SCISSORSSCISSORS":
                remis(wybor_uzytkownika, wybor_komputera);
                break;
        }
        
    }
    
    
    
    function ruch(){
        paper_div.addEventListener('click', function(){
            gra('PAPER');
            
        })
        
        rock_div.addEventListener('click', function(){
            gra('ROCK');
        })
        
        scissors_div.addEventListener('click', function(){
            gra('SCISSORS');
        })
        
    }
        
        ruch();