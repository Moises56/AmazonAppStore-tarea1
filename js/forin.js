      for (let i in apk) {
             let star = "";
             calificacion = categoria.aplicaciones[i].calificacion

             for (let i = 0; i < calificacion; i++) {
               star += `<i class="fas fa-star"></i>`;
             }
             for (let i = 0; i < 5 - calificacion; i++) {
              star += `<i class="far fa-star"></i>`;
             }

             document.getElementById('app').innerHTML +=
             `<div class="col-12 col-lg-3 col-md-6 col-sm-6 col-xl-2 p-3">
                  <div class="card m-1">
                     <img onclick="modalApp()" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="${categoria.aplicaciones[i].icono}" class="card-img-top app-img" alt="Card image cap" id="${categoria.aplicaciones[i].nombre}">
                     <div class="card-body">
                         <h5 class="card-title">${categoria.aplicaciones[i].nombre}</h5>
                          <p class="card-text">${categoria.aplicaciones[i].desarrollador}</p>
                          <span style="color: #FFB718;" class="card-text">${extrella}</span><br>
                          <p class="card-text"><b>FREE</b></p>
     
                     </div>
                 </div>
             </div>
          `
                // console.log(app.aplicaciones[i].nombre);
        }