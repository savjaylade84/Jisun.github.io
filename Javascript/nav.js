    const mobileDropNav = ()=> {
        // get the hidden container
        let container = document.querySelector('.show-hide-text');

        //add  click event on this tag without putting onclick in tag
        container.addEventListener('click',()=>{

            // get the dom needed to show drop down menu list
            let nav = {
                wrapper: document.querySelector('.menu-wrapper'),
                content : document.querySelector('.nav-button-menu'),
                text : document.querySelector('.button-open-close'),
                container : document.querySelector('.show-hide-text'),
                logo: document.querySelector('.mobile-logo'),
                show_hide: document.querySelector('.show-hide')
            };
            
            // hide the menu list
            if(nav.content.style.display == 'flex'){
                nav.text.innerText = 'Menu';
                nav.container.style.textAlign = 'right';
                nav.content.style.transition = "all 3s";
                nav.content.style.display = 'none';
                nav.logo.style.display = 'flex';
                nav.wrapper.style.margin = '0';
                nav.show_hide.style.margin = '0';
            }
            // show the menu list
            else{
                nav.text.innerText = 'Close';
                nav.container.style.textAlign = 'center';
                nav.content.style.transition= "all 3s";
                nav.content.style.display = 'flex';
                nav.logo.style.display = 'none';
                nav.wrapper.style.margin = '0 auto';
                nav.show_hide.style.margin = '1em 0';
            }  

        });

    };

    const scroll = () =>{
        let content = document.querySelectorAll('.content section');
        let nav_button = document.querySelectorAll('.nav-active');
    
        let lastId;
        let cur = [];
        window.addEventListener("scroll",event =>{
            let fromTop = window.scrollY;
            nav_button.forEach(button =>{
                let section = document.querySelector(button.children[0].hash);
                    if(section.offsetTop <=  fromTop && 
                            section.offsetTop + section.offsetHeight > fromTop){
                            button.children[0].children[0].classList.add("current");
                        }else{
                            button.children[0].children[0].classList.remove("current");
                        }
            });
        });
    }

    //for jumping from other site
    const jumpHttpLink = ()=>{};
    //running all function for easy unit testing and organise
    const start_nav = ()=>{
        //call the function to work the drop down funtion
        mobileDropNav();
        //let navigation show the current section that being seen by the user
        scroll();

    };

    start_nav();
