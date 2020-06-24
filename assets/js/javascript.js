$(document).ready(function(){
    // Show hide popover
    $("#navbarNav").click(function(){
        $(this).find(".topnav").slideToggle("fast");
    });
});
$(document).on("click", function(event){
    var $trigger = $("#navbarNav");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".topnav").slideUp("fast");
    }            
});