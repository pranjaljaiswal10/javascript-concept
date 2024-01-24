//map

const myNumber=[1,2,3,4,5,6,7,8,9,10];
const multipleOfTwo=myNumber.map((item)=>{
    return item*2;
})
console.log(multipleOfTwo)

const newNum=myNumber.map((num)=>num*10).map((num)=>num+1).filter((item)=>item>=40);
console.log(newNum)

//reduce
const mynum=[1,2,3]

const myTotal= mynum.reduce(function (acc,curr){
    console.log(`acc:${acc} & curr:${curr}`)
    return acc+curr;
},0)

console.log(myTotal) //=>6

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay); //=> 22996


//grouping similar item;
const items = [
    { name: 'Apple', category: 'Fruit' },
    { name: 'Onion', category: 'Vegetable' },
    { name: 'Orange', category: 'Fruit' },
    { name: 'Lettuce', category: 'Vegetable' },
  ];

 const groupedItems=items.reduce((acc,item)=>{
const category=item.category;
 if(!acc[category])
 {
    acc[category]=[]
 }
 acc[category].push(item.name)
  return acc;
 },{})

 console.log(groupedItems) //=> {Fruit:['Apple','onion'],Vegetable:['Onion,'Lecture']}


 //remove duplicate
 const list = [1, 2, 3, 1, 2, 3, 7, 8, 7];

 const noDuplicateList=list.reduce((acc,curr)=>{
    if(!acc.includes(curr))
    {
        acc.push(curr);
    }
    return acc;
 },[]);

 console.log(noDuplicateList); //=> [1,2,3,7,8]