//Cria o serviço que será responsável por realizar as requisições contra o serviço de Lista de Compra da API
angular.module("listaCompras").factory("listaCompraService", function ($http) {
    var _getListas = function () {
        return $http.get(window._UrlApi + '/ListaCompra');
    };

    var _postLista = function (listaCompra) {
        return $http.post(window._UrlApi + '/ListaCompra', listaCompra);
    };

    var _deleteLista = function (id) {
        return $http.delete(window._UrlApi + '/ListaCompra/' + id)
    };

    return {
        getListas: _getListas,
        postLista: _postLista,
        deleteLista: _deleteLista
    };
});