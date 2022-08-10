/*!
* Start Bootstrap - Creative v7.0.6 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    const serviceMenu=document.getElementById('dropdownMenuLink')
    const sandwich = document.querySelector('button.navbar-toggler')
    const mobileDropdownMenu=document.getElementById('mobiledropdownMenu')
    const navResponse=document.getElementById('navbarResponsive')

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    //CODE FOR SERVICES MENU CONTROLLED HERE
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none' && responsiveNavItem !== serviceMenu) {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    // new SimpleLightbox({
    //     elements: '#portfolio '
    // });

});

const serviceMenu=document.getElementById('dropdownMenuLink')
const sandwich=document.querySelector('button.navbar-toggler')
const mobileDropdownMenu=document.getElementById('mobiledropdownMenu')
const navResponse=document.getElementById('navbarResponsive')
const purchaseCheck=document.getElementById('purchase-check')
const refiCheck = document.getElementById('refi-check')

const mortgageBalance=document.getElementById('mortgage-balance')
const estimatedValue=document.getElementById('estimated-value')
const preferredAmount=document.getElementById('preferred-amount')
const purchasePrice=document.getElementById('purchase-price')
purchasePrice.style.display="block"
preferredAmount.style.display="block"


// QUOTE FORM CONTROL FOR PURCHASE OR REFI CONDITIONAL //

if (purchaseCheck.checked !==true){
    purchasePrice.style.display="none"
    preferredAmount.style.display="none"
}

if (refiCheck.checked==true){
    estimatedValue.style.display="block"
    mortgageBalance.style.display="block"
}

purchaseCheck.onclick=function() { 
    estimatedValue.style.display="none"
    mortgageBalance.style.display="none"
    purchasePrice.style.display="block"
    preferredAmount.style.display="block"
}

refiCheck.onclick=function(){
    purchasePrice.style.display="none"
    preferredAmount.style.display="none"
    estimatedValue.style.display="block"
    mortgageBalance.style.display="block"
}

   


       
  

    // function scoop(event) {
    // // event.preventDefault()
    // serviceMenu.ariaExpanded=true
    // // serviceMenu.classList.remove()
    // serviceMenu.classList.add('show')


// serviceMenu.onclick=function(event){event.preventDefault()}