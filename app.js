class Banks{
    constructor(){
        
    }

 async getData(city){
        const data = await fetch(`https://api.techm.co.in/api/branch/${city}`)
        const res = data.json() //Get the JSON Data from the o/p data
        return  res //Returns an Promise
    }
}