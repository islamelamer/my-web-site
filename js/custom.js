$(document).ready(function(){
    
    'use strict';



//    //    // adjust slider height
//    
   
  
    
    var winH=$(window).height(),
        
        nav=$(".nav-bar").innerHeight();    //عشان يحسب الهوامش 
    
        
    
    $(".carousel-item,.intro").height(winH);
    
   
    
    // end  slider height
    
    
    
//    adjust  nav menu
    
    
    
    
    
    
    
    $(".menu ul li a").on("click",function(){
        
        
       $(".menu ul li a").removeClass("active");
        $(this).addClass("active");
        
        
        
        
        
    })
    
    
    
    //    end adjust  nav menu
    
    
    
    
    
//    timer
    
 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
      
$(window).on('scroll', function(){
    
    var x=1;
    
    
    
    
    if($(this).scrollTop()>=1800 && x==1)
            {
                
                $('.timer').countTo();
                
                x=2;
                
                
                
            }
    
    
    
    

});

    
    

      
                
               
                
        
    
    
    
   
    
    
    

       
    
    
    
    
    
    
    
    
    
    
    
    
//    end timer
    
    
    
    
    
    
    
    
    
   //    scroll top
    
    
    
    
    $(window).on("scroll",function(){
        
        
        if($(this).scrollTop()>=200)
            {
                
               $(".nav-bar").slideUp(1000);
                
            }
        
        
        else{
            
            
            
            
            $(".nav-bar").slideDown(1000);
            
            
            
            
            
            
            
        }
       
        
        
        
        
    });
    
    
    
    
    
    
//    side bar scroll
    
    
    
    
    
    $(window).on("scroll",function(){
        
        
        if($(this).scrollTop()>=500)
            {
                
               $(".side-bar").slideUp(1000);
                
            }
        
        
        else{
            
            
            
            
            $(".side-bar").slideDown(1000);
            
            
            
            
            
            
            
        }
       
        
        
        
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
//    side bar scroll
    
    
    
    
    
    
    
//    end scroll top 
    
    
   
    
    
    
    
    
    
    

    
    
//    animate progress
    
    
    
    
    
    
   
                
                $(".progress-bar").each(function(){
        
        
        
         var value=$(this).attr("data-value");
    
    
    $(this).animate({width:value},6000);
        
        
        
    });
                
                
                
                
 
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   
    
    
//    end animate progress
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

});

























//start loading








$(window).on("load",function(){
    
    
// $("body").css("overflow","auto");    //      عشاان متعمليش مشكلة فى الاسكروول 
    
                                   // لكن اناا مش هستخدمهااا لانى مستخدم nice scroll 
    
    
  $(".loading .sk-cube-grid").fadeOut(1000,function(){
      
      
       $(".loading").slideUp(1000,function(){ $(this).remove() })
      
      
      }) ;
      
      
      
      
      
      
     
      
      
   
    
    
});













   


    
























                  
                  