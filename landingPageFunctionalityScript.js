//
function InitializeFunctionsAndInteractions()
{
    SetSkillsContent('art');
    //InitializeHomeSectionContent();
}

  

// ****************************** Home Functions and Interactions ****************************** //


  

//
var cycleHomeContent = true;

//
var maxProjectCount = 3;

//
var projectCount = 1;

//
var maxImgCount = 3 * maxProjectCount;

//
var homeImgCycleCount = 1;

//
var homeCycleCount = 1;

//
var homeSectionImgArray = new Array();
homeSectionImgArray[0] = "img/Projects/ImgPlaceHolder_Works_Project1.PNG";
homeSectionImgArray[1] = "img/Projects/ImgPlaceHolder_Works_Project2.PNG";
homeSectionImgArray[2] = "img/Projects/ImgPlaceHolder_Works_Project3.PNG";
homeSectionImgArray[3] = "img/Projects/ImgPlaceHolder_Works_Project1.PNG";
homeSectionImgArray[4] = "img/Projects/ImgPlaceHolder_Works_Project2.PNG";
homeSectionImgArray[5] = "img/Projects/ImgPlaceHolder_Works_Project3.PNG";
homeSectionImgArray[6] = "img/Projects/ImgPlaceHolder_Works_Project1.PNG";
homeSectionImgArray[7] = "img/Projects/ImgPlaceHolder_Works_Project2.PNG";
homeSectionImgArray[8] = "img/Projects/ImgPlaceHolder_Works_Project3.PNG";

//
var homeSectionTitleArray = new Array();
homeSectionTitleArray[0] = "Project One Name Holder";
homeSectionTitleArray[1] = "Project Two Name Holder";
homeSectionTitleArray[2] = "Project Three Name Holder";

//
var homeSectionDescArray = new Array();
homeSectionDescArray[0] = "1Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ad ipsa possimus sapiente ex amet quas voluptatem a similique libero in alias pariatur excepturi esse soluta, molestiae autem earum aliquid sequi! Saepe consequuntur omnis libero eum et, laborum animi quisquam ut temporibus aperiam, error unde reprehenderit quod esse dolore hic? Eum facere, sapiente sint totam illum voluptatibus id quis quisquam!1";
homeSectionDescArray[1] = "2Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ad ipsa possimus sapiente ex amet quas voluptatem a similique libero in alias pariatur excepturi esse soluta, molestiae autem earum aliquid sequi! Saepe consequuntur omnis libero eum et, laborum animi quisquam ut temporibus aperiam, error unde reprehenderit quod esse dolore hic? Eum facere, sapiente sint totam illum voluptatibus id quis quisquam!2";
homeSectionDescArray[2] = "3Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio ad ipsa possimus sapiente ex amet quas voluptatem a similique libero in alias pariatur excepturi esse soluta, molestiae autem earum aliquid sequi! Saepe consequuntur omnis libero eum et, laborum animi quisquam ut temporibus aperiam, error unde reprehenderit quod esse dolore hic? Eum facere, sapiente sint totam illum voluptatibus id quis quisquam!3";

var SectionContentShift = setInterval(function()
{
    if(cycleHomeContent)
    {
        cycleHomeContent = false;

        HomeSectionContentShift();
    }

    else
    {
        cycleHomeContent = true;
    }
    
    CycleSkillsTable();
    //FeaturedSectionCardImageShift();
    
},3000);

function InitializeHomeSectionContent()
{
    //document.getElementById("home-img").src = homeSectionImgArray[homeImgCycleCount - 1];
    //document.getElementById("home-project-title").innerHTML = homeSectionTitleArray[projectCount - 1];
    //document.getElementById("home-project-description").innerHTML = homeSectionDescArray[projectCount - 1];
}
/*
function HomeSectionContentShift()
{
    if(homeImgCycleCount < maxImgCount)
    {
        homeImgCycleCount++;
    }

    else if(homeImgCycleCount >= maxImgCount)
    {
        homeImgCycleCount = 1;
    }

    // Just fade image!
    $("#home-img").fadeTo(1500, 0, function() {
        document.getElementById("home-img").src = "img/Projects/ImgPlaceHolder_Works_Project3.PNG";//homeSectionImgArray[homeImgCycleCount - 1];

        $("#home-img").fadeTo(1500, 1, function() {
            
        });
    });

    if(homeCycleCount < maxProjectCount)
    {
        homeCycleCount++;
    }

    else if(homeCycleCount >= maxProjectCount)
    {
        homeCycleCount = 1;
        
        if(projectCount < maxProjectCount)
        {
            projectCount++;
        }

        else if(projectCount >= maxProjectCount)
        {
            projectCount = 1;
        }

        $("#home-project-title").fadeTo(1500, 0, function() {
            document.getElementById("home-project-title").innerHTML = homeSectionTitleArray[projectCount - 1];
            $("#home-project-title").fadeTo(1500, 1, function() {
                
            });
        });

        $("#home-project-description").fadeTo(1500, 0, function() {
            document.getElementById("home-project-description").innerHTML = homeSectionDescArray[projectCount - 1];
            $("#home-project-description").fadeTo(1500, 1, function() {
                
            });
        });
    }
}*/
  

// ****************************** Services Functions and Interactions ****************************** //


  

$("#art-serv-card").hover(function() 
{
    document.getElementById("art-serv-card-text").innerHTML = "B-Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iste ratione alias maxime aut est.-B";
},
    function() 
    {
        document.getElementById("art-serv-card-text").innerHTML = "A-Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iste ratione alias maxime aut est.-A";     
    });

$("#design-serv-card").hover(function() 
{
    document.getElementById("design-serv-card-text").innerHTML = "B-Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iste ratione alias maxime aut est.-B";
},
    function() 
    {
        document.getElementById("design-serv-card-text").innerHTML = "A-Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iste ratione alias maxime aut est.-A";     
    });

$("#dev-serv-card").hover(function() 
{
    document.getElementById("dev-serv-card-text").innerHTML = "B-Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iste ratione alias maxime aut est.-B";
},
    function() 
    {
        document.getElementById("dev-serv-card-text").innerHTML = "A-Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus iste ratione alias maxime aut est.-A";     
    });


  

// ****************************** Skills Functions and Interactions ****************************** //


  

var skillType = "art";
var skillPage = 1;
var totalNumOfSkillPages = 1;
var rootVariables = document.querySelector(':root');

$("#skills-art").click(function(){
    SetSkillsContent("art");
});

$("#skills-design").click(function(){
    SetSkillsContent("design");
});

$("#skills-development").click(function(){
    SetSkillsContent("dev");
});

function SetSkillsContent(sType)
{
    skillType = sType;  
    skillPage = 1;

    switch(sType) 
    {
        case "art":
            totalNumOfSkillPages = 1;

            $("#skills-art").css({
                "color" : "rgb(211, 2, 253)",
                "border" : "0.75px rgb(211, 2, 253) solid",
                "box-shadow" : "inset 0 0 7.5px rgb(211, 2, 253), 0 0 30px rgb(211, 2, 253)",
                "text-decoration" : "underline"
            });
        
            $("#skills-design, #skills-development").css({
                "border" : "0.5px rgb(72, 72, 255) solid",
                "color" : "rgb(83, 83, 253)",
                "text-decoration" : "none",
                "box-shadow" : "none"
            });

            document.getElementById("skills-desc-title").innerHTML = "art";
            document.getElementById("skills-desc").innerHTML = "1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus excepturi soluta, veniam quae delectus aut rerum deleniti natus sed tempore numquam tempora quisquam nisi itaque libero cupiditate perferendis neque est dolores ea laudantium eaque dicta! Deleniti, ea necessitatibus ratione culpa, fugit facere accusantium iure quos qui commodi officiis neque? Fuga rem quas nulla officia nisi animi culpa earum laudantium aliquam!1";
              
            CycleSkillsTable();

          break;
          
        case "design":
            totalNumOfSkillPages = 2;

            $("#skills-design").css({
                "color" : "rgb(211, 2, 253)",
                "border" : "0.75px rgb(211, 2, 253) solid",
                "box-shadow" : "inset 0 0 7.5px rgb(211, 2, 253), 0 0 30px rgb(211, 2, 253)",
                "text-decoration" : "underline"
            });
        
            $("#skills-art, #skills-development").css({
                "border" : "0.5px rgb(72, 72, 255) solid",
                "color" : "rgb(83, 83, 253)",
                "text-decoration" : "none",
                "box-shadow" : "none"
            });

            document.getElementById("skills-desc-title").innerHTML = "design";
            document.getElementById("skills-desc").innerHTML = "2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus excepturi soluta, veniam quae delectus aut rerum deleniti natus sed tempore numquam tempora quisquam nisi itaque libero cupiditate perferendis neque est dolores ea laudantium eaque dicta! Deleniti, ea necessitatibus ratione culpa, fugit facere accusantium iure quos qui commodi officiis neque? Fuga rem quas nulla officia nisi animi culpa earum laudantium aliquam!2";
              
            CycleSkillsTable();

          break;

        case "dev":
            totalNumOfSkillPages = 3;

            $("#skills-development").css({
                "color" : "rgb(211, 2, 253)",
                "border" : "0.75px rgb(211, 2, 253) solid",
                "box-shadow" : "inset 0 0 7.5px rgb(211, 2, 253), 0 0 30px rgb(211, 2, 253)",
                "text-decoration" : "underline"
            });
        
            $("#skills-art, #skills-design").css({
                "border" : "0.5px rgb(72, 72, 255) solid",
                "color" : "rgb(83, 83, 253)",
                "text-decoration" : "none",
                "box-shadow" : "none"
            });

            document.getElementById("skills-desc-title").innerHTML = "development";
            document.getElementById("skills-desc").innerHTML = "3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus excepturi soluta, veniam quae delectus aut rerum deleniti natus sed tempore numquam tempora quisquam nisi itaque libero cupiditate perferendis neque est dolores ea laudantium eaque dicta! Deleniti, ea necessitatibus ratione culpa, fugit facere accusantium iure quos qui commodi officiis neque? Fuga rem quas nulla officia nisi animi culpa earum laudantium aliquam!3";
        
            CycleSkillsTable();

          break;

        default:
          alert("Something went wrong with set skill type check!!");
      }
}

function CycleSkillsTable()
{
    switch(totalNumOfSkillPages) 
    {
        case 1:
            $("#skill-page-dot1, #skill-page-dot2, #skill-page-dot3").css({
                "opacity" : "0",
                "display" : "inline-block"
            });

          break;
          
        case 2:
            $("#skill-page-dot1, #skill-page-dot2").css({
                "opacity" : "1"
            });

            $("#skill-page-dot3").css({
                "display" : "none"
            });

          break;

        case 3:
            $("#skill-page-dot1, #skill-page-dot2, #skill-page-dot3").css({
                "opacity" : "1",
                "display" : "inline-block"
            })

          break;

        default:
          alert("Something went wrong with total number of skill page check!!");
      }
    
    switch(skillType) 
    {
        case "art":

            switch(skillPage)
            {
                case 1:
                    $("#skillA-title, #skillA-percentage, #skillA-line, #skillB-title, #skillB-percentage, #skillB-line, #skillC-title, #skillC-percentage, #skillC-line, #skillD-title, #skillD-percentage, #skillD-line, #skillE-title, #skillE-percentage, #skillE-line").css({
                        "opacity" : "1"
                    });

                    document.getElementById("skillA-title").innerHTML = "Maya";
                    document.getElementById("skillA-percentage").innerHTML = "60%"; 
                    rootVariables.style.setProperty('--skill-value-A', '60%');

                    document.getElementById("skillB-title").innerHTML = "3ds Max";
                    document.getElementById("skillB-percentage").innerHTML = "30%";
                    rootVariables.style.setProperty('--skill-value-B', '30%');

                    document.getElementById("skillC-title").innerHTML = "Photoshop";
                    document.getElementById("skillC-percentage").innerHTML = "50%";
                    rootVariables.style.setProperty('--skill-value-C', '50%');

                    document.getElementById("skillD-title").innerHTML = "After Effects";
                    document.getElementById("skillD-percentage").innerHTML = "20%";
                    rootVariables.style.setProperty('--skill-value-D', '20%');

                    document.getElementById("skillE-title").innerHTML = "Unity";
                    document.getElementById("skillE-percentage").innerHTML = "80%";
                    rootVariables.style.setProperty('--skill-value-E', '80%');

                    break;

                default:
                    alert("Something went wrong with art set skill page check!!");
            }

          break;
          
        case "design":

            switch(skillPage)
            {
                case 1:
                    $("#skillA-title, #skillA-percentage, #skillA-line, #skillB-title, #skillB-percentage, #skillB-line, #skillC-title, #skillC-percentage, #skillC-line, #skillD-title, #skillD-percentage, #skillD-line, #skillE-title, #skillE-percentage, #skillE-line").css({
                        "opacity" : "1"
                    });

                    document.getElementById("skillA-title").innerHTML = "Game Design";
                    document.getElementById("skillA-percentage").innerHTML = "85%"; 
                    rootVariables.style.setProperty('--skill-value-A', '85%');

                    document.getElementById("skillB-title").innerHTML = "Level Design";
                    document.getElementById("skillB-percentage").innerHTML = "70%";
                    rootVariables.style.setProperty('--skill-value-B', '70%');

                    document.getElementById("skillC-title").innerHTML = "Sytem Design";
                    document.getElementById("skillC-percentage").innerHTML = "95%";
                    rootVariables.style.setProperty('--skill-value-C', '95%');

                    document.getElementById("skillD-title").innerHTML = "Character Design";
                    document.getElementById("skillD-percentage").innerHTML = "65%";
                    rootVariables.style.setProperty('--skill-value-D', '65%');

                    document.getElementById("skillE-title").innerHTML = "Environment Design";
                    document.getElementById("skillE-percentage").innerHTML = "85%";
                    rootVariables.style.setProperty('--skill-value-E', '85%');

                    // place dot switch check here
                    $("#skill-page-dot2, #skill-page-dot3").css({
                        "border" : "1px rgb(72, 72, 255) solid",
                        "background-color" : "none",
                        "box-shadow" : "none"
                    });

                    $("#skill-page-dot1").css({
                        "border" : "2px rgb(228, 91, 255) solid",
                        "display" : "inline-block",
                        "box-shadow" : "inset 0 1px 7.5px rgb(211, 2, 253), 0 0 50px rgb(211, 2, 253)",
                        "background-color" : "rgba(125, 3, 150, 0.507)"
                    });

                    skillPage++;

                    break;

                case 2:
                    document.getElementById("skillA-title").innerHTML = "UI Design";
                    document.getElementById("skillA-percentage").innerHTML = "45%"; 
                    rootVariables.style.setProperty('--skill-value-A', '45%');

                    document.getElementById("skillB-title").innerHTML = "AI Design";
                    document.getElementById("skillB-percentage").innerHTML = "35%";
                    rootVariables.style.setProperty('--skill-value-B', '35%');

                    $("#skillC-title, #skillC-percentage, #skillC-line, #skillD-title, #skillD-percentage, #skillD-line, #skillE-title, #skillE-percentage, #skillE-line").css({
                        "opacity" : "0"
                    });

                    // place dot switch check here
                    $("#skill-page-dot1, #skill-page-dot3").css({
                        "border" : "1px rgb(72, 72, 255) solid",
                        "background-color" : "none",
                        "box-shadow" : "none"
                    });

                    $("#skill-page-dot2").css({
                        "border" : "2px rgb(228, 91, 255) solid",
                        "display" : "inline-block",
                        "box-shadow" : "inset 0 1px 7.5px rgb(211, 2, 253), 0 0 50px rgb(211, 2, 253)",
                        "background-color" : "rgba(125, 3, 150, 0.507)"
                    });

                    skillPage = 1;

                    break;

                default:
                    alert("Something went wrong with design set skill page check!!");
            }

          break;

        case "dev":

            switch(skillPage)
            {
                case 1:
                    $("#skillA-title, #skillA-percentage, #skillA-line, #skillB-title, #skillB-percentage, #skillB-line, #skillC-title, #skillC-percentage, #skillC-line, #skillD-title, #skillD-percentage, #skillD-line, #skillE-title, #skillE-percentage, #skillE-line").css({
                        "opacity" : "1"
                    });

                    document.getElementById("skillA-title").innerHTML = "C#";
                    document.getElementById("skillA-percentage").innerHTML = "75%"; 
                    rootVariables.style.setProperty('--skill-value-A', '75%');

                    document.getElementById("skillB-title").innerHTML = "HTML";
                    document.getElementById("skillB-percentage").innerHTML = "55%";
                    rootVariables.style.setProperty('--skill-value-B', '55%');

                    document.getElementById("skillC-title").innerHTML = "CSS";
                    document.getElementById("skillC-percentage").innerHTML = "45%";
                    rootVariables.style.setProperty('--skill-value-C', '45%');

                    document.getElementById("skillD-title").innerHTML = "JavaScript";
                    document.getElementById("skillD-percentage").innerHTML = "60%";
                    rootVariables.style.setProperty('--skill-value-D', '60%');

                    document.getElementById("skillE-title").innerHTML = "Jquery";
                    document.getElementById("skillE-percentage").innerHTML = "20%";
                    rootVariables.style.setProperty('--skill-value-E', '20%');

                    // place dot switch check here
                    $("#skill-page-dot2, #skill-page-dot3").css({
                        "border" : "1px rgb(72, 72, 255) solid",
                        "background-color" : "none",
                        "box-shadow" : "none"
                    });

                    $("#skill-page-dot1").css({
                        "border" : "2px rgb(228, 91, 255) solid",
                        "display" : "inline-block",
                        "box-shadow" : "inset 0 1px 7.5px rgb(211, 2, 253), 0 0 50px rgb(211, 2, 253)",
                        "background-color" : "rgba(125, 3, 150, 0.507)"
                    });

                    skillPage++;

                    break;

                case 2:
                    document.getElementById("skillA-title").innerHTML = "C++";
                    document.getElementById("skillA-percentage").innerHTML = "35%"; 
                    rootVariables.style.setProperty('--skill-value-A', '35%');

                    document.getElementById("skillB-title").innerHTML = "Python";
                    document.getElementById("skillB-percentage").innerHTML = "25%";
                    rootVariables.style.setProperty('--skill-value-B', '25%');

                    document.getElementById("skillC-title").innerHTML = "PHP";
                    document.getElementById("skillC-percentage").innerHTML = "10%";
                    rootVariables.style.setProperty('--skill-value-C', '10%');

                    document.getElementById("skillD-title").innerHTML = "SQL";
                    document.getElementById("skillD-percentage").innerHTML = "10%";
                    rootVariables.style.setProperty('--skill-value-D', '10%');

                    $("#skillE-title, #skillE-percentage, #skillE-line").css({
                        "opacity" : "0"
                    });

                    // place dot switch check here
                    $("#skill-page-dot1, #skill-page-dot3").css({
                        "border" : "1px rgb(72, 72, 255) solid",
                        "background-color" : "none",
                        "box-shadow" : "none"
                    });

                    $("#skill-page-dot2").css({
                        "border" : "2px rgb(228, 91, 255) solid",
                        "display" : "inline-block",
                        "box-shadow" : "inset 0 1px 7.5px rgb(211, 2, 253), 0 0 50px rgb(211, 2, 253)",
                        "background-color" : "rgba(125, 3, 150, 0.507)"
                    });

                    skillPage++;

                    break;

                case 3:
                    $("#skillA-title, #skillA-percentage, #skillA-line, #skillB-title, #skillB-percentage, #skillB-line, #skillC-title, #skillC-percentage, #skillC-line, #skillD-title, #skillD-percentage, #skillD-line, #skillE-title, #skillE-percentage, #skillE-line").css({
                        "opacity" : "1"
                    });

                    document.getElementById("skillA-title").innerHTML = "Test1";
                    document.getElementById("skillA-percentage").innerHTML = "10%"; 
                    rootVariables.style.setProperty('--skill-value-A', '10%');

                    document.getElementById("skillB-title").innerHTML = "Test2";
                    document.getElementById("skillB-percentage").innerHTML = "60%";
                    rootVariables.style.setProperty('--skill-value-B', '60%');

                    document.getElementById("skillC-title").innerHTML = "Test3";
                    document.getElementById("skillC-percentage").innerHTML = "40%";
                    rootVariables.style.setProperty('--skill-value-C', '40%');

                    document.getElementById("skillD-title").innerHTML = "Test4";
                    document.getElementById("skillD-percentage").innerHTML = "90%";
                    rootVariables.style.setProperty('--skill-value-D', '90%');

                    $("#skillE-title, #skillE-percentage, #skillE-line").css({
                        "opacity" : "0"
                    });

                    // place dot switch check here
                    $("#skill-page-dot1, #skill-page-dot2").css({
                        "border" : "1px rgb(72, 72, 255) solid",
                        "background-color" : "none",
                        "box-shadow" : "none"
                    });

                    $("#skill-page-dot3").css({
                        "border" : "2px rgb(228, 91, 255) solid",
                        "display" : "inline-block",
                        "box-shadow" : "inset 0 1px 7.5px rgb(211, 2, 253), 0 0 50px rgb(211, 2, 253)",
                        "background-color" : "rgba(125, 3, 150, 0.507)"
                    });

                    skillPage = 1;

                    break;

                default:
                    alert("Something went wrong with dev set skill page check!!");
            }

          break;

        default:
          alert("Something went wrong with set skill type check!!");
      }
}


  

// ****************************** Featured Functions and Interactions ****************************** //


  

//
var featuredSectionProjectOneImgArray = new Array();
featuredSectionProjectOneImgArray[0] = "assets/img/ProjectDummiePic3.PNG";
featuredSectionProjectOneImgArray[1] = "assets/img/ProjectDummiePic10.PNG";
featuredSectionProjectOneImgArray[2] = "assets/img/ProjectDummiePic2.PNG";

//
var featuredSectionProjectTwoImgArray = new Array();
featuredSectionProjectTwoImgArray[0] = "assets/img/ProjectDummiePic.PNG";
featuredSectionProjectTwoImgArray[1] = "assets/img/ProjectDummiePic8.PNG";
featuredSectionProjectTwoImgArray[2] = "assets/img/ProjectDummiePic.PNG";

//
var featuredSectionProjectThreeImgArray = new Array();
featuredSectionProjectThreeImgArray[0] = "assets/img/ProjectDummiePic6.PNG";
featuredSectionProjectThreeImgArray[1] = "assets/img/ProjectDummiePic5.PNG";
featuredSectionProjectThreeImgArray[2] = "assets/img/ProjectDummiePic9.PNG";

//
var featuredSectionProjectFourImgArray = new Array();
featuredSectionProjectFourImgArray[0] = "assets/img/ProjectDummiePic.PNG";
featuredSectionProjectFourImgArray[1] = "assets/img/ProjectDummiePic10.PNG";
featuredSectionProjectFourImgArray[2] = "assets/img/ProjectDummiePic3.PNG";

//
var featuredSectionProjectFiveImgArray = new Array();
featuredSectionProjectFiveImgArray[0] = "assets/img/ProjectDummiePic8.PNG";
featuredSectionProjectFiveImgArray[1] = "assets/img/ProjectDummiePic7.PNG";
featuredSectionProjectFiveImgArray[2] = "assets/img/ProjectDummiePic4.PNG";

//
var featuredImgCount = 1;

//
function FeaturedSectionCardImageShift()
{
    if(featuredImgCount < 3)
    {
        featuredImgCount++;
    }

    else if(featuredImgCount >= 3)
    {
        featuredImgCount = 1;
    }

    document.getElementById("featuredImg-project-one").src = featuredSectionProjectOneImgArray[featuredImgCount - 1];
    document.getElementById("featuredImg-project-two").src = featuredSectionProjectTwoImgArray[featuredImgCount - 1];
    document.getElementById("featuredImg-project-three").src = featuredSectionProjectThreeImgArray[featuredImgCount - 1];
    document.getElementById("featuredImg-project-four").src = featuredSectionProjectFourImgArray[featuredImgCount - 1];
    document.getElementById("featuredImg-project-five").src = featuredSectionProjectFiveImgArray[featuredImgCount - 1];
}