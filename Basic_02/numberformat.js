const formatter=Intl.NumberFormat('en-GB',{notation:'compact'})

let n=formatter.format(1_544)

const numberFormatter=new Intl.RelativeTimeFormat('en')

const diff=new Date()- new Date('4/18/2024')

const x=numberFormatter.format(-diff/(1000*60*60*24),'days')

console.log(x)