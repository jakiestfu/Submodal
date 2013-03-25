/*
Copyright (c) 2013 Jacob Kelley, @jakiestfu, http://jakiestfu.com/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
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
