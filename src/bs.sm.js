;(function($){

    var TRANSITION_DURATION = 300; // ms

    var modal = {
        open: function(){
            var $submodal = $(this);
            var $parentModal = $submodal.closest('.modal:not(.submodal)');

            // Hide our parents overflow
            $parentModal.addClass('parent');

            // set visibility
            $submodal.css({
                display: 'block',
                top: $submodal.height() * -1
            });

            // Show
            setTimeout(function(){
                $submodal.addClass('transition in').trigger('beforeShow');
                setTimeout(function() {
                    $submodal.addClass('transition in').trigger('show');
                }, TRANSITION_DURATION);
            }, 1);
        },
        close: function(){

            var $submodal = $(this);
            var $parentModal = $submodal.closest('.modal:not(.submodal) .modal-body');

            // Hide
            $submodal.removeClass('in').trigger('beforeHide');

            // Reset styles
            setTimeout(function(){
                $submodal.css({
                    display: "none",
                    top: ""
                }).removeClass('transition').trigger('hide');

                // Reset parents overflow
                $parentModal.removeClass('parent');
            }, TRANSITION_DURATION);
        }
    },
    listen = {
        open: function(e){
            e.preventDefault();

            var $submodal = $($(this).attr('href'));
            if(!$submodal.length) {
                return;
            }

            modal.open.call( $submodal );
        },
        close: function(e){
            e.preventDefault();
            modal.close.call( $('.submodal:visible') );
        },
        init: function(){
            $(document)
                .on('click', '[data-toggle="submodal"]', listen.open)
                .on('click', '[data-dismiss="submodal"]', listen.close);
        }
    };

    listen.init();

    $.fn.extend({
        submodal: function(fn) {

            var methods = {
                show: function(){
                    modal.open.call($(this));
                },
                hide: function(){
                    modal.close.call($(this));
                },
                toggle: function(){
                    var $submodal = $(this);
                    var fn = $subModal.is(':visible') ? 'close' : 'open';
                    modal[fn].call($submodal);
                }
            };
            if( typeof methods[fn]=="function" ){
                return this.each(function() {
                    methods[fn].call(this);
                });
            }
        }
    });
})(jQuery);
