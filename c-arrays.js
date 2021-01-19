// ==========================================
// 1. Declareer een variabele en sla daar een array met vier jaartallen in op.              // bijv. 2020, 2019, 2018 en 2017
// ==========================================

let  year = [2020,2019,2018,2017];
     year.length
     console.log(year.length)// 4
     console.log(year) //hele array
     console.log(year[2])// 2018


// ==========================================
// 2. Declareer een variabele en sla daar een array met drie van jouw hobbies in op.         // bijv. schaken, koekjes eten en muziek luisteren
// ==========================================
let hobbies = ["sports", "reading","motor"]
    console.log(hobbies)

// ==========================================
// 3a. Declareer een variabele met daarin een array met de waardes 3, 4, 5, 7 en 2
// 3b. Log de waarde 3 uit de array in de terminal                                          // geeft 3
// ==========================================
let nummerreeks =[3,4,5,6,7,2]
    console.log(nummerreeks[0])
    console.log (nummerreeks[nummerreeks.length -1] ) //geeft altijd de laatste uit de reeks
// ==========================================
// 4a. Declareer een variabele met daarin een array met de waardes groen, geel, rood, paars, blauw en oranje
// 4b. Log de waarde blauw uit de array in de terminal                                      // geeft blauw
// 4c. Log de waarde geel uit de array in de terminal                                       // geeft geel
// ==========================================
let colors =["groen","geel","rood","paars","blauw","oranje",]

   console.log(colors)
   console.log(colors[1])
   console.log(colors[4])

// ==========================================
// 5a. Declareer een variabele met daarin een array met de waardes 21, 22, 23, 25, 25
// 5b. Pas een van de items in de array aan zodat de cijferreeks netjes doorloopt
// 5c. Log de de array in de terminal                                                       // geeft [ 21, 22, 23, 24, 25 ]
// ==========================================
let reeks =[21,22,23,25,25]
    reeks[3]=24
    console.log(reeks)
// ==========================================
// 6a. Declareer een variabele met daarin een array met de waardes bladerdeeg, knoflook, spinazie
// 6b. Verander daarna de waarde bladerdeeg in lasagne bladen
// 6c. Log de de array in de terminal                                                       // geeft [ 'lasagne bladen', 'knoflook', 'spinazie' ]
// 6d. Log de lengte van de array in de terminal                                            // geeft 3
// ==========================================
let ingredienten =["bladerdeeg","knoflook","spinazie"]
    ingredienten[0]="lasagne bladen"
    ingredienten.length
    console.log(ingredienten)