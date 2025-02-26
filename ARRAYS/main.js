const arr = [1,2,3,4,"hello",{name:"aravind"},[1,2,3,]]
console.log(arr);//
const firstelement = arr[0]
const arrlength = arr.length;
const lastelement = arr[arr.length-1];
console.log(firstelement,arrlength,lastelement);
const lastelement1=arr.pop();
console.log(arr,lastelement1);//[1,2,3,4,"hello",{name:"aravind"}],[1,2,3,]this one is poped means removed
arr.push(5);
console.log(arr);//[1,2,3,4,"hello",{name:"aravind"},5]
arr.unshift(0)
console.log(arr);//[0,1,2,3,4,"hello",{name:"aravind"},5] unshift adds it at the first element
arr.shift()
console.log(arr);//[1,2,3,4,"hello",{name:"aravind"},5]

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);//[1,2,3,4,"hello",{name:"aravind"},5]
}

arr.forEach((x,i) => {//here i means index of the element remember it which is second element always
    console.log(x,arr[i])//{11,22,33,44,"hello""hello",{name:"aravind"},{name:"aravind"},55}
});

// for(let x of arr){
//     console.log(x);//[1,2,3,4,"hello",{name:"aravind"},5]
// }