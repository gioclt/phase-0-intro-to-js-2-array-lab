const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push("Ralph");
}

function destructivelyPrependCat(Bob) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(Bob) {
    cats.pop("Bob");
}

function destructivelyRemoveFirstCat(Milo) {
    cats.shift("Milo");
}

let appendCat = Broom => [...cats, "Broom"];

let prependCat = Arnold => ["Arnold", ...cats];

let removeLastCat = () => cats.slice(0, cats.length-1);

let removeFirstCat = () => cats.slice(1);




    
