//1) HOW DO YOU CHECK IF AN ELEMENT EXISTS IN AN ARRAY OR NOT ?
const arr1 = [1,2,3,4,"hello",{name:"aravind"},[1,2,3,]]
//console.log(arr1);
const findelement =(arr1,target) =>{
    for(let x of arr1){
        if(x === target){
            return true;
        }
    }
    return false
}
console.log(findelement(arr1,"hello"));//true
console.log(findelement(arr1,"h"));//false
console.log(arr1.includes("hello"));//true


//2) How do you check element is exists in an array and return index if exists

const findelementIndex =(arr1,target) =>{
    for(let i=0;i<arr1.length;i++){
        if(arr1[i] === target){
            return i;
        }
    }
    return -1;
}
console.log(findelementIndex(arr1,4));
console.log(arr1.indexOf("hello"));

//3) How to delete , add & update element from specific index
console.log(arr1);//[1,2,3,4,"hello",{name:"aravind"},[1,2,3,]]
arr1.splice(1,3)
console.log(arr1);//[1,"hello",{name:"aravind"},[1,2,3,]] deletes the elements according to index from 1 to 3 
arr1.splice(1,0,2,3,4,)// first place in splice method represents index second place deletes and from third place it will add elements
console.log(arr1);//[1,2,3,4,"hello",{name:"aravind"},[1,2,3,]]
arr1.splice(1,3,5,6,7)
console.log(arr1);//[1,5,6,7,"hello",{name:"aravind"},[1,2,3,]]

//splice vs slice
//splice changes the original array and slice doesn't changes the original array
const subArr = arr1.slice(1,4)//slice(start_index,end_index)
console.log(subArr);// [5,6,7] only 3 elements remember it 
console.log(arr1);//[1,5,6,7,"hello",{name:"aravind"},[1,2,3,]]



//sallow Copy of array
const arrB = arr1;
arrB.splice(1,3)
console.log(arrB,arr1);// sallow copy means if we perfrom any operation on copied array it will effect to original array
                     //[1,"hello",{name:"aravind"},[1,2,3,]][1,"hello",{name:"aravind"},[1,2,3,]]


//Deep copy of array
const arrC=[...arr1]
const arrD=Array.from(arr1)
const arrE = arr1.concat();
arrC.splice(1,3)
arrD.splice(1,3)
arrE.splice(1,3)
console.log(arrC,arr1);//[1][1,"hello",{name:"aravind"},[1,2,3,]]
console.log(arrD);//[1]
console.log(arrE);//[1]


//How to add two array in javaScript
const newArr=[...arr1,...arrE]
const newArr1=arr1.concat(arrE)
console.log(newArr);//[1,"hello",{name:"aravind"},[1,2,3,],1]
console.log(newArr1);//[1,"hello",{name:"aravind"},[1,2,3,],1]


//How to check if two arrays are equal ?
const isArrayEqual=(arr2,arr3)=>{
    // if(arr2.length !== arr3.length){
    //     return false;
    // }
    // for(let i=0;i<arr2.length;i++){
    //     if(arr2[i] !== arr3[i]){
    //         return false;
    //     }
    // }
    // return true
    return arr2.length===arr3.length && arr2.every((ele,i)=>arr2[i]===arr3[i])
}
console.log(isArrayEqual([1,2,3],[1,2,3]));//true

// How to sort an array in ascending and decending order
const x =[1,4,5,0,-8,-9,-3]
x.sort()
console.log(x);//[-3, -8, -9, 0, 1, 4, 5]

x.sort((a,b)=>b-a)
console.log(x);//[5, 4, 1, 0, -3, -8, -9]

x.reverse()
console.log(x);// [-9, -8, -3, 0, 1, 4, 5]


//Map filter and reduce

const newMapArr = x.map((ele,i)=>ele*ele)
console.log(newMapArr);//[81, 64, 9, 0, 1, 16, 25]

const positivenumbers = x.filter((ele,i)=>ele>0)
console.log(positivenumbers); //[1, 4, 5]

const SumOfArr = positivenumbers.reduce((acc,ele)=>acc + ele,0) //0 is the index value  if we don't give any value it takes from first value which meanx 0th index.
console.log(SumOfArr);

//Flat
const y = [1,2,[3,4,[5,6]],7,8]
const flattedArray= y.flat(1)//
console.log(flattedArray);//[1, 2, 3, 4, [5,6], 7, 8]
const flattedArray2=y.flat(2)
console.log(flattedArray2);// [1, 2, 3, 4, 5, 6, 7, 8]

//filter vs find
const positivenumber = x.find((ele,i)=>ele>0)
console.log(positivenumber);//1
