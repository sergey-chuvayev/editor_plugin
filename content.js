$(window).keydown(function (e){
    if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.keyCode == 83) { /*ctrl+shift+s or command+shift+s*/
        console.info('saving post...');
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