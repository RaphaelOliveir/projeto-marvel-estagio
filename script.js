function abrirTab(idTab){

    var contents = document.getElementsByClassName('content'); 

    for (var i = 0; i < contents.length; i++) 
    {
        contents[i].style.display = 'none'; 
    }

    document.getElementById(idTab).style.display = 'flex'; 
}