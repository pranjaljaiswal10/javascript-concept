const intro={
    name:"Pranjal Jaiswal",
    age:23,
    city:"Bharwari"
}

const skill={
    front:"html,css,js,react",
    Baas:"firebase"
}

//spread operator
const userDetail={
    ...intro,
    ...skill
}

console.log(userDetail)

//destructuring
//1.Properties to variable
const hero={
    name:'Batman',
    realName:'Bruce wayne'
}

const {name,realName}=hero;
console.log(name,realName);//=>  Batman Brucewayne

//2.default value
// const {enemies}=hero;
// console.log(enemies) //=> undefined

//set default value
const {enemies="Joker"}=hero;
console.log(enemies); //=> Joker

//3.Alliases:create variable  of different name than the properties name
const {realName:secretName}=hero;
console.log(secretName) //=> Bruce wayne

//4. Extracting properties from nested objects
//const { nestedObjectProp: { identifier } } = expression;=>const { nestedObjectProp: { identifier } } = expression;
//const { propA: { propB: { propC: { .... } } } } = object; => multiple level of nesting


const user={
    name:'Pranjal',
    age:23,
    address:{
        city:'Bharwari'
    }
}

const {address:{city}} = user;

console.log(city) //=> 'Bharwari'

//5. Dynamic propeerty
const superHero = {
    nameofHero: 'Batman',
    realName: 'Bruce Wayne'
  };
  
  const prop = 'name';
  const { [prop]: nameofHero } = hero;
  
  console.log(nameofHero); // => 'Batman


 //function parameter destucturing 
  const heroes = [
    { name: 'Batman' },
    { name: 'Joker' }
  ];
  
  const names = heroes.map(
    function({ name }) {
      return name;
    }
  );
  
  console.log(names); // => ['Batman', 'Joker']

//loop destructuring

const users = [
    { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    },
    { 
        'name': 'Bob',
        'address': 'Canada',
        'age': 53
    },
    { 
        'name': 'Carl',
        'address': 'Bangalore',
        'age': 26
    }
];

for(let { name, age } of users) {
    console.log(`${name} is ${age} years old!`);
}