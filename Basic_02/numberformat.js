const formatter=Intl.NumberFormat('en-GB',{notation:'compact'})

let n=formatter.format(1_544)

console.log(n)