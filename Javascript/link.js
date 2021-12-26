const goto_website = (element_id,site) => {

    let element = document.querySelectorAll(element_id);
    element.forEach((ele)=>{
        ele.addEventListener('click',() => {window.open(site);})
    })

}

const run = ()=>{
    goto_website('#messenger',"https://m.me/jayson.deleon.393/")
    goto_website('#facebook',"https://www.facebook.com/jayson.deleon.393/")
    goto_website('#github',"https://www.github.com/savjaylade84/")
    goto_website('#linkedin',"https://www.linkedin.com/mwlite/in/john-jayson-de-leon-73532818b/")
    goto_website('#instagram',"https://www.instagram.com/savjaylade84/")
    goto_website('#facebook_page',"https://www.facebook.com/Jisun-102294825339373/")
    goto_website('#opensea',"https://www.opensea.io/savjaylade/")
}

run()
