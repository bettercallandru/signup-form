//Aplicar estilos a formularios vacios
function applystyles (e){
    e.forEach((element) => {
        element.classList.add('input--error');     
        parent = element.parentNode;

        applyerror(parent);
    });    
}

//Agregar etiquetas de error
function applyerror (parent){    
    //mensaje de error
    let messageError = document.createElement('span');
    messageError.setAttribute('class' ,'message--little message--warning');    
    messageError.innerHTML = findmessage(parent.children[0].dataset.name);    

    //imagen de error
    let imageError = document.createElement('img');
    imageError.classList.add('icon--error');
    imageError.setAttribute('alt' ,'aviso');
    imageError.setAttribute('src' ,'https://storage.googleapis.com/drosander/images/icon/icon-error.svg');
    
    parent.append(messageError);
    parent.append(imageError);
}

//Limpiar el formulario de las etiquetas de error
function clean (elements){
    if(emptyElements.length != 0){
        elements.forEach((e) => {
            var i = 0, element;
            
            e.classList.remove('input--error');
            parent = e.parentNode;        
            while(i < 2){
                var element = parent.children[parent.children.length-1];
                parent.removeChild(element);
                i++;
            }
        });
    }    
}