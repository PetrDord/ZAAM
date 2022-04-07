var xhr = new XMLHttpRequest();
xhr.open("POST", "./index.php");
xhr.onload = function (){
    var j = this.response;
    console.log(j);
    j = JSON.parse(j);
    console.log(j);
    /**Podle ceny
     * j.sort(function(a, b){
      return a.cena - b.cena;
    })*/
    /** Podle Abecedy
    j.sort(function(a, b){
     if(a.nazev < b.nazev){
       return -1;
     }
     if(a.nazev > b.nazev){
       return 1;
     }
     return 0;
    })*/
    let d= "";
   for(let i=0; i < j.length; i++){
     d += j[i]['nazev'] + "<br>";
   }
   document.getElementById("demo").innerHTML = d;
};
xhr.send();
