function insertAtBottom(arr,elem){
    if(!arr.length){
        arr.push(elem)
        return
    }
    else{
        let a=arr.pop()
        insertAtBottom(arr,elem)
        arr.push(a)
    }
    return arr
}

function reverseStack(arr){
    if(!arr.length){
        return
    }
    else{
        let a=arr.pop()
        reverseStack(arr)
        arr=insertAtBottom(arr,a)

    }

    return arr
}

console.log(reverseStack([1,2,3,4,5,6]))