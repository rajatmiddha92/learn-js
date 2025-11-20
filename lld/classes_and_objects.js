class Car{
    constructor(brandName,ModelNO){
      this.brand = brandName
      this.model = ModelNO
    }
    
    start(){
      console.log("car start")
    }
    
    shiftgear(){
      console.log("shifted gear")
    }
    
    accelerate(){
      console.log("boommmmmmmm!!")
    }
  }
  
  
  let tiago = new Car('tata',"XT")
  
  class Owner{
    constructor(carobj,name){
      this.carData = carobj;
      this.ownerName = name
    }
    
    drive(){
      this.carData.start()
      this.carData.shiftgear()
      this.carData.accelerate()
    }
    
  }
  
  let rajat = new Owner(tiago,"rajat")
  rajat.drive()
  console.log(rajat)