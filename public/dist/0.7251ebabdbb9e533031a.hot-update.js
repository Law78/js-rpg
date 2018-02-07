webpackHotUpdate(0,{

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(11);
var index_2 = __webpack_require__(7);
var Tipologie = __webpack_require__(6);
var buff_1 = __webpack_require__(21);
var arma_1 = __webpack_require__(23);
var magia_1 = __webpack_require__(5);
var d = new index_1.Door(100);
var m = new index_2.Mago('Merlino', Tipologie.Razza.Umanoide, {
    str: 10,
    dex: 20,
    int: 50
}, 12);
var g = new index_2.Guerriero('Conan', Tipologie.Razza.Draconiano, {
    str: 40,
    dex: 12,
    int: 2
}, 20);
var c = new index_2.Chierico('Cleric', Tipologie.Razza.Umanoide, {
    str: 20,
    dex: 15,
    int: 8
}, 18);
var p = new buff_1.Buff({
    effetto: Tipologie.Effetto.Protezione,
    causa: {
        tipologia: Tipologie.Elemento.acqua,
        valore: 3
    }
}, 1800);
c.setBuff(p);
var spada = new arma_1.Arma('Spadone a 2 Mani', 3, Tipologie.Materiale.Ferrite);
var fireball = new magia_1.Magia('Fireball', 10, Tipologie.Elemento.fuoco);
setTimeout(function () {
    var valore = m.attack(c, fireball);
}, 1000);
setTimeout(function () {
    m.attack(c, fireball);
}, 200);
setTimeout(function () {
    m.attack(c, fireball);
}, 2000);
var paragrafo = document.querySelector('p');
if (paragrafo) {
    paragrafo.innerText = 'Ciao';
}
var getJSON = function (config) {
    var fetchConfig = ({ method: 'GET' });
    return fetch(config.url, fetchConfig)
        .then(function (response) { return response.json(); });
};
function loadUsers() {
    return getJSON({ url: 'https://jsonplaceholder.typicode.com/users' });
}
var url = 'https://jsonplaceholder.typicode.com/users';
getJSON({ url: url })
    .then(function (res) {
    console.log(res[0].name); // <== no error ???
});


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxFQUFFLDRDQUE0QyxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBRUQsSUFBTSxHQUFHLEdBQUcsNENBQTRDLENBQUM7QUFDekQsT0FBTyxDQUFvQixFQUFFLEdBQUcsT0FBRSxDQUFDO0tBQ2xDLElBQUksQ0FBQyxVQUFDLEdBQXNCO0lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLG1CQUFtQjtBQUM5QyxDQUFDLENBQUMiLCJmaWxlIjoiMC43MjUxZWJhYmRiYjllNTMzMDMxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEb29yfSBmcm9tICcuL3dvcmxkL3RhcmdldHRhYmxlL2luZGV4JztcbmltcG9ydCB7Q2hpZXJpY28sIEd1ZXJyaWVybywgTWFnb30gZnJvbSAnLi93b3JsZC90YXJnZXR0YWJsZS9wbGF5YWJsZS9pbmRleCc7XG5pbXBvcnQgKiBhcyBUaXBvbG9naWUgZnJvbSAnLi93b3JsZC9lbnVtZXJhemlvbmknO1xuaW1wb3J0IHtCdWZmfSBmcm9tICcuL3dvcmxkL2VmZmV0dGkvYnVmZic7XG5pbXBvcnQge0FybWF9IGZyb20gJy4vd29ybGQvYXJtaS9hcm1hJztcbmltcG9ydCB7TWFnaWF9IGZyb20gJy4vd29ybGQvbWFnaWEvbWFnaWEnO1xuXG5sZXQgZCA9IG5ldyBEb29yKDEwMCk7XG5sZXQgbSA9IG5ldyBNYWdvKCdNZXJsaW5vJywgVGlwb2xvZ2llLlJhenphLlVtYW5vaWRlLCB7XG4gIHN0cjogMTAsXG4gIGRleDogMjAsXG4gIGludDogNTBcbn0sIDEyKTtcbmxldCBnID0gbmV3IEd1ZXJyaWVybygnQ29uYW4nLCBUaXBvbG9naWUuUmF6emEuRHJhY29uaWFubywge1xuICBzdHI6NDAsXG4gIGRleDoxMixcbiAgaW50OiAyXG59LCAyMCk7XG5sZXQgYyA9IG5ldyBDaGllcmljbygnQ2xlcmljJywgVGlwb2xvZ2llLlJhenphLlVtYW5vaWRlLCB7XG4gIHN0cjogMjAsXG4gIGRleDogMTUsXG4gIGludDogOFxufSwgMTgpO1xuXG5sZXQgcCA9IG5ldyBCdWZmKHtcbiAgZWZmZXR0bzogVGlwb2xvZ2llLkVmZmV0dG8uUHJvdGV6aW9uZSxcbiAgY2F1c2E6IHtcbiAgICB0aXBvbG9naWE6IFRpcG9sb2dpZS5FbGVtZW50by5hY3F1YSxcbiAgICB2YWxvcmU6IDNcbiAgfVxufSwgMTgwMCk7XG5jLnNldEJ1ZmYocCk7XG5cbmxldCBzcGFkYSA9IG5ldyBBcm1hKCdTcGFkb25lIGEgMiBNYW5pJywgMywgVGlwb2xvZ2llLk1hdGVyaWFsZS5GZXJyaXRlKTtcbmxldCBmaXJlYmFsbCA9IG5ldyBNYWdpYSgnRmlyZWJhbGwnLCAxMCwgVGlwb2xvZ2llLkVsZW1lbnRvLmZ1b2NvKTtcblxuc2V0VGltZW91dChmdW5jdGlvbigpe1xuICBsZXQgdmFsb3JlID0gbS5hdHRhY2soYywgZmlyZWJhbGwpO1xuICBcbn0sMTAwMCk7XG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gIG0uYXR0YWNrKGMsIGZpcmViYWxsKTtcbn0sMjAwKTtcblxuc2V0VGltZW91dChmdW5jdGlvbigpe1xuICBtLmF0dGFjayhjLCBmaXJlYmFsbCk7XG59LDIwMDApO1xuXG5sZXQgcGFyYWdyYWZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigncCcpO1xuaWYocGFyYWdyYWZvKXtcbiAgcGFyYWdyYWZvLmlubmVyVGV4dCA9ICdDaWFvJztcbn1cblxuXG5cblxuY29uc3QgZ2V0SlNPTiA9IDxUPihjb25maWc6IHsgdXJsOiBzdHJpbmcgfSk6IFByb21pc2U8VD4gPT4ge1xuICBjb25zdCBmZXRjaENvbmZpZyA9ICh7IG1ldGhvZDogJ0dFVCcgfSk7XG4gIHJldHVybiBmZXRjaChjb25maWcudXJsLCBmZXRjaENvbmZpZylcbiAgICAudGhlbjxUPihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpO1xufVxuXG50eXBlIExvYWRVc2Vyc1Jlc3BvbnNlID0ge1xudXNlcnM6IHVzZXJcbltrZXk6IG51bWJlcl0gOiB1c2VyXG59XG5cbnR5cGUgdXNlciA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xufTtcblxuZnVuY3Rpb24gbG9hZFVzZXJzKCkge1xucmV0dXJuIGdldEpTT048TG9hZFVzZXJzUmVzcG9uc2U+KHsgdXJsOiAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJyB9KTtcbn1cblxuY29uc3QgdXJsID0gJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycyc7XG5nZXRKU09OPExvYWRVc2Vyc1Jlc3BvbnNlPih7IHVybCB9KVxuLnRoZW4oKHJlczogTG9hZFVzZXJzUmVzcG9uc2UpID0+IHtcbiAgY29uc29sZS5sb2cocmVzWzBdLm5hbWUpIC8vIDw9PSBubyBlcnJvciA/Pz9cbn0pXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9tYWluLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==