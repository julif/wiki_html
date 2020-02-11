<style>
 #sidebar_options .nav-item:nth-of-type(2){background-color: #335faf!important;}
#div-btn2{ color: white;}
#mobile-btn2{ background-color: #335faf!important;color: white;}
</style>
<script type="text/javascript">
    $(document).ready(function() {
        $('.serpiente_negra').on('click', function(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    //(... rest of your JS code)
            $("#main").load('personajes/serpiente_negra.php');
            $('html,body').scrollTop(0);
            return false;
        });
    });
function link_to(a){
  $("#main").load(a);
  return false;
}


    </script>


      <!-- ------------------------------------------------ -->
      <!-- -------------- linea de tiempo   ---------------------- -->
      <!-- ------------------------------------------------ -->
      <second_sidebar> hola </second_sidebar>
   <div style="width: -webkit-fill-available;">
      <banner>
        <banner_content>    
           <h1 style=" margin-top: 0px;">Personajes</h1>
           <p>texto de personajes </p> 
        </banner_content>
      </banner>

      <contenido> 
<contenido> 
         

         <!-- ------------------------------------------------ -->
         <!-- -------------- personajes ---------------------- -->
         <!-- ------------------------------------------------ -->
        
         <ul>
           <li><a href="#" onclick="link_to('personajes/serpiente_negra.php')" >   La serpiente negra  </a></li>
           <li><a href="#" onclick="link_to('personajes/primer_angel.php')" > el primer angel </a> </li>
           <li><a href="#" onclick="link_to('personajes/segundo_angel.php')"> el segundo angel </a> </li>
           <li><a  href="#" onclick="link_to('personajes/tercer_angel.php')"> el tercer angel </a> </li>
           <li><a href="personajes/leon_arena.html"> el leon de arena </a> </li>
           <li><a href="personajes/heredero_primer_angel.html"> el heredero de el primer angel </a> </li>
           <li> <a href="personajes/heraldo_primogenio_serpiente.html"> el heraldo primigenio de la serpiente </a></li>
           <li> <a href="personajes/hechizero_primogenio.html"> el antiguos hechizero primigenio  </a></li>
           <li> <a href="personajes/el_cocodrilo.html"> el cocodrilo </a></li>
           <li> <a href="personajes/madre_nix.html"> la madre de nix </a></li>
           <li> <a href="personajes/el_del_bosque.html">  el del bosque </a></li>
           <li> <a href="personajes/el_ave.html"> el ave </a></li>
          
             
</contenido>