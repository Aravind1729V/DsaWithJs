//Linear search in javaScript // LINEAR SEARCH IN ARRAYS
const arr =[1,2,6,9,0,-5]

const linearsearch = (arr,target)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i;                       //TIME COMPLEXITY OF THIS IS O(n) we consider worst time complexity
        }
    }
    return -1;// -1 indicates that given element is not in the array
}
console.log(linearsearch(arr,9));//3
console.log(arr.includes(9));//true
console.log(arr.indexOf(9));//3
console.log(arr.find((num)=>num>0));//1
console.log(arr.findIndex((num)=>num<0));//5

// finding subString using linear search //LINEAR SEARCH IN STRING
var subStr = function(mainString,subString){
    let m=mainString.length, n=subString.length;
    for(let i=0;i<=m-n;i++){
        let flag=true;
        for(let j=0;j<n;j++){
            if(mainString[i+j]!==subString[j]){  //TIME COMPLEXITY IS O(M*N)---->worst time complexity
                flag=false;                                   //Best time complexity O(1)
                break;
            }
        }
        if(flag){//flag === true
            return i;
        }
    }
}
console.log(subStr("ARAVIND","AVIN"));//2
//string methods : match(), search(), indexof(),includes()
let nam = "aravind_ACHARI"
let subStrin = "ACH"
console.log(nam.match(subStrin));//['ACH', index: 8, input: 'aravind_ACHARI', groups: undefined]
console.log(nam.search(subStrin));//8
console.log(nam.indexOf(subStrin));//8
console.log(nam.includes(subStrin));//true

//Binary search








