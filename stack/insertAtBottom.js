let arr=[1,2,3,4,5,6]


function insertAtBottom(arr,elem)
{
  
  if(!arr.length){
    arr.push(elem)
    return;
  }
  else{
    let num=arr.pop()
    insertAtBottom(arr,elem)
    arr.push(num)
  }
  
  return arr
  
}

console.log(insertAtBottom(arr,0))