function keresev(){
    document.getElementById("hiba").innerHTML = ""
    var ev=document.getElementById("beev").value
    if (isNaN(ev)) {
        //alert("Számot adj meg!")
        document.getElementById("hiba").innerHTML = "Nem számot adtál meg!"
    }
    else if(ev < 1901 || ev > 2022){
        document.getElementById("hiba").innerHTML = "1901 és 2022 között add meg az évet!"
        
    }
    else{
    var sz='<ul>'
    for (const elem of tomb.prizes) {
        if (elem.year==ev)
        {
            sz+=`<li>${elem.category}`
            if (typeof elem.laureates === "undefined"){
                sz += "<br>"
                sz += "Nem ismert!"
            } 
            else{
                for (const szemely of elem.laureates) {
                    sz+=`<p>${szemely.firstname} ${szemely.surname}</p>`
                }  
            }       
                  
                    
                    
            sz+=`</li> `
        }
    }
    sz+='</ul>'
    document.getElementById("talalatev").innerHTML=sz
    }
}