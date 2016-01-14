$(function(){

    console.info('EditorPlugin loaded');

    setScrollPosition(); // scroll to previous save position

    preventScroll(); // don't scroll window when right bar finished scrolling 

    $(window).keydown(function (e){
        if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.keyCode == 83) { /*ctrl+shift+s or command+shift+s*/
            
            saveScrollPosition();

            $('[role="post:save"]').first().trigger('click');
            e.preventDefault();
            return false;
        }

        if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.keyCode == 69) { /*ctrl+shift+e or command+shift+e*/
            e.preventDefault();
            $('[data-action="html"]').trigger('click');
            return false;
        };
    });

    // hide notice bar
    setTimeout(function() { 
        $('.notice').hide();
    }, 1000);

});

function preventScroll() {

    var toolbox = $('.media-container .media-list');
    
    toolbox.hover(function(){
        console.log('asdasd')
        var height = toolbox.height(),
        scrollHeight = toolbox.get(0).scrollHeight;
        toolbox.off("mousewheel").on("mousewheel", function (event) {
            var blockScrolling = this.scrollTop === scrollHeight - height && event.deltaY < 0 || this.scrollTop === 0 && event.deltaY > 0;
            return !blockScrolling;
        });
    });


}

function saveScrollPosition() {
    chrome.runtime.sendMessage({position: $(window).scrollTop()}, function(response) {
    });
}

function setScrollPosition() {
    chrome.runtime.sendMessage({position: 'get'}, function(response) {
        $(window).scrollTop(response.position);
    });  
}

