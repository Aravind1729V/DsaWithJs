// Sorting in Js

// sort an array
const arr = [-2,-7,1000,5]
console.log(arr.sort((a,b)=>a-b));//ascending order (4) [-7, -2, 5, 1000]
console.log(arr.sort((a,b)=>b-a));//descending order (4) [1000, 5, -2, -7]

const strArr = ["mango","apple","banana"]
console.log(strArr.sort());//(3) ['apple', 'banana', 'mango']

//sort a string 
const str = "Aravind"
console.log(str.split(""));//['A', 'r', 'a', 'v', 'i', 'n', 'd']
console.log(str.split("").sort());//['A', 'a', 'd', 'i', 'n', 'r', 'v']
console.log(str.split("").sort().join(""));//Aadinrv

// //Bubble sort //visualgo.net

const bubbleSort = (arr)=>{
    let swapp, swapcount=0;
    do {
        swapp=false;
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){ // the symbol > is used to sort in ascending order here if we use < symbol the array sorted in descending order
                let temp = arr[i];
                arr[i]=arr[i+1];
                arr[i+1]= temp;
              // [arr[i+1],arr[i]]=[arr[i],arr[i+1]]
                swapp=true
                swapcount++;
            }
        }        
    } while (swapp);
    console.log(swapcount);//6
    
    return arr
}
console.log(bubbleSort(arr));// [-7, -2, 5, 1000]


// SELECTION SORT

const SelectionSort = (arr)=>{

    for(let i=0;i<arr.length-1;i++){
        let minIndex=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[minIndex]>arr[j]){
                minIndex=j;
            }
            [arr[minIndex],arr[i]]=[arr[i],arr[minIndex]]
        }
    }
return arr;

}
console.log(SelectionSort(arr));


//prime numbers 
const isPrime = (num)=>{
   let count=0;
   if(num===1){
    return false;
   }
   for(let i=2;i<=num/2;i++){
    if(num%i==0){
        count=count+1;
    }
   }
   if(count === 0){
    return true;
   }
   else {
    return false
   }
}
console.log(isPrime(5));

const primenumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,15,17,19]
const prime=[]
let j=0;
for(let i=0;i<=primenumbers.length-1;i++){
    if(isPrime(primenumbers[i])===true){
        prime[j]=primenumbers[i];
        j=j+1;
    }
}
console.log(prime);

