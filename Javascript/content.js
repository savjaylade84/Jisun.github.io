

//add specific technology list and section
const fillUpTechList = (tech_list,title,parent)=>{

    window.addEventListener('load',() => {

       let  container =  document.createElement("section");
       let context_txt = document.createElement("section");
       let context_title = document.createElement("p");
       container.className = "tech_list center center-me padding-big margin-big";
       context_title.className = "overview text text-slogan center center-me center-me-txt padding";
       context_txt.className = "context_title_txt text card-title center-me ";
       context_txt.innerHTML = title;

       document.querySelector(parent).appendChild(context_title);
       document.querySelector(parent).appendChild(context_txt);

        tech_list.forEach(node => {

            let tech = { 
                contain : document.createElement("span"),
                image : document.createElement("img"),
                text : document.createElement("p")
            }
        
              tech.contain.querySelector = ".tech";
        
              tech.text.innerHTML = node.text;
              tech.text.className = "text center-me center-me-txt padding";
        
              tech.image.src = node.url;
              tech.image.height = 150;
              tech.image.width = 150;
              tech.image.className = "disable center center-me padding";
        
              tech.contain.appendChild(tech.image);
              tech.contain.appendChild(tech.text);
              tech.contain.className = "center center-me table padding-big margin-big"
              container.appendChild(tech.contain);
        
          });
        document.querySelector(parent).appendChild(container);
    });

};



//store  all the sections made
const tech_list = () => {

//show main skill list
fillUpTechList( 
    [{
        text: "Software Developement",
        url:"images/programming.svg"
    },{
        text: "Photo Editing",
        url:"images/photoshop.svg"
    },{
        text: "Illustration Design",
        url:"images/icon_designer.svg"
    }]
    ,"Overview Skill"
    ,".tech_contain");

// show bacnkend tool list
fillUpTechList(
    [{
        text: "Scripting Language",
        url:"images/python.svg"
    },{
        text: "Scripting Language",
        url:"images/bash.svg"
    },{
        text: "programming language",
        url:"images/cpp.svg"
    },{
        text: "programming language",
        url:"images/csharp.svg"
    },{
        text: "programming language",
        url:"images/clang.svg"
    }]
     ,"Software Application Tools"
     ,".tech_contain");

// show frontend html
fillUpTechList(                   
    [{
        text: "Website Structure",
        url:"images/html5.svg"
    },{
        text: "Website Styling",
        url:"images/css3.svg"
    },{
        text: "Website Scripting",
        url:"images/javascript.svg"
    },{
        text: "CSS Framework",
        url:"images/sass.svg"
    }]
    ,"Website Design Tools"
    ,".tech_contain");

// show photo editing
fillUpTechList(                   
    [{
        text: "Photo Editing Platform",
        url:"images/adobe-photoshop.svg"
    }]
    ,"Photo editing Tools"
    ,".tech_contain");

// show illustration design
fillUpTechList(                   
    [{
        text: "Illustration Platform",
        url:"images/adobe-illustrator.svg"
    }]
    ,"Illustration Design Tools"
    ,".tech_contain");


}

// add picture 
const addProfilePicture =(url) => {
    let picture_url = document.querySelector('#profile-image');
    window.addEventListener('load',()=>{
        console.log(url);
        picture_url.src = url;
        console.log(picture_url.src)
    });
};

// add picture 
const addIntroductionText =(element,text) => {
    let intro_text = document.querySelector(element);
    window.addEventListener('load',()=>intro_text.innerHTML = text);
};


const start_content = ()=>{

    //put intro text in the web
    addIntroductionText('.cosmoTxt1',"Creative Way Of Solving Solution");
    
    //put profile picture in the web
    addProfilePicture("images/Selfie_Me.jpg");

    //run and it will produce technology list and section
    tech_list();

};

start_content();