angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $http){
    $scope.app = "Lista Telefônica";
    $scope.contatos = [
        {nome: "Ian", telefone: "991836108", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}, cor: "blue"},
        {nome: "Maria", telefone: "997108987", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}, cor: "green"},
        {nome: "Carlos", telefone: "985263417", data: new Date(), operadora: {nome: "Oi", codigo: 31, categoria: "Celular"}, cor: "red"},
        {nome: "José", telefone: "987253615", data: new Date(), operadora: {nome: "Claro", codigo: 21, categoria: "Celular"}, cor: "black"},
        {nome: "Ana Clara", telefone: "997361525", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}, cor: "yellow"}
    ];

    /*var carregarContatos = function(){
        $http.get("").success(function(data, status){
            $scope.contatos = data;
        });
    };*/

    $scope.operadoras = [
        {nome: "Claro", codigo: 21, categoria: "Celular", preco: 2},
        {nome: "Vivo", codigo: 15, categoria: "Celular", preco: 5},
        {nome: "Embratel", codigo: 40, categoria: "Fixo", preco: 3},
        {nome: "Tim", codigo: 41, categoria: "Celular", preco: 2},
        {nome: "Oi", codigo: 31, categoria: "Celular", preco: 1},
        {nome: "GVT", codigo: 16, categoria: "Fixo", preco: 2}
    ];

    $scope.adicionarContato = function(contato){
        //Mantra AngJS: evitar ler o $scope no controller 
        //e tentar ao máximo definir abstração de entidade
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
    };

    $scope.apagarContato = function(contatos){
        $scope.contatos = contatos.filter(function(contato){
            if(!contato.selecionado)
                return contato;
        });
        //console.log(contatosSelecionados);
    };

    $scope.isContatoSelecionado = function(contatos){
        return contatos.some(function(contato){
            return contato.selecionado;
        });
    };
    //$scope.classe1 = "selecionado";
    //$scope.classe2 = "negrito";

    $scope.ordenarPor = function(campo){
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoOredernacao = !$scope.direcaoOredernacao;
    };
});