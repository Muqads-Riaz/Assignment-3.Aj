let mobiles = [
    {
        company : "Iphone",
        model : "v12" ,
        ram : "2GB" ,
        rom : "18GB",
        price : 150000
        },
        {
            company : "Iphone",
            model : "v13" ,
            ram : "2GB" ,
            rom : "18GB",
            price : 140000
            },
        {
         company : "Iphone",
         model : "v14" ,
         ram : "2GB" ,
         rom : "18GB",
         price : 160000
          },
          {
            company : "Samsung",
            model : "a20" ,
            ram : "2GB" ,
            rom : "18GB",
            price : 150000
             },
             {
            company : "Samsung",
            model : "a30" ,
            ram : "2GB" ,
            rom : "18GB",
            price : 160000
            },
            {
                company : "Samsung",
                model : "vj6" ,
                ram : "2GB" ,
                rom : "18GB",
                price : 170000
            },
          {
                    company : "Techno",
                    model : "camon15" ,
                    ram : "2GB" ,
                    rom : "18GB",
                    price : 170000
          },
         {
                        company : "Techno",
                        model : "camon16" ,
                        ram : "2GB" ,
                        rom : "18GB",
                        price : 180000
       },
        {
                            company : "Techno",
                            model : "camon17" ,
                            ram : "2GB" ,
                            rom : "18GB",
                            price : 200000
    },
]

    let mobileName = document.getElementById("mobileName");
    let mobileModel = document.getElementById("mobileModel");
    let a = mobiles.map(function(x){
    return x.company;
    })
    b = new Set(a);
    mobileName.innerHTML = " ";
    mobileName.innerHTML = "<option>Select</option>";
    b.forEach(function(value){
        mobileName.innerHTML += `<option value="${value}">${value}</option>`   
    })
        
function detail(){
    mobileModel.disabled = false;
    let mobileVersions = mobiles.filter(function(x){ 
        if(x.company == mobileName.value){
            return x.model;
        }
    });
    mobileModel.innerHTML =" ";
    mobileVersions.forEach(function(value){
        mobileModel.innerHTML += `<option value="${value.model}">${value.model}</option>`   
    })

}

function search(){
    let choosenModel = mobiles.find(function(x){
        if(x.model == mobileModel.value){
            return x;
        }
    })
    let parent = document.getElementById("parent");
    parent.innerHTML = `<b class="fs-4">Detail:</b><br>Price:${choosenModel.price}</br>Ram:${choosenModel.ram}</br>Rom:${choosenModel.rom}`
}
