function manipulateObject() {
    const obj = { name: 'Tatty', age: 19, city: 'Osh' };
    
    
    obj.country = 'KG';
    
    
    obj.age = 20;
    
   
    delete obj.city;
    
    document.getElementById("result").textContent = JSON.stringify(obj);
}
