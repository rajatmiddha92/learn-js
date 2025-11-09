class Stack{
    constructor(size){
        this.top=-1
        this.stack=new Array(size)
        this.end=size
    }

    pushone(data){
       
        if(this.top<this.end-1){
            this.top++
            this.stack[this.top]=data
        }
        else{
            console.log('stackone nout enough space')
        }
    }

    pushTwo(data){
        if(this.top<this.end-1){
            this.stack[this.end-1]=data
            this.end--
        
        }
        else{
            console.log('stack 2 no space')
        }
        
    }

    popOne(){
        if(this.top>-1){
            let elem= this.stack[this.top]
            delete this.stack[this.top]
            this.top--
            return elem
        }
        else{
            console.log('no elem')
            return -1
        }
    }

    poptwo(){
        if(this.end<this.stack.length){
            delete this.stack[this.end]
            this.end++
        }
        else{
            console.log('no elemnt to pop')
        }
    }
}

let a= new Stack(7)

a.pushone(5)


a.pushTwo(15)
a.pushone(33)
a.pushone(32)
a.pushone(31)
a.pushone(30)
a.pushTwo(66)
a.pushTwo(99)
a.pushone(105)
a.popOne()
a.poptwo()
a.poptwo()
a.poptwo()




console.log(a.stack)