describe("goDialogue.directives", function(){
    beforeEach(module('goDialogue.services'));
    beforeEach(module('goDialogue.directives'));

    describe("goDialogueScreen", function(){
        var $el;

        beforeEach(inject(function($rootScope, $compile, fixtures){
            $rootScope.data = fixtures.simple();

            $el = angular.element([
                '<go-dialogue-screen data-data="data" class="go-dialogue">',
                '</go-dialogue-screen>'
            ].join(''));

            $compile($el)($rootScope);
            $rootScope.$digest();
        }));

        it("should check group tag", function(){
            expect($el.find('g')).to.have.length(3);
        });

        it("should draw circles", function(){
            expect($el.find('.circle')).to.have.length(3);
        });

        it("should check appended text elements", function(){
            expect($el.find('text')).to.have.length(3);
        });
    });
});