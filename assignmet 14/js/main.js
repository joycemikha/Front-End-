document.addEventListener('DOMContentLoaded', function() {
  //MMORPG
  const gamesList = document.getElementById('games-list');

  async function fetchGames() {
      const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=mmorpg', {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': 'baa4325176msh19f814ab861137fp1642b3jsn065e30322e44',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
      });
      const games = await response.json() ;
      displayGames(games);
      console.log( games )
  }
  
  
  function displayGames(games) {
      gamesList.innerHTML = games.map(game => 
        `

      <div class="container d-flex game" data-id="${game.id}"">
   
      <div class="shadow m-2 col">
      <div  class=" card h-100 bg-transparent" role="button">
         <div class="card-body">
            <figure class="position-relative">
               <img class="card-img-top object-fit-cover h-100" src="${game.thumbnail}">
            </figure>
            

               <div class="hstack justify-content-between">
                  <h3 class="h6 small text-white">${game.title}</h3>
                  
                  <span class="badge text-bg-primary p-2">Free</span>
               </div>

               <p class="card-text  text-white p-2 small text-center opacity-50">
               ${game.short_description}
               </p>

          
         </div>

         <footer class="card-footer small hstack justify-content-between">

            <span class="badge badge-color">MMORPG</span>
            <span class="badge badge-color">${game.platform}</span>

         </footer>
      </div>
   </div>
   </div>

      `).join('');
   attachClickEvent( games);
  }
  function attachClickEvent( games) {
        $(`.card`).click(function() {
            const gameId = $(this).closest('.game').data('id');
            const game = games.find(g => g.id == gameId);
            if (game) {
                const newWindow = window.open("","_self");
                newWindow.document.write(`
                    <section class="details"text-white data-bs-theme="dark">
                        <div class="container">
                            <header class="justify-content-between">
                               <h1 class="text-center h3 py-4">Details Game</h1>
                               <button class="btn-close btn-close-white" id="btnClose"></button>           
                               <div class="row g-4" id="detailsContent">
                                <div class="col-md-4">
                                    <img src="${game.thumbnail}" class="w-100" alt="image details">
                                </div>
                                <div class="col-md-8">
                                    <h3>Title: ${game.title}</h3>
                                    <p>Category: <span class="badge text-bg-info">mmorpg</span></p>
                                    <p>Platform: <span class="badge text-bg-info">${game.platform}</span></p>
                                    <p>Status: <span class="badge text-bg-info">Live</span></p>
                                    <p class="small">${game.short_description}</p>
                                    <a class="btn btn-outline-warning" target="_blank" href="${game.game_url}">Show Game</a>
                                </div>
                            </div>
                        </div>
                    </section>
                `);
                
                newWindow.document.close();
            }
        });
    }

  fetchGames();

  //shooter
  const gamesListShooter = document.getElementById('games-list-shooter');

  async function fetchGames2() {
      const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter', {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': 'baa4325176msh19f814ab861137fp1642b3jsn065e30322e44',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
      });
      const games = await response.json() ;
      displayGames2(games);
      console.log(games)
  }
  
  function displayGames2(games) {
   gamesListShooter.innerHTML = games.map(game => 
        `
      <div class="container d-flex game" data-id="${game.id}">
      <div class="shadow m-2 col">
      <div data-id="582" class=" card h-100 bg-transparent" role="button">
         <div class="card-body">
            <figure class="position-relative">
               <img class="card-img-top object-fit-cover h-100" src="${game.thumbnail}">
            </figure>
            

               <div class="hstack justify-content-between">
                  <h3 class="h6 small text-white">${game.title}</h3>
                  
                  <span class="badge text-bg-primary p-2">Free</span>
               </div>

               <p class="card-text  text-white p-2 small text-center opacity-50">
               ${game.short_description}
               </p>
         </div>

         <footer class="card-footer small hstack justify-content-between">

            <span class="badge badge-color">MMORPG</span>
            <span class="badge badge-color">${game.platform}</span>

         </footer>
      </div>
   </div>
   </div>

      `).join('');
      attachClickEvent( games);

  }

  function attachClickEvent( games) {
   $(`.card`).click(function() {
       const gameId = $(this).closest('.game').data('id');
       const game = games.find(g => g.id == gameId);
       if (game) {
           const newWindow = window.open("","_self");
           newWindow.document.write(`
               <section class="details"text-white data-bs-theme="dark">
                   <div class="container">
                       <header class="justify-content-between">
                          <h1 class="text-center h3 py-4">Details Game</h1>
                          <button class="btn-close btn-close-white" id="btnClose"></button>           
                          <div class="row g-4" id="detailsContent">
                           <div class="col-md-4">
                               <img src="${game.thumbnail}" class="w-100" alt="image details">
                           </div>
                           <div class="col-md-8">
                               <h3>Title: ${game.title}</h3>
                               <p>Category: <span class="badge text-bg-info">mmorpg</span></p>
                               <p>Platform: <span class="badge text-bg-info">${game.platform}</span></p>
                               <p>Status: <span class="badge text-bg-info">Live</span></p>
                               <p class="small">${game.short_description}</p>
                               <a class="btn btn-outline-warning" target="_blank" href="${game.game_url}">Show Game</a>
                           </div>
                       </div>
                   </div>
               </section>
           `);
           
           newWindow.document.close();
       }
   });
}
  fetchGames2();


    //SAILING
    const gamesList3 = document.getElementById('games-list-SAILING');

    async function fetchGames3() {
        const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=sailing', {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'baa4325176msh19f814ab861137fp1642b3jsn065e30322e44',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        });
        const games = await response.json() ;
        displayGames3(games);
        console.log(games)
    }
  
  
    
    function displayGames3(games) {
     gamesList3.innerHTML = games.map(game => 
          `
        <div class="container d-flex game "data-id="${game.id} ">
        <div class="shadow m-2 col">
        <div data-id="582" class=" card h-100 bg-transparent" role="button">
           <div class="card-body">
              <figure class="position-relative">
                 <img class="card-img-top object-fit-cover h-100" src="${game.thumbnail}">
              </figure>
              
  
                 <div class="hstack justify-content-between">
                    <h3 class="h6 small text-white">${game.title}</h3>
                    
                    <span class="badge text-bg-primary p-2">Free</span>
                 </div>
  
                 <p class="card-text  text-white p-2 small text-center opacity-50">
                 ${game.short_description}
                 </p>           
           </div>  
           <footer class="card-footer small hstack justify-content-between">
  
              <span class="badge badge-color">MMORPG</span>
              <span class="badge badge-color">${game.platform}</span>
  
           </footer>
        </div>
     </div>
     </div>
  
        `).join('');
        attachClickEvent( games);
    }

    function attachClickEvent( games) {
      $(`.card`).click(function() {
          const gameId = $(this).closest('.game').data('id');
          const game = games.find(g => g.id == gameId);
          if (game) {
              const newWindow = window.open("","_self");
              newWindow.document.write(`
                  <section class="details"text-white data-bs-theme="dark">
                      <div class="container">
                          <header class="justify-content-between">
                             <h1 class="text-center h3 py-4">Details Game</h1>
                             <button class="btn-close btn-close-white" id="btnClose"></button>           
                             <div class="row g-4" id="detailsContent">
                              <div class="col-md-4">
                                  <img src="${game.thumbnail}" class="w-100" alt="image details">
                              </div>
                              <div class="col-md-8">
                                  <h3>Title: ${game.title}</h3>
                                  <p>Category: <span class="badge text-bg-info">mmorpg</span></p>
                                  <p>Platform: <span class="badge text-bg-info">${game.platform}</span></p>
                                  <p>Status: <span class="badge text-bg-info">Live</span></p>
                                  <p class="small">${game.short_description}</p>
                                  <a class="btn btn-outline-warning" target="_blank" href="${game.game_url}">Show Game</a>
                              </div>
                          </div>
                      </div>
                  </section>
              `);
              
              newWindow.document.close();
          }
      });
  }
    fetchGames3();


    //PERMADEATH

  const gamesList4 = document.getElementById('games-list-PERMADEATH');

  async function fetchGames4() {
      const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=permadeath', {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': 'baa4325176msh19f814ab861137fp1642b3jsn065e30322e44',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
      });
      const games = await response.json() ;
      displayGames4(games);
  }


  
  function displayGames4(games) {
   gamesList4.innerHTML = games.map(game => 
        `
      <div class="container d-flex game "data-id="${game.id} ">
      <div class="shadow m-2 col">
      <div data-id="582" class=" card h-100 bg-transparent" role="button">
         <div class="card-body">
            <figure class="position-relative">
               <img class="card-img-top object-fit-cover h-100" src="${game.thumbnail}">
            </figure>
            

               <div class="hstack justify-content-between">
                  <h3 class="h6 small text-white">${game.title}</h3>
                  
                  <span class="badge text-bg-primary p-2">Free</span>
               </div>

               <p class="card-text  text-white p-2 small text-center opacity-50">
               ${game.short_description}
               </p>

          
         </div>

         <footer class="card-footer small hstack justify-content-between">

            <span class="badge badge-color">MMORPG</span>
            <span class="badge badge-color">${game.platform}</span>

         </footer>
      </div>
   </div>
   </div>

      `).join('');
      attachClickEvent( games);

  }

  function attachClickEvent( games) {
   $(`.card`).click(function() {
       const gameId = $(this).closest('.game').data('id');
       const game = games.find(g => g.id == gameId);
       if (game) {
           const newWindow = window.open("","_self");
           newWindow.document.write(`
               <section class="details"text-white data-bs-theme="dark">
                   <div class="container">
                       <header class="justify-content-between">
                          <h1 class="text-center h3 py-4">Details Game</h1>
                          <button class="btn-close btn-close-white" id="btnClose"></button>           
                          <div class="row g-4" id="detailsContent">
                           <div class="col-md-4">
                               <img src="${game.thumbnail}" class="w-100" alt="image details">
                           </div>
                           <div class="col-md-8">
                               <h3>Title: ${game.title}</h3>
                               <p>Category: <span class="badge text-bg-info">mmorpg</span></p>
                               <p>Platform: <span class="badge text-bg-info">${game.platform}</span></p>
                               <p>Status: <span class="badge text-bg-info">Live</span></p>
                               <p class="small">${game.short_description}</p>
                               <a class="btn btn-outline-warning" target="_blank" href="${game.game_url}">Show Game</a>
                           </div>
                       </div>
                   </div>
               </section>
           `);
           
           newWindow.document.close();
       }
   });
}
  fetchGames4();

      //SUPERHERO
      const gamesList5 = document.getElementById('games-list-SUPERHERO');

      async function fetchGames5() {
          const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=superhero', {
              method: 'GET',
              headers: {
                  'X-RapidAPI-Key': 'baa4325176msh19f814ab861137fp1642b3jsn065e30322e44',
                  'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
              }
          });
          const games = await response.json() ;
          displayGames5(games);
      }
    
    
      
      function displayGames5(games) {
       gamesList5.innerHTML = games.map(game => 
            `
          <div class="container d-flex game "data-id="${game.id} ">
          <div class="shadow m-2 col">
          <div data-id="582" class=" card h-100 bg-transparent" role="button">
             <div class="card-body">
                <figure class="position-relative">
                   <img class="card-img-top object-fit-cover h-100" src="${game.thumbnail}">
                </figure>
                
    
                   <div class="hstack justify-content-between">
                      <h3 class="h6 small text-white">${game.title}</h3>
                      
                      <span class="badge text-bg-primary p-2">Free</span>
                   </div>
    
                   <p class="card-text  text-white p-2 small text-center opacity-50">
                   ${game.short_description}
                   </p>
    
              
             </div>
    
             <footer class="card-footer small hstack justify-content-between">
    
                <span class="badge badge-color">MMORPG</span>
                <span class="badge badge-color">${game.platform}</span>
    
             </footer>
          </div>
       </div>
       </div>
    
          `).join('');
          attachClickEvent( games);

      }

      function attachClickEvent( games) {
         $(`.card`).click(function() {
             const gameId = $(this).closest('.game').data('id');
             const game = games.find(g => g.id == gameId);
             if (game) {
                 const newWindow = window.open("","_self");
                 newWindow.document.write(`
                     <section class="details"text-white data-bs-theme="dark">
                         <div class="container">
                             <header class="justify-content-between">
                                <h1 class="text-center h3 py-4">Details Game</h1>
                                <button class="btn-close btn-close-white" id="btnClose"></button>           
                                <div class="row g-4" id="detailsContent">
                                 <div class="col-md-4">
                                     <img src="${game.thumbnail}" class="w-100" alt="image details">
                                 </div>
                                 <div class="col-md-8">
                                     <h3>Title: ${game.title}</h3>
                                     <p>Category: <span class="badge text-bg-info">mmorpg</span></p>
                                     <p>Platform: <span class="badge text-bg-info">${game.platform}</span></p>
                                     <p>Status: <span class="badge text-bg-info">Live</span></p>
                                     <p class="small">${game.short_description}</p>
                                     <a class="btn btn-outline-warning" target="_blank" href="${game.game_url}">Show Game</a>
                                 </div>
                             </div>
                         </div>
                     </section>
                 `);
                 
                 newWindow.document.close();
             }
         });
     }
      fetchGames5();


          //PIXEL

  const gamesList6 = document.getElementById('games-list-PIXEL');

  async function fetchGames6() {
      const response = await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=pixel', {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': 'baa4325176msh19f814ab861137fp1642b3jsn065e30322e44',
              'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
      });
      const games = await response.json() ;
      displayGames6(games);
  }


  
  function displayGames6(games) {
   gamesList6.innerHTML = games.map(game => 
        `
      <div class="container d-flex game "data-id="${game.id} ">
      <div class="shadow m-2 col">
      <div data-id="582" class=" card h-100 bg-transparent" role="button">
         <div class="card-body">
            <figure class="position-relative">
               <img class="card-img-top object-fit-cover h-100" src="${game.thumbnail}">
            </figure>
               <div class="hstack justify-content-between">
                  <h3 class="h6 small text-white">${game.title}</h3>
                  
                  <span class="badge text-bg-primary p-2">Free</span>
               </div>

               <p class="card-text  text-white p-2 small text-center opacity-50">
               ${game.short_description}
               </p>
         </div>

         <footer class="card-footer small hstack justify-content-between">

            <span class="badge badge-color">MMORPG</span>
            <span class="badge badge-color">${game.platform}</span>

         </footer>
      </div>
   </div>
   </div>

      `).join('');
      attachClickEvent( games);
  }
  function attachClickEvent( games) {
   $(`.card`).click(function() {
       const gameId = $(this).closest('.game').data('id');
       const game = games.find(g => g.id == gameId);
       if (game) {
           const newWindow = window.open("","_self");
           newWindow.document.write(`
               <section class="details"text-white data-bs-theme="dark">
                   <div class="container">
                       <header class="justify-content-between">
                          <h1 class="text-center h3 py-4">Details Game</h1>
                          <button class="btn-close btn-close-white" id="btnClose"></button>           
                          <div class="row g-4" id="detailsContent">
                           <div class="col-md-4">
                               <img src="${game.thumbnail}" class="w-100" alt="image details">
                           </div>
                           <div class="col-md-8">
                               <h3>Title: ${game.title}</h3>
                               <p>Category: <span class="badge text-bg-info">mmorpg</span></p>
                               <p>Platform: <span class="badge text-bg-info">${game.platform}</span></p>
                               <p>Status: <span class="badge text-bg-info">Live</span></p>
                               <p class="small">${game.short_description}</p>
                               <a class="btn btn-outline-warning" target="_blank" href="${game.game_url}">Show Game</a>
                           </div>
                       </div>
                   </div>
               </section>
           `);
           
           newWindow.document.close();
       }
   });
}
  fetchGames6();

});
