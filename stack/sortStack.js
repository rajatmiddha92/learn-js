function insertAtCorrectPos(arr,ele){
    if(!arr.length){
        arr.push(ele)
        return;
    }
    else if(arr[arr.length-1]<= ele){
         arr.push(ele)
         return
    }
    else{
        let apple=arr.pop()
        let a=insertAtCorrectPos(arr,ele)
        arr.push(apple)
    }
    return arr
}


function sortStack(arr){
    if(!arr.length){
        return
    }
    else{
        let ele=arr.pop()
        sortStack(arr)
        arr=insertAtCorrectPos(arr,ele)
    }

    return arr
}


console.log(sortStack([-10,20,5,5,-4,100,-100]))