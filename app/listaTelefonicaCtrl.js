angular.module("listaTelefonica", []);

angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope){
    $scope.app = "Lista Telefônica";
    $scope.contatos = [
        {nome: "Ian", telefone: "991836108"},
        {nome: "Maria", telefone: "997108987"},
        {nome: "Carlos", telefone: "985263417"},
        {nome: "José", telefone: "987253615"},
        {nome: "Ana Clara", telefone: "997361525"}
    ];

    $scope.adicionarContato = function(contato){
        //Mantra AngJS: evitar ler o $scope no controller 
        //e tentar ao máximo definir abstração de entidade
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
    };
});