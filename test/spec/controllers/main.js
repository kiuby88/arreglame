'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('arreglameApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of tareas to the scope', function () {
    expect(scope.tareas.length).toBe(3);
  });

  it('add item', function () {
    scope.tarea= 'nuevaTarea'
    scope.addTarea();
    expect(scope.tareas.length).toBe(4);
  });

  it('delete item', function () {
    scope.tarea='nuevaTarea';
    scope.addTarea();
    scope.eliminarTarea(3);
    expect(scope.tareas.length).toBe(3);
  });

});
