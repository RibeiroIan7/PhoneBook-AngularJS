angular.module("listaTelefonica", ["ngMessages"]);

angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope){
    $scope.app = "Lista Telefônica";
    $scope.contatos = [
        {nome: "Ian", telefone: "991836108", cor: "blue"},
        {nome: "Maria", telefone: "997108987", cor: "green"},
        {nome: "Carlos", telefone: "985263417", cor: "red"},
        {nome: "José", telefone: "987253615", cor: "black"},
        {nome: "Ana Clara", telefone: "997361525", cor: "yellow"}
    ];

    $scope.operadoras = [
        {nome: "Claro", codigo: 21, categoria: "Celular"},
        {nome: "Vivo", codigo: 15, categoria: "Celular"},
        {nome: "Embratel", codigo: 40, categoria: "Fixo"},
        {nome: "Tim", codigo: 41, categoria: "Celular"},
        {nome: "Oi", codigo: 31, categoria: "Celular"},
        {nome: "GVT", codigo: 16, categoria: "Fixo"}
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
});