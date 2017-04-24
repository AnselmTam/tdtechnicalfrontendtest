export const customDirective = {
    directive() {
        var breakpoint= 30;
        return {
            restrict: 'AEC',

            //Creating a Directive that Manipulates the DOM
            //scope is an AngularJS scope object.
            //element is the jqLite-wrapped element that this directive matches.
            //attrs is a hash object with key-value pairs of normalized attribute names and their corresponding attribute values.
            link: function ($scope, element, attrs) {
                $scope.$watch('update', function () {
                   if(element[0].childNodes[1].innerHTML.length > breakpoint) {
                      element.parent().children().children().css('margin', ('30px'))
                   }
                });
            }
        }
    }
}
