$(document).ready(function(){
    // Show hide popover
    $(".navbar-toggler").click(function(){
        $(this).find(".topnav").slideToggle("fast");
    });
});
$(document).on("click", function(event){
    var $trigger = $(".navbar-toggler");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".topnav").slideUp("fast");
    }            
});