'use strict'

const menuPoint = ['Home', 'About us', 'Services', 'Contacts', '<a href="#"> <img src="https://img.icons8.com/dusk/64/000000/test-account.png"/> Login </a>'];
const subMenu = ['Android', 'Apps', 'Articles', 'Backgrounds', 'Blogger', 'Books', 'Codding'];
const subMenu1 = ['Freebies', 'Greetings', 'Icons', 'Illustrator', 'Inspiration', 'iPad', 'iPhone'];
const subMenu2 = ['Drupal', 'Fonts', 'Freebies', 'Greetings', 'Icons', 'Illustrator', 'Inspiration'];
const subMenu3 = ['JQuery', 'Magento', 'Mobile', 'Photoshop', 'Plugins', 'Resource', 'Template'];
const newsObj = [
    {
        id: 1,
        photo: '../GraffPink_full_js_constructor_template/img/tulip.jpg',
        title: 'Fun facts about flowers',
        description: 'Tulip bulbs were more valuable than gold in Holland in the 1600s. Tulip bulbs can be substituted for onions in a recipe.'
    },
    {
        id: 2,
        photo: '../GraffPink_full_js_constructor_template/img/asters.jpg',
        title: 'Fun facts about flowers',
        description: 'Ancient civilizations burned aster leaves to ward off evil spirits.  Hundreds of years ago, when Vikings invaded Scotland, they were slowed by patches of wild thistle, allowing the Scots time to escape. Because of this, the wild thistle was named Scotland’s national flower.'
    },
    {
        id: 3,
        photo: '../GraffPink_full_js_constructor_template/img/lotus.jpg',
        title: 'Fun facts about flowers',
        description: 'The lotus was considered a sacred flower by ancient Egyptians and was used in burial rituals. This flower blooms in rivers and damp wetlands, but may lie dormant for years during times of drought, only to rise again with the return of water. Egyptians viewed it as a symbol of resurrection and eternal life.'
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
    this.footerContent = document.createElement('div');
    this.footerContent.className = 'footer_content_wrap';
    this.subMenuDiv1 = document.createElement('div');
    this.subMenuDiv1.className = 'sub_menu_wrap';
    this.subMenuDiv2 = document.createElement('div');
    this.subMenuDiv2.className = 'sub_menu_wrap';
    this.subMenuDiv3 = document.createElement('div');
    this.subMenuDiv3.className = 'sub_menu_wrap';
    this.subMenuDiv4 = document.createElement('div');
    this.subMenuDiv4.className = 'sub_menu_wrap';
    this.socialMediaDiv = document.createElement('div');
    this.socialMediaDiv.className = 'social_media_wrap';
    this.h1Sub1 = document.createElement('h1');
    this.h1Sub1.innerHTML = 'Sub menu';
    this.h1Sub2 = document.createElement('h1');
    this.h1Sub2.innerHTML = 'Sub menu';
    this.h1Sub3 = document.createElement('h1');
    this.h1Sub3.innerHTML = 'Sub menu';
    this.h1Sub4 = document.createElement('h1');
    this.h1Sub4.innerHTML = 'Sub menu';
    this.ulSubMenu1 = document.createElement('ul');
    this.ulSubMenu2 = document.createElement('ul');
    this.ulSubMenu3 = document.createElement('ul');
    this.ulSubMenu4 = document.createElement('ul');
    this.sMediaImg1 = document.createElement('img');
    this.sMediaImg1.src = 'https://img.icons8.com/material-two-tone/24/000000/instagram-new.png';
    this.sMediaImg2 = document.createElement('img');
    this.sMediaImg2.src = 'https://img.icons8.com/material-two-tone/24/000000/facebook-new.png';
    this.sMediaImg3 = document.createElement('img');
    this.sMediaImg3.src = 'https://img.icons8.com/material-two-tone/24/000000/pinterest.png';
    this.sMediaImg4 = document.createElement('img');
    this.sMediaImg4.src = 'https://img.icons8.com/material-two-tone/24/000000/telegram-app.png';
    this.pCopyright = document.createElement('p');
    this.pCopyright.innerHTML = 'Copyright &#169; 1990 - 2020 MRyzhylo';
    

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

    this.footer.appendChild(this.footerContent);
    this.footerContent.appendChild(this.subMenuDiv1);
    this.footerContent.appendChild(this.subMenuDiv2);
    this.footerContent.appendChild(this.subMenuDiv3);
    this.footerContent.appendChild(this.subMenuDiv4);
    this.footerContent.appendChild(this.socialMediaDiv);
    
    this.subMenuDiv1.appendChild(this.h1Sub1);
    this.subMenuDiv2.appendChild(this.h1Sub2);
    this.subMenuDiv3.appendChild(this.h1Sub3);
    this.subMenuDiv4.appendChild(this.h1Sub4);
    this.subMenuDiv1.appendChild(this.ulSubMenu1);
    this.subMenuDiv2.appendChild(this.ulSubMenu2);
    this.subMenuDiv3.appendChild(this.ulSubMenu3);
    this.subMenuDiv4.appendChild(this.ulSubMenu4);
    this.socialMediaDiv.appendChild(this.sMediaImg1);
    this.socialMediaDiv.appendChild(this.sMediaImg2);
    this.socialMediaDiv.appendChild(this.sMediaImg3);
    this.socialMediaDiv.appendChild(this.sMediaImg4);
    this.socialMediaDiv.appendChild(this.pCopyright);


    this.subMenu = function (ulName, arr) {
        this.ul = ulName;

        for (let menuItem of arr) {
            this.li = document.createElement('li');
            this.li.innerHTML = `${menuItem}`;
            this.ul.appendChild(this.li);
        }
    }.bind(this)
    this.subMenu (this.ulMenu, menuPoint);
    this.subMenu (this.ulSubMenu1, subMenu);
    this.subMenu (this.ulSubMenu2, subMenu1);
    this.subMenu (this.ulSubMenu3, subMenu2);
    this.subMenu (this.ulSubMenu4, subMenu3);

    this.contentMenu = function (divName, obj) {
        this.mainDiv = divName;
        for (let val of obj) {
            this.div = document.createElement('div');
            this.div.className = 'img_wrap';
            this.div1 = document.createElement('div');
            this.div1.className = 'desc_wrap';
            this.img = document.createElement('img');
            this.img.src = `${val.photo}`;
            this.h1 = document.createElement('h1');
            this.h1.innerHTML = `${val.title}`;
            this.p = document.createElement('p');
            this.p.innerHTML = `${val.description}`;
            this.div.appendChild(this.img);
            this.div.appendChild(this.div1);
            this.div1.appendChild(this.h1);
            this.div1.appendChild(this.p);
            this.mainDiv.appendChild(this.div);
        }
        
    }
    this.contentMenu (this.bottomContentDiv, newsObj);
}

new Template ('#container')