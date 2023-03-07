function ToggleMenu(displayState){
    const nav =document.getElementById('header_nav')
    const closeicon=document.getElementById('close_icon')

    nav.style.display=displayState;
    closeicon.style.display=displayState
}

// coding hamburger menu 