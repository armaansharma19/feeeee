arr1=[71,1200,4,500];

let h=arr1.reduce((acc,cur)=>{
    if(cur>acc){
        acc=cur;
    }
    return acc;
},0)
console.log(h);