//Validacion del formulario

function validacion (e){            
    clean(emptyElements);
    emptyElements = [];
    if(vacio(inputs)){              
        e.preventDefault();  
        searchInputs(inputs);                
    }
}

function vacio (elements){    
    for(var i = 0; i < elements.length; i++){
        if(elements[i].value == ""){
            return true;
        }        
    }
    return false;
}

//Buscar inputs vacios

function searchInputs (elements){
    for(var i = 0; i < elements.length; i++){
        if(elements[i].value == ""){
            emptyElements.push(elements[i]);            
        }        
    }
    applystyles(emptyElements);
}

//Comparar el metadato identificador del input con el array form para obtener el mensaje

function findmessage (iddato){    
    var message;
    form.forEach((e) => {
        if(iddato === e.type){
            message = e.message;
        }
    });    
    return message;
}