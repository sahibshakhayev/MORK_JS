// Десериализовать JSON файл при этом устоновливая пол небинарных undefined, убрать всех небинарных и занова записать в JSON
let persons= `[{"id":1,"first_name":"Dale","last_name":"Blenkin","email":"dblenkin0@pen.io","gender":"Female"},
{"id":2,"first_name":"Georgeanna","last_name":"Seiffert","email":"gseiffert1@mysql.com","gender":"Female"},
{"id":3,"first_name":"Reider","last_name":"Gabbatt","email":"rgabbatt2@apache.org","gender":"Male"},
{"id":4,"first_name":"Caz","last_name":"Kirvell","email":"ckirvell3@webnode.com","gender":"Male"},
{"id":5,"first_name":"Casandra","last_name":"Spehr","email":"cspehr4@domainmarket.com","gender":"Female"},
{"id":6,"first_name":"Brittni","last_name":"Antonoczyk","email":"bantonoczyk5@adobe.com","gender":"Female"},
{"id":7,"first_name":"Michale","last_name":"Kensitt","email":"mkensitt6@github.com","gender":"Genderqueer"},
{"id":8,"first_name":"Boigie","last_name":"Vautre","email":"bvautre7@prweb.com","gender":"Male"},
{"id":9,"first_name":"Emmy","last_name":"Presnell","email":"epresnell8@lycos.com","gender":"Male"},
{"id":10,"first_name":"Cecile","last_name":"Kinforth","email":"ckinforth9@irs.gov","gender":"Female"},
{"id":11,"first_name":"Melany","last_name":"Ledrun","email":"mledruna@mac.com","gender":"Female"},
{"id":12,"first_name":"Vernon","last_name":"Sommerton","email":"vsommertonb@discovery.com","gender":"Male"},
{"id":13,"first_name":"Osmond","last_name":"Buxcey","email":"obuxceyc@github.com","gender":"Male"},
{"id":14,"first_name":"Lexie","last_name":"Jermin","email":"ljermind@bloglines.com","gender":"Female"},
{"id":15,"first_name":"Shalne","last_name":"Libby","email":"slibbye@163.com","gender":"Female"},
{"id":16,"first_name":"Rafaello","last_name":"Keford","email":"rkefordf@quantcast.com","gender":"Male"},
{"id":17,"first_name":"Manon","last_name":"Giacoboni","email":"mgiacobonig@mit.edu","gender":"Female"},
{"id":18,"first_name":"Cathe","last_name":"Delacroux","email":"cdelacrouxh@mashable.com","gender":"Female"},
{"id":19,"first_name":"Tasha","last_name":"Hearley","email":"thearleyi@state.gov","gender":"Female"},
{"id":20,"first_name":"Cacilie","last_name":"Nealey","email":"cnealeyj@reverbnation.com","gender":"Non-binary"}]`
    
let personsArray = JSON.parse(persons);


for (let person of personsArray) {
  if (person.gender === "Non-binary" || person.gender === "Genderqueer") {
    person.gender = undefined;
  }
}


let binaryPersons = personsArray.filter(person => person.gender !== undefined);


let binaryPersonsJSON = JSON.stringify(binaryPersons);


console.log(binaryPersonsJSON);