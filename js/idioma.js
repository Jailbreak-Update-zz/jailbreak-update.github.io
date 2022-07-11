const btnSwitch = document.querySelector('#switchen');


btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('en');
    btnSwitch.classList.toggle('active');

    if(document.body.classList.contains('en')){
        localStorage.setItem('en-mode', 'true');
        location.href="en/index.html";
    } else{
        localStorage.setItem('en-mode', 'false');
    }
});

if (localStorage.getItem('en-mode') === 'true') {
   location.href="en/index.html";
   
} 
