

export const customDirective = {
    directive($log) {
        var smallwordsbreakpoint = 20;
        var longwordsbreakpoint = 100;
        var lengthofText = element[0].childNodes[1].innerHTML.length;
        return {
            restrict: 'A',
            link: function ($scope, element, attrs) {
                $scope.$watch('update', function () {
                   if(lengthofText > breakpoint && lengthofText > longwordsbreakpoint) {
                      element.parent().children().children().css('padding', ('30px'))
                   }
                });
            }
        }
    }
}
