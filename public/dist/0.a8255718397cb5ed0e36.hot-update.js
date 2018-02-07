webpackHotUpdate(0,{

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__(6);
var index_2 = __webpack_require__(4);
var Tipologie = __webpack_require__(3);
var buff_1 = __webpack_require__(14);
var arma_1 = __webpack_require__(15);
var magia_1 = __webpack_require__(2);
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
var paragrafo = document.querySelector('p');
setTimeout(function () {
    var valore = m.attack(c, fireball);
    paragrafo.innerText = "Hai colpito per " + valore + " danni!";
}, 1000);
setTimeout(function () {
    m.attack(c, fireball);
}, 200);
setTimeout(function () {
    m.attack(c, fireball);
}, 2000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQzFDLENBQUM7QUFZRDtJQUNBLE1BQU0sQ0FBQyxPQUFPLENBQW9CLEVBQUUsR0FBRyxFQUFFLDRDQUE0QyxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDO0FBRUQsSUFBTSxHQUFHLEdBQUcsNENBQTRDLENBQUM7QUFDekQsT0FBTyxDQUFvQixFQUFFLEdBQUcsT0FBRSxDQUFDO0tBQ2xDLElBQUksQ0FBQyxVQUFDLEdBQXNCO0lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFDLG1CQUFtQjtBQUM5QyxDQUFDLENBQUMiLCJmaWxlIjoiMC5hODI1NTcxODM5N2NiNWVkMGUzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEb29yfSBmcm9tICcuL3dvcmxkL3RhcmdldHRhYmxlL2luZGV4JztcbmltcG9ydCB7Q2hpZXJpY28sIEd1ZXJyaWVybywgTWFnb30gZnJvbSAnLi93b3JsZC90YXJnZXR0YWJsZS9wbGF5YWJsZS9pbmRleCc7XG5pbXBvcnQgKiBhcyBUaXBvbG9naWUgZnJvbSAnLi93b3JsZC9lbnVtZXJhemlvbmknO1xuaW1wb3J0IHtCdWZmfSBmcm9tICcuL3dvcmxkL2VmZmV0dGkvYnVmZic7XG5pbXBvcnQge0FybWF9IGZyb20gJy4vd29ybGQvYXJtaS9hcm1hJztcbmltcG9ydCB7TWFnaWF9IGZyb20gJy4vd29ybGQvbWFnaWEvbWFnaWEnO1xuXG5sZXQgZCA9IG5ldyBEb29yKDEwMCk7XG5sZXQgbSA9IG5ldyBNYWdvKCdNZXJsaW5vJywgVGlwb2xvZ2llLlJhenphLlVtYW5vaWRlLCB7XG4gIHN0cjogMTAsXG4gIGRleDogMjAsXG4gIGludDogNTBcbn0sIDEyKTtcbmxldCBnID0gbmV3IEd1ZXJyaWVybygnQ29uYW4nLCBUaXBvbG9naWUuUmF6emEuRHJhY29uaWFubywge1xuICBzdHI6NDAsXG4gIGRleDoxMixcbiAgaW50OiAyXG59LCAyMCk7XG5sZXQgYyA9IG5ldyBDaGllcmljbygnQ2xlcmljJywgVGlwb2xvZ2llLlJhenphLlVtYW5vaWRlLCB7XG4gIHN0cjogMjAsXG4gIGRleDogMTUsXG4gIGludDogOFxufSwgMTgpO1xuXG5sZXQgcCA9IG5ldyBCdWZmKHtcbiAgZWZmZXR0bzogVGlwb2xvZ2llLkVmZmV0dG8uUHJvdGV6aW9uZSxcbiAgY2F1c2E6IHtcbiAgICB0aXBvbG9naWE6IFRpcG9sb2dpZS5FbGVtZW50by5hY3F1YSxcbiAgICB2YWxvcmU6IDNcbiAgfVxufSwgMTgwMCk7XG5jLnNldEJ1ZmYocCk7XG5cbmxldCBzcGFkYSA9IG5ldyBBcm1hKCdTcGFkb25lIGEgMiBNYW5pJywgMywgVGlwb2xvZ2llLk1hdGVyaWFsZS5GZXJyaXRlKTtcbmxldCBmaXJlYmFsbCA9IG5ldyBNYWdpYSgnRmlyZWJhbGwnLCAxMCwgVGlwb2xvZ2llLkVsZW1lbnRvLmZ1b2NvKTtcbmxldCBwYXJhZ3JhZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwJyk7XG5cbnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgbGV0IHZhbG9yZSA9IG0uYXR0YWNrKGMsIGZpcmViYWxsKTtcbiAgcGFyYWdyYWZvLmlubmVyVGV4dCA9IGBIYWkgY29scGl0byBwZXIgJHt2YWxvcmV9IGRhbm5pIWA7XG59LDEwMDApO1xuc2V0VGltZW91dChmdW5jdGlvbigpe1xuICBtLmF0dGFjayhjLCBmaXJlYmFsbCk7XG59LDIwMCk7XG5cbnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgbS5hdHRhY2soYywgZmlyZWJhbGwpO1xufSwyMDAwKTtcblxuXG5pZihwYXJhZ3JhZm8pe1xuICBwYXJhZ3JhZm8uaW5uZXJUZXh0ID0gJ0NpYW8nO1xufVxuXG5cblxuXG5jb25zdCBnZXRKU09OID0gPFQ+KGNvbmZpZzogeyB1cmw6IHN0cmluZyB9KTogUHJvbWlzZTxUPiA9PiB7XG4gIGNvbnN0IGZldGNoQ29uZmlnID0gKHsgbWV0aG9kOiAnR0VUJyB9KTtcbiAgcmV0dXJuIGZldGNoKGNvbmZpZy51cmwsIGZldGNoQ29uZmlnKVxuICAgIC50aGVuPFQ+KHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSk7XG59XG5cbnR5cGUgTG9hZFVzZXJzUmVzcG9uc2UgPSB7XG51c2VyczogdXNlclxuW2tleTogbnVtYmVyXSA6IHVzZXJcbn1cblxudHlwZSB1c2VyID0ge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG59O1xuXG5mdW5jdGlvbiBsb2FkVXNlcnMoKSB7XG5yZXR1cm4gZ2V0SlNPTjxMb2FkVXNlcnNSZXNwb25zZT4oeyB1cmw6ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnIH0pO1xufVxuXG5jb25zdCB1cmwgPSAnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJztcbmdldEpTT048TG9hZFVzZXJzUmVzcG9uc2U+KHsgdXJsIH0pXG4udGhlbigocmVzOiBMb2FkVXNlcnNSZXNwb25zZSkgPT4ge1xuICBjb25zb2xlLmxvZyhyZXNbMF0ubmFtZSkgLy8gPD09IG5vIGVycm9yID8/P1xufSlcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21haW4udHMiXSwic291cmNlUm9vdCI6IiJ9