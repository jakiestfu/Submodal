;(function($){
    var backdrop = {
        add: function(subModal){
            subModal.closest('.modal:not(.sub-modal)').append('<div class="sub-modal-backdrop"></div>');
        },
        remove: function(){
            $('.sub-modal-backdrop:visible').remove();
        }
    },
    modal = {
        open: function(subModal){
            var subModalHeight = subModal.height();
            subModal.css({
                display: 'block',
                opacity: 1,
                top: subModalHeight*-1
            }).animate({
                top: 0
            }, 200, function(){
                subModal.trigger('show');
            }).trigger('beforeShow');
            backdrop.add(subModal);
        },
        close: function(subModal){
            var subModalHeight = subModal.height();
            subModal.animate({
                top: subModalHeight*-1
            }, 200, function(){
                subModal.css({
                    opacity: '',
                    display: ''
                }).trigger('hide');
            });
            backdrop.remove();
        }
    },
    listen = {
        open: function(e){
            e.preventDefault();
            
            modal.open( $($(this).attr('href')) );
        },
        close: function(e){
            e.preventDefault();
            
            modal.close( $('.sub-modal:visible') );
        },
        init: function(){
            $(document).on('click', '[data-toggle="submodal"]', listen.open);
            $(document).on('click', '[data-dismiss="submodal"]', listen.close);
        }
    };
    
    listen.init();
    
    $.fn.extend({
        subModal: function(funcName) {
            
            var valid = {
                show: function(){
                    modal.open($(this));
                },
                hide: function(){
                    modal.close($(this));
                },
                toggle: function(){
                    var $subModal = $(this);
                    if($subModal.css('display')=="block"){
                        modal.close($subModal);
                    } else {
                        modal.open($subModal);
                    }
                }
            },
            isValid = typeof valid[funcName]=="function";
            
            if(isValid){
                return this.each(function() {
                    valid[funcName].call(this);
                });
            }
        }
    });
})(jQuery);
