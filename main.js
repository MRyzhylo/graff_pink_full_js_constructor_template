'use strict'

const menuPoint = ['Home', 'About us', 'Services', 'Contacts', '<a href="#"> <img src="https://img.icons8.com/dusk/64/000000/test-account.png"/> Login </a>'];
const subMenu = [];
const subMenu1 = [];
const subMenu2 = [];
const subMenu3 = [];
const newsObj = [
    {
        id: 1,
        photo: '',
        title: '',
        description: ''
    },
    {
        id: 2,
        photo: '',
        title: '',
        description: ''
    },
    {
        id: 3,
        photo: '',
        title: '',
        description: ''
    },
]

function Template (nameId) {
    this.container = document.querySelector(nameId);

//header charter

    this.header = document.createElement('header');
    this.topMenuDiv = document.createElement('div');
    this.topMenuDiv.className = 'top_menu_wrap';
    this.nameGraffDiv = document.createElement('div');
    this.nameGraffDiv.className = 'name_page_wrap';
    this.nameImg = document.createElement('img');
    this.nameImg.src = '../GraffPink_full_js_constructor_template/img/logo.png'
    this.loginMenuDiv = document.createElement('div');
    this.loginMenuDiv.className = 'login_menu_wrap';
    this.ulMenu = document.createElement('ul');
    this.span1 = document.createElement('span');
    this.span1.className = 'big_circle';
    this.span2 = document.createElement('span');
    this.span2.className = 'medium_circle';
    this.span3 = document.createElement('span');
    this.span3.className = 'litle_circle';
    this.h1nameOfPage = document.createElement('h1');
    this.h1nameOfPage.innerHTML = 'Welcome to Pink';
    this.pdescriptionOfPage = document.createElement('p');
    this.pdescriptionOfPage.innerHTML = 'Multichoise flower shop. We can propouse you all what you want!'

// content charter

    this.topContentDiv = document.createElement('div');
    this.topContentDiv.className = 'top_content_wrap';
    this.h1mainDescription = document.createElement('h1');
    this.h1mainDescription.innerHTML = 'Lorem ipsum is simply pimpli';
    this.pmainDescription = document.createElement('p');
    this.pmainDescription.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci molestiae placeat quis autem. Impedit beatae amet consectetur esse enim, aliquid asperiores pariatur et. Nobis quo dolorem aliquam reiciendis debitis. Molestiae!';
    this.iconsImgDiv = document.createElement('div');
    this.iconsImgDiv.className = 'icons_wrap';
    this.ticketsIcon = document.createElement('img');
    this.ticketsIcon.src = 'https://img.icons8.com/dusk/64/000000/two-tickets.png'
    this.cameraIcon = document.createElement('img');
    this.cameraIcon.src = 'https://img.icons8.com/dusk/64/000000/slr-camera.png';
    this.partyIcon = document.createElement('img');
    this.partyIcon.src = 'https://img.icons8.com/dusk/64/000000/confetti.png';
    this.deviceIcon = document.createElement('img');
    this.deviceIcon.src = 'https://img.icons8.com/dusk/64/000000/smartphone-tablet.png';

    this.bottomContentDiv = document.createElement('div');
    this.bottomContentDiv.className = 'bottom_content_wrap';

// footer charter

    this.footer = document.createElement('footer');


    this.container.appendChild(this.header);
    this.container.appendChild(this.topContentDiv);
    this.container.appendChild(this.bottomContentDiv);
    this.container.appendChild(this.footer);

    this.header.appendChild(this.topMenuDiv);
    this.header.appendChild(this.span1);
    this.header.appendChild(this.span2);
    this.header.appendChild(this.span3);
    this.header.appendChild(this.h1nameOfPage);
    this.header.appendChild(this.pdescriptionOfPage);
    this.topMenuDiv.appendChild(this.nameGraffDiv);
    this.nameGraffDiv.appendChild(this.nameImg);
    this.topMenuDiv.appendChild(this.loginMenuDiv);
    this.loginMenuDiv.appendChild(this.ulMenu);

    this.topContentDiv.appendChild(this.h1mainDescription);
    this.topContentDiv.appendChild(this.pmainDescription);
    this.topContentDiv.appendChild(this.iconsImgDiv);
    this.iconsImgDiv.appendChild(this.ticketsIcon);
    this.iconsImgDiv.appendChild(this.cameraIcon);
    this.iconsImgDiv.appendChild(this.partyIcon);
    this.iconsImgDiv.appendChild(this.deviceIcon);

    this.bottomContentDiv.appendChild();

    this.subMenu = function (ulName, arr) {
        this.ul = ulName;

        for (let menuItem of arr) {
            this.li = document.createElement('li');
            this.li.innerHTML = `${menuItem}`;
            this.ul.appendChild(this.li);
        }
    }.bind(this)
    this.subMenu (this.ulMenu, menuPoint);
}

new Template ('#container')