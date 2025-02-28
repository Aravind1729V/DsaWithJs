const BinarySearch = (arr,target)=>{
    let start=0,end=arr.length-1;
    while(start<=end){
        let mid= Math.floor((start+end)/2);
        if(arr[mid]===target){
            return mid;
        }else if(arr[mid] > target){
            end = mid-1;
        }else{
            start = mid+1;
        }
    }
    return -1;
}
console.log(BinarySearch([1,2,3,4,5,6,7,8],5));//4


//Binary search using Recursion

const BinarySearchRec =(array1,target)=>{
    return BinarySearchUtil(array1,target,0,array1.length);
}
const BinarySearchUtil=(array1,target,start,end)=>{
    if(start>end){
        return -1;
    }
    let mid = Math.floor((start+end)/2)
    if(array1[mid]===target){
        return mid;
    }else if(array1[mid] > target){
        return BinarySearchUtil(array1,target,start,mid-1);
    }else{
        return BinarySearchUtil(array1,target,mid+1,end);
    }
}

console.log(BinarySearchRec([1,2,3,4,5,6,7,8,9,10,11],11));//10


/*
Given an array :[1,5,8,11,12]

floor and ciel value of 9

floor value of 9 will be 8 
ciel value of 9 will be 11

*/

const floorCiel =(nums,target)=>{
    let start=0,end=nums.length;
    let floor=-1,ciel=-1;
    while (start<=end) {
        let mid = Math.floor((start+end)/2);
        if(nums[mid]===target){
            floor=mid;
            ciel=mid;
            return [floor,ciel]
        }
        else if(nums[mid]>target){
                ciel = mid;
                end = mid - 1;
        }
        else{
            floor = mid;
            start = mid+1;
        }
    }
    return [ciel,floor]
}

console.log(floorCiel([1,2,4,6,7,9,10],8));//[5,4]


