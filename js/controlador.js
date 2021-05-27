//Codigo para generar información de categorias y almacenarlas en un arreglo.
 var categorias = [];
   (()=>{
     //Este arreglo es para generar textos de prueba
     let textosDePrueba=[
         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
         "Quos numquam neque animi ex facilis nesciunt enim id molestiae.",
         "Quaerat quod qui molestiae sequi, sint aliquam omnis quos voluptas?",
         "Non impedit illum eligendi voluptas. Delectus nisi neque aspernatur asperiores.",
         "Ducimus, repellendus voluptate quo veritatis tempora recusandae dolorem optio illum."
     ]
     //Genera dinamicamente los JSON de prueba para esta evaluacion,
     //Primer ciclo para las categorias y segundo ciclo para las apps de cada categoria
     let contador = 1;
     for (let i=0;i<5;i++){//Generar 5 categorias
         let categoria = {
             nombreCategoria:"categorias" +i,
             descripcion:textosDePrueba[Math.floor(Math.random() * (5 - 1))],
             aplicaciones:[]
         };
         for (let j=0;j<10;j++){//Generar 10 apps por categoria
             let aplicacion = {
                 codigo:contador,
                 nombre:"App "+contador,
                 descripcion:textosDePrueba[Math.floor(Math.random() * (5 - 1))],
                 icono:`img/app-icons/${contador}.webp`,
                 instalada:contador%3==0?true:false,
                 app:"app/demo.apk",
                 calificacion:Math.floor(Math.random() * (5 - 1)) + 1,
                 descargas:1000,
                 desarrollador:`Desarrollador ${(i+1)*(j+1)}`,
                 imagenes:["img/app-screenshots/1.webp","img/app-screenshots/2.webp","img/app-screenshots/3.webp"],
                 comentarios:[
                     {comentario:textosDePrueba[Math.floor(Math.random() * (5 - 1))],calificacion:Math.floor(Math.random() * (5 - 1)) + 1,fecha:"12/12/2012",usuario:"Juan",user:'img/user.webp'},
                     {comentario:textosDePrueba[Math.floor(Math.random() * (5 - 1))],calificacion:Math.floor(Math.random() * (5 - 1)) + 1,fecha:"12/12/2012",usuario:"Pedro",user:'img/user.webp'},
                     {comentario:textosDePrueba[Math.floor(Math.random() * (5 - 1))],calificacion:Math.floor(Math.random() * (5 - 1)) + 1,fecha:"12/12/2012",usuario:"Maria",user:'img/user.webp'},
                 ]
             };
             contador++;
             categoria.aplicaciones.push(aplicacion);
         }
         categorias.push(categoria);
     }
  // console.log(categorias);
})();

/************************************ */
//TODO ************************************ */
//************************************ */

var localStorage = window.localStorage;
var indiceAppSelect = null;
// console.log(categorias);

if (localStorage.getItem("categorias") == null) {
    localStorage.setItem("categorias", JSON.stringify(categorias));
} else {
    categorias = JSON.parse(localStorage.getItem("categorias"));
}

var apk = categorias.aplicaciones

var nombre = "Categoria"
$(document).ready(function apps() {
    var Categorias = categorias

for (let i in Categorias) {
        localStorage.setItem(nombre + i.toString(), JSON.stringify(Categorias[i]));
        var html = '<option value="' + i.toString() + '">' + nombre + ' ' + i.toString() + '</option>';
        $('#categoria').append(html);
        n = 0
        document.getElementById('app').innerHTML = ''
        categ = localStorage.getItem(nombre + n)
        categoria = JSON.parse(categ)
        app = categoria.aplicaciones
        // console.log(app);

        for (let i in app) {
            let star = "";
        calificacion = categoria.aplicaciones[i].calificacion
        for (let i = 0; i < calificacion; i++) {
          star += `<i class="fas fa-star"></i>`;
        }
        for (let i = 0; i < 5 - calificacion; i++) {
         star += `<i class="far fa-star"></i>`;
        }
       
            // console.log(calificacion)
            document.getElementById('app').innerHTML +=
                `<div class="col-12 col-lg-3 col-md-6 col-sm-6 col-xl-2 p-3">
                  <div class="card m-1">
                    <img onclick="modalApp(${i})" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="${categoria.aplicaciones[i].icono}" class="card-img-top app-img" alt="Card image cap">
                    <div class="card-body">
                         <h5 class="card-title">${categoria.aplicaciones[i].nombre}</h5>
                         <p class="card-text">${categoria.aplicaciones[i].desarrollador}</p>
                         <span style="color: #FFB718;" class="card-text">${star}</span><br>
                         <span class="card-text"><b>FREE</b></span>
                         </div>
                         <button class="btn btn-outline-danger" onclick="deleteApp(${i})" ><i class="fas fa-trash-alt"></i></button>
                  </div>
              </div>`
        }

    }

});
// apps()

//*******Cargar Apps************* */
function cargarAplicaciones(){
    // console.log('Cargar aplicaciones de la categoria:',$("#categoria").val())
     var nombre = "categorias"
     n = $("#categoria").val()
     document.getElementById('app').innerHTML = ''
     catego = localStorage.getItem(nombre + n)
     categoria = JSON.parse(catego)
     apk = categoria.aplicaciones
// console.log(apk)
    apk.forEach(function(app, i){
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
          <img onclick="modalApp(${i})" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src="${categoria.aplicaciones[i].icono}" class="card-img-top app-img" alt="Card image cap">
          <div class="card-body">
               <h5 class="card-title">${categoria.aplicaciones[i].nombre}</h5>
               <p class="card-text">${categoria.aplicaciones[i].desarrollador}</p>
               <span style="color: #FFB718;" class="card-text">${star}</span><br>
               <span class="card-text"><b>FREE</b></span>
               </div>
               <button class="btn btn-outline-danger" onclick="deleteApp(${i})" ><i class="fas fa-trash-alt"></i></button>
           </div>
    </div>
     `
    });   
}
// cargarAplicaciones();


//*******Cargar Apps ventanaModal************* */

 function modalApp(i){
     // console.log(i);
    //  indiceAppSelect = i;
     let app = categoria.aplicaciones[i];
     //* generear las estrellas de calificacion
         let star = "";
         for (let i = 0; i < app.calificacion; i++) {
           star += `<i class="fas fa-star"></i>`;
         }
         for (let i = 0; i < 5 - app.calificacion; i++) {
          star += `<i class="far fa-star"></i>`;
         }
         //* generear las img del carusel
         img = app.imagenes
         document.getElementById('imgCaruselA').innerHTML = ''; 
         document.getElementById('imgCarusel1').innerHTML = ''; 
         document.getElementById('imgCarusel2').innerHTML = ''; 
         for (const z in img) {
             document.getElementById('imgCaruselA').innerHTML = 
             `<img src="${img[0]}" class="d-block w-100" alt="...">
             `; 
             document.getElementById('imgCarusel1').innerHTML = 
             `<img src="${img[1]}" class="d-block w-100" alt="...">`
             document.getElementById('imgCarusel2').innerHTML = 
             `<img src="${img[2]}" class="d-block w-100" alt="...">`
             // console.log(img[z]);
         }
         //* generear los comentarios
         // console.log(app.imagenes);
         com = app.comentarios
         document.getElementById('comeU').innerHTML = ''; 
         document.getElementById('imgUser').innerHTML = '';
         for (let j in com) {
             document.getElementById('comeU').innerHTML += 
             `<h5 id="user"><b>${com[j].usuario}</b></h5>
             <p id="comentario">${com[j].comentario}</p>
             `

             document.getElementById('imgUser').innerHTML +=
             `<img id="imgUser" class="imgModal2" src="${com[j].user}" alt="">` 
             // console.log(com[j].user);
         }
         
         //* generear campos de la ventana modal
     var imgIco = document.getElementById('imgIco').value = app.icono
     var name = document.getElementById('name').value = app.nombre
     var developer = document.getElementById('developer').value = app.desarrollador
     var descripcion = document.getElementById('descripcion').value = app.descripcion
     document.getElementById('imgIco').innerHTML = `<img class="imgModal" src="${imgIco}" alt="">`
     document.getElementById('name').innerHTML = `<h1 id="name"><b>${name}</b></h1>`
     document.getElementById('developer').innerHTML = `<span id="developer"><b>${developer}</b></span>`
     document.getElementById('descripcion').innerHTML = `<p id="descripcion">${descripcion}</p>`
     
     //* generear el color de las estellas de calificacion
     calif = app.calificacion;
     if(calif >=3 ){
         document.getElementById('star').style.color = '#689F38';
         document.getElementById('star').innerHTML = ` <span class="card-text">${star} ${calif}.0</span><br>`
     }else{
         document.getElementById('star').style.color = 'red';
         document.getElementById('star').innerHTML = ` <span class="card-text">${star} ${calif}.0</span><br>`
     }   
     if(app.instalada == true){
         document.getElementById('btnInstall').style.display = 'none'
         alert('Ya esta instalada')
     }else{
         document.getElementById('btnInstall').style.display = 'block'
     }
     console.log(app.instalada);
 }

 //*******Btn Install************* */

function btnInstall(){
    alert('Instalando...')
}


for (let i = 1; i <= 50; i++) {
    document.getElementById('listApp').innerHTML += 
    `<option value="img/app-icons/${i}.webp">App${i}</option>`
}

var nombre = "categorias"
function newApp(){
    // indiceAppSelect = i;
    let app = categoria.aplicaciones;
    let nombreC = categoria.nombreCategoria;
    console.log(nombreC);
    // console.log(app.toString());

    let aplicaciones = {  
        nombre: document.getElementById('nameApp').value,
        icono: document.getElementById('listApp').value,
        desarrollador: document.getElementById('devApp').value,
        calificacion: document.getElementById('calif').value   
    };

     app.push(aplicaciones); 
    // categorias.push(categoria);
  
    localStorage.setItem("categorias", JSON.stringify(categorias));
    // localStorage.setItem(nombreC, JSON.stringify(categorias));


    cargarAplicaciones();
    
  


    console.log('new App');
}

function deleteApp(i){
    indiceAppSelect = i
    console.log(indiceAppSelect);

    var catego = $("#categoria").val()

    console.log('Categoria: ',catego);
    app = categoria.aplicaciones
    var Categorias = categorias.aplicaciones
    // console.log(Categorias);
    app = categoria.aplicaciones[indiceAppSelect]
    
    // console.log(apk);
    for (let i in categorias) {
        let ap = Categorias[i].aplicaciones;
        // var app = categoria.aplicaciones[i];
        if (catego == 0) {
            // ap.splice(i, 1)
            ap.splice(app, 1)
            localStorage.setItem("categorias", JSON.stringify(categorias));
        } else {
            console.error('no se puede eliminar');
        }

        // console.log(Categorias[i].aplicaciones);
        // apps()
        // console.log(ap);
        
    }
    let app2 = categorias


    // console.log('eliminar App:',i);

}


// function deleteApp(i){
//     aplicaciones.splice(i, 1) //*Eliminar splice
//     generarApps();
//     localStorage.setItem("aplicaciones", JSON.stringify(aplicaciones));
//     console.log('eliminar con el indice:',i);
// }
