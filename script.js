function toggleDarkmode(checkbox){
    if(checkbox.checked){
        document.body.classList.add('dark-mode');
    }
    else{
        document.body.classList.remove('dark-mode');
    }
}