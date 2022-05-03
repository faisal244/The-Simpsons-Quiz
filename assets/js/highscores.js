const highscoresBtn = document.getElementById("highscores-btn")

const mainElement = document.getElementById("main");

  
      const score = JSON.parse(localStorage.getItem("score"));


    
      const final = JSON.parse(localStorage.getItem("allScores"))
     
  

    //   render High Scores


      // create section
      const section = document.createElement("section");
      section.setAttribute("class", "high-score-form-section title alert");
      section.setAttribute("name", "high-score-form");

      // create h1
      const h1 = document.createElement("h1");
    //   h1.setAttribute("class", "question");
      h1.textContent = ("HIGH SCORES");
      section.append(h1);
    

        // create h2
        for(var i=0; i<final.length; i++) {
    let hs1 = document.createElement("h2");
    hs1.setAttribute("class", "title alert");
    hs1.textContent = final[i].name + " " + final[i].score ;
    section.append(hs1);

        };


  mainElement.append(section);

  