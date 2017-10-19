'use strict';

(function(){

class PlanocarteseanoComponent {
  constructor() {

  }
hallarP(){
this.x = this.x1 - this.x2;
console.log(this.x);

}

}

angular.module('javascriptApp')
  .component('planocarteseano', {
    templateUrl: 'app/planocarteseano/planocarteseano.html',
    controller: PlanocarteseanoComponent,
    controllerAs: 'vm'
  });

})();
