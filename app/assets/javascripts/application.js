// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .
$(function(){
  
   $('#myModal').modal('hide');
   $('#registerBox').hide();
   $('#modifyBox').hide();
   $('#listBox').hide();
   $('#deleteBox').hide();
   
   
   $('#registrar').click(function(){
       $('#modifyBox').hide();
       $('#listBox').hide();
       $('#deleteBox').hide();
       $('#registerBox').show();
       $('#registerR').show();
   });
   
   $('#modificar').click(function(){
       $('#listBox').hide();
       $('#deleteBox').hide();
       $('#registerBox').hide();
       $('#modifyBox').show();
       
   });
   
   $('#listar').click(function(){
       $('#deleteBox').hide();
       $('#registerBox').hide();
       $('#modifyBox').hide();
       $('#listBox').show();
       
   });
   
   $('#eliminar').click(function(){
       $('#registerBox').hide();
       $('#modifyBox').hide();
       $('#listBox').hide();
       $('#deleteBox').show();
       
   });
   
   
   $('#registerR').click(function() {
       $.ajax({
           url: 'https://logger-cailis89.c9.io/login',
           method: 'GET',
           datatype: 'JSON',
           data: { user: $('#usernameR').val(), pass: $('#passwordR').val()},
           success: function(data){
             
               
               
               
           },
           
       });
       
       $("#usernameR").val("");
       $("#passwordR").val("");
   });
   
   
    
});