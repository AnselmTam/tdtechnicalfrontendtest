export const customDirective = {
    directive() {
        var breakpoint= 30;
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                $scope.$watch('update', function () {
                   if(element[0].childNodes[1].innerHTML.length > breakpoint) {
                      element.parent().children().children().css('padding', ('2em'))
                   }
                });
            }
        }
    }
}
