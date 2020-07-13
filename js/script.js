$(function(){

    let $mainMenuItems = $('#main_menu ul').children('li'),
        totalMainMenuItems = $mainMenuItems.length,
        openIndex = 2,
        init = function(){
            bindEvent();
            if(validIndex(openIndex)) {
                animateItem($mainMenuItems.eq(openIndex), true, 700);
            }            
        };

        bindEvent = function() {
            $mainMenuItems.children('.images').on('click', function(){
                var newIndex = $(this).parent().index();
                checkAndAnimateItem(newIndex);
            });

        $('.button').hover(
        function(){
            $(this).addClass('hovered');
        }, function(){
            $(this).removeClass('hovered');
        });

        $('.button').on('click', function(){
            var newIndex = $(this).index();
            checkAndAnimateItem(newIndex);
        })

        };

        validIndex = function(indexToCheck) {

            return (indexToCheck >= 0 ) && (indexToCheck < totalMainMenuItems);
        };

        checkAndAnimateItem = function(indexToCheckAndAnimateItem){
            if (openIndex === indexToCheckAndAnimateItem) {
                animateItem($mainMenuItems.eq(indexToCheckAndAnimateItem), false, 250);
                openIndex = -1;
            }else {
                if (validIndex(indexToCheckAndAnimateItem)) {
                    animateItem($mainMenuItems.eq(openIndex), false, 250);
                    openIndex = indexToCheckAndAnimateItem;
                    animateItem($mainMenuItems.eq(openIndex), true, 250);
                }
            }
        };

        animateItem = function($item, toOpen, speed){
            var $colorImage = $item.find('.color'),
            colorImageParam = toOpen ? {left: '0'} : {left: '140px'},
            itemParam = toOpen ? {width: '420px'} : {width: '140px'};
            $colorImage.animate(colorImageParam, speed);
            $item.animate(itemParam, speed);
        };


        init();

});