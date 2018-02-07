webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var magia_1 = __webpack_require__(2);
var enumerazioni_1 = __webpack_require__(3);
var Targettable = /** @class */ (function () {
    function Targettable(hits) {
        this.hits = hits;
        this._buffs = [];
        this._pf = hits;
    }
    Object.defineProperty(Targettable.prototype, "Hits", {
        get: function () {
            return this._pf;
        },
        set: function (value) {
            this._pf = value;
        },
        enumerable: true,
        configurable: true
    });
    Targettable.prototype.isDead = function () {
        return this._pf > 0 ? false : true;
    };
    Targettable.prototype.setBuff = function (buff) {
        this._buffs.push(buff);
    };
    Targettable.prototype.getBuff = function () {
        return this._buffs;
    };
    return Targettable;
}());
exports.Targettable = Targettable;
var Animato = /** @class */ (function (_super) {
    __extends(Animato, _super);
    function Animato(hits) {
        var _this = _super.call(this, hits) || this;
        _this.hits = hits;
        _this._lastAttack = 0;
        return _this;
    }
    Animato.prototype.attack = function (target, arma) {
        if (Date.now() - this._lastAttack < 1000) {
            console.log('nn posso attaccare di nuovo... mi sto riprendendo');
            return 0;
        }
        this._lastAttack = Date.now();
        var protezione = 0;
        if (target instanceof Targettable) {
            target.getBuff().filter(function (b) { return b.buff.effetto == enumerazioni_1.Effetto.Protezione; })
                .map(function (b) {
                if (arma instanceof magia_1.Magia) {
                    if (arma.elemento === b.buff.causa.tipologia) {
                        if (b.isValid()) {
                            console.log('ho protezione...giusta', b.buff.causa.valore);
                            protezione = b.buff.causa.valore;
                        }
                    }
                }
            });
            target.Hits -= arma.danni >= protezione ? arma.danni - protezione : 0;
        }
        return arma.danni - protezione;
    };
    return Animato;
}(Targettable));
exports.Animato = Animato;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var targettable_1 = __webpack_require__(0);
var Personaggio = /** @class */ (function (_super) {
    __extends(Personaggio, _super);
    function Personaggio(nome, razza, stats, hits) {
        var _this = _super.call(this, hits) || this;
        _this.nome = nome;
        _this.razza = razza;
        _this.stats = stats;
        _this.hits = hits;
        return _this;
    }
    return Personaggio;
}(targettable_1.Animato));
exports.Personaggio = Personaggio;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Magia = /** @class */ (function () {
    function Magia(nome, danni, elemento) {
        this.nome = nome;
        this.danni = danni;
        this.elemento = elemento;
    }
    return Magia;
}());
exports.Magia = Magia;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Razza;
(function (Razza) {
    Razza[Razza["Umanoide"] = 0] = "Umanoide";
    Razza[Razza["Draconiano"] = 1] = "Draconiano";
    Razza[Razza["Lucertoloide"] = 2] = "Lucertoloide";
})(Razza = exports.Razza || (exports.Razza = {}));
var Elemento;
(function (Elemento) {
    Elemento[Elemento["acqua"] = 1] = "acqua";
    Elemento[Elemento["aria"] = 2] = "aria";
    Elemento[Elemento["fuoco"] = 3] = "fuoco";
    Elemento[Elemento["terra"] = 4] = "terra";
})(Elemento = exports.Elemento || (exports.Elemento = {}));
var Materiale;
(function (Materiale) {
    Materiale[Materiale["Ossidiana"] = 1] = "Ossidiana";
    Materiale[Materiale["Ferrite"] = 2] = "Ferrite";
    Materiale[Materiale["Diamantite"] = 3] = "Diamantite";
    Materiale[Materiale["Bronzo"] = 4] = "Bronzo";
    Materiale[Materiale["Smeraldo"] = 5] = "Smeraldo";
    Materiale[Materiale["Rubino"] = 6] = "Rubino";
})(Materiale = exports.Materiale || (exports.Materiale = {}));
var Effetto;
(function (Effetto) {
    Effetto[Effetto["Cura"] = 1] = "Cura";
    Effetto[Effetto["Protezione"] = 2] = "Protezione";
    Effetto[Effetto["Miglioramento"] = 3] = "Miglioramento";
})(Effetto = exports.Effetto || (exports.Effetto = {}));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var chierico_1 = __webpack_require__(9);
exports.Chierico = chierico_1.Chierico;
var guerriero_1 = __webpack_require__(10);
exports.Guerriero = guerriero_1.Guerriero;
var mago_1 = __webpack_require__(11);
exports.Mago = mago_1.Mago;


/***/ }),
/* 5 */
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
setTimeout(function () {
    m.attack(c, fireball);
}, 1000);
setTimeout(function () {
    m.attack(c, fireball);
}, 200);
setTimeout(function () {
    m.attack(c, fireball);
}, 2000);
var paragrafo = document.querySelector('p');
paragrafo.inner;
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


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(7));
__export(__webpack_require__(4));
__export(__webpack_require__(12));


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var door_1 = __webpack_require__(8);
exports.Door = door_1.Door;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var targettable_1 = __webpack_require__(0);
var Door = /** @class */ (function (_super) {
    __extends(Door, _super);
    function Door() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Door.prototype.toString = function () {
        return 'Door';
    };
    return Door;
}(targettable_1.Targettable));
exports.Door = Door;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var personaggio_1 = __webpack_require__(1);
var Chierico = /** @class */ (function (_super) {
    __extends(Chierico, _super);
    function Chierico(nome, razza, stats, hits) {
        var _this = _super.call(this, nome, razza, stats, hits) || this;
        _this.nome = nome;
        _this.razza = razza;
        _this.stats = stats;
        _this.hits = hits;
        return _this;
    }
    Chierico.prototype.toString = function () {
        return this.nome;
    };
    Chierico.prototype.attack = function (target, arma) {
        return _super.prototype.attack.call(this, target, arma);
    };
    return Chierico;
}(personaggio_1.Personaggio));
exports.Chierico = Chierico;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var personaggio_1 = __webpack_require__(1);
var Guerriero = /** @class */ (function (_super) {
    __extends(Guerriero, _super);
    function Guerriero(nome, razza, stats, hits) {
        var _this = _super.call(this, nome, razza, stats, hits) || this;
        _this.nome = nome;
        _this.razza = razza;
        _this.stats = stats;
        _this.hits = hits;
        return _this;
    }
    Guerriero.prototype.toString = function () {
        return this.nome;
    };
    Guerriero.prototype.attack = function (target, arma) {
        return _super.prototype.attack.call(this, target, arma);
    };
    return Guerriero;
}(personaggio_1.Personaggio));
exports.Guerriero = Guerriero;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var personaggio_1 = __webpack_require__(1);
var Mago = /** @class */ (function (_super) {
    __extends(Mago, _super);
    function Mago(nome, razza, stats, hits) {
        var _this = _super.call(this, nome, razza, stats, hits) || this;
        _this.nome = nome;
        _this.razza = razza;
        _this.stats = stats;
        _this.hits = hits;
        return _this;
    }
    Mago.prototype.toString = function () {
        return this.nome;
    };
    Mago.prototype.attack = function (target, arma) {
        return _super.prototype.attack.call(this, target, arma);
    };
    return Mago;
}(personaggio_1.Personaggio));
exports.Mago = Mago;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Drago_1 = __webpack_require__(13);
exports.Drago = Drago_1.Drago;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var targettable_1 = __webpack_require__(0);
var Drago = /** @class */ (function (_super) {
    __extends(Drago, _super);
    function Drago() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Drago.prototype.toString = function () {
        return 'Drago';
    };
    Drago.prototype.attack = function (target, arma) {
        return _super.prototype.attack.call(this, target, arma);
    };
    return Drago;
}(targettable_1.Animato));
exports.Drago = Drago;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Buff = /** @class */ (function () {
    function Buff(buff, durata) {
        this.buff = buff;
        this._pulse = Date.now() + durata;
        setTimeout(function () {
            console.log('buff finito!!!');
        }, durata);
    }
    Buff.prototype.isValid = function () {
        if (this._pulse >= Date.now())
            return true;
        return false;
    };
    return Buff;
}());
exports.Buff = Buff;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Arma = /** @class */ (function () {
    function Arma(nome, danni, materiale) {
        this.nome = nome;
        this.danni = danni;
    }
    return Arma;
}());
exports.Arma = Arma;


/***/ })
])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvdGFyZ2V0dGFibGUvdGFyZ2V0dGFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3RhcmdldHRhYmxlL3BsYXlhYmxlL3BlcnNvbmFnZ2lvLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC9tYWdpYS9tYWdpYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvZW51bWVyYXppb25pLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC90YXJnZXR0YWJsZS9wbGF5YWJsZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvdGFyZ2V0dGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3RhcmdldHRhYmxlL2l0ZW1zL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC90YXJnZXR0YWJsZS9pdGVtcy9kb29yLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC90YXJnZXR0YWJsZS9wbGF5YWJsZS9jaGllcmljby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvdGFyZ2V0dGFibGUvcGxheWFibGUvZ3VlcnJpZXJvLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC90YXJnZXR0YWJsZS9wbGF5YWJsZS9tYWdvLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC90YXJnZXR0YWJsZS9tb2IvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dvcmxkL3RhcmdldHRhYmxlL21vYi9EcmFnby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd29ybGQvZWZmZXR0aS9idWZmLnRzIiwid2VicGFjazovLy8uL3NyYy93b3JsZC9hcm1pL2FybWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxxQ0FBcUM7QUFDckMsNENBQXdDO0FBYXhDO0lBR0UscUJBQW1CLElBQVk7UUFBWixTQUFJLEdB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IjoiMC4xMmQ5NjUwYjEyMjFjYTk4OWRmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtCdWZmfSBmcm9tICcuLi9lZmZldHRpL2J1ZmYnO1xuaW1wb3J0IHtBcm1hfSBmcm9tICcuLi9hcm1pL2FybWEnO1xuaW1wb3J0IHtNYWdpYX0gZnJvbSAnLi4vbWFnaWEvbWFnaWEnO1xuaW1wb3J0IHtFZmZldHRvfSBmcm9tICcuLi9lbnVtZXJhemlvbmknO1xuXG5leHBvcnQgdHlwZSBTdGF0cyA9IHtcbiAgc3RyOiBudW1iZXI7XG4gIGRleDogbnVtYmVyO1xuICBpbnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGFyZ2V0dGFibGV7XG4gIGhpdHM6IG51bWJlclxuICBpc0RlYWQoKTpib29sZWFuXG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUYXJnZXR0YWJsZSBpbXBsZW1lbnRzIElUYXJnZXR0YWJsZXtcbiAgcHJpdmF0ZSBfcGY6bnVtYmVyO1xuICBwcml2YXRlIF9idWZmczogQnVmZltdID0gW107XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBoaXRzOiBudW1iZXIpe1xuICAgIHRoaXMuX3BmID0gaGl0cztcbiAgfVxuICBhYnN0cmFjdCB0b1N0cmluZygpOiBzdHJpbmc7XG4gIGdldCBIaXRzKCk6IG51bWJlcntcbiAgICByZXR1cm4gdGhpcy5fcGY7XG4gIH1cbiAgc2V0IEhpdHModmFsdWU6IG51bWJlcil7XG4gICAgdGhpcy5fcGYgPSB2YWx1ZTtcbiAgfVxuICBpc0RlYWQoKTogYm9vbGVhbntcbiAgICByZXR1cm4gdGhpcy5fcGYgPiAwID8gZmFsc2UgOiB0cnVlO1xuICB9XG4gIHNldEJ1ZmYoYnVmZjpCdWZmKXtcbiAgICB0aGlzLl9idWZmcy5wdXNoKGJ1ZmYpO1xuICB9XG4gIGdldEJ1ZmYoKXtcbiAgICByZXR1cm4gdGhpcy5fYnVmZnM7XG4gIH1cbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFuaW1hdG8gZXh0ZW5kcyBUYXJnZXR0YWJsZXtcbiAgcHJpdmF0ZSBfbGFzdEF0dGFjazogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaGl0czogbnVtYmVyKXtcbiAgICBzdXBlcihoaXRzKTtcbiAgfVxuXG4gIGF0dGFjayh0YXJnZXQ6IElUYXJnZXR0YWJsZSwgYXJtYTogQXJtYSB8IE1hZ2lhKTogbnVtYmVye1xuICAgIGlmKERhdGUubm93KCkgLSB0aGlzLl9sYXN0QXR0YWNrIDwgMTAwMCkge1xuXG4gICAgICBjb25zb2xlLmxvZygnbm4gcG9zc28gYXR0YWNjYXJlIGRpIG51b3ZvLi4uIG1pIHN0byByaXByZW5kZW5kbycpXG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgdGhpcy5fbGFzdEF0dGFjayA9IERhdGUubm93KClcbiAgICBsZXQgcHJvdGV6aW9uZTogbnVtYmVyID0gMDtcbiAgICBpZih0YXJnZXQgaW5zdGFuY2VvZiBUYXJnZXR0YWJsZSl7XG4gICAgICB0YXJnZXQuZ2V0QnVmZigpLmZpbHRlcihiID0+IGIuYnVmZi5lZmZldHRvID09IEVmZmV0dG8uUHJvdGV6aW9uZSlcbiAgICAgIC5tYXAoYiA9PiB7XG4gICAgICAgICAgaWYoYXJtYSBpbnN0YW5jZW9mIE1hZ2lhKXtcbiAgICAgICAgICAgICBpZihhcm1hLmVsZW1lbnRvID09PSBiLmJ1ZmYuY2F1c2EudGlwb2xvZ2lhKXtcbiAgICAgICAgICAgICAgIGlmKGIuaXNWYWxpZCgpKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaG8gcHJvdGV6aW9uZS4uLmdpdXN0YScsIGIuYnVmZi5jYXVzYS52YWxvcmUpO1xuICAgICAgICAgICAgICAgIHByb3RlemlvbmUgPSBiLmJ1ZmYuY2F1c2EudmFsb3JlO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIHRhcmdldC5IaXRzIC09IGFybWEuZGFubmk+PXByb3RlemlvbmU/IGFybWEuZGFubmkgLSBwcm90ZXppb25lIDogMDtcbiAgICB9XG4gICAgcmV0dXJuIGFybWEuZGFubmkgLSBwcm90ZXppb25lO1xuICB9XG4gIGFic3RyYWN0IHRvU3RyaW5nKCk6IHN0cmluZztcblxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93b3JsZC90YXJnZXR0YWJsZS90YXJnZXR0YWJsZS50cyIsImltcG9ydCB7UmF6emF9IGZyb20gJy4uLy4uL2VudW1lcmF6aW9uaSc7XG5pbXBvcnQge0lUYXJnZXR0YWJsZSwgQW5pbWF0bywgU3RhdHN9IGZyb20gJy4uL3RhcmdldHRhYmxlJztcblxuZXhwb3J0IGludGVyZmFjZSBJUGVyc29uYWdnaW97XG4gIG5vbWU6IHN0cmluZyxcbiAgcmF6emE6IFJhenphLFxuICBzdGF0czogU3RhdHNcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBlcnNvbmFnZ2lvIGV4dGVuZHMgQW5pbWF0byBpbXBsZW1lbnRzIElQZXJzb25hZ2dpb3tcbiAgY29uc3RydWN0b3IocHVibGljIG5vbWU6IHN0cmluZywgcHVibGljIHJhenphOiBSYXp6YSxcbiAgICBwdWJsaWMgc3RhdHM6IFN0YXRzLCBwdWJsaWMgaGl0czogbnVtYmVyKXtcbiAgICAgIHN1cGVyKGhpdHMpO1xuICAgIH1cbn1cblxuXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd29ybGQvdGFyZ2V0dGFibGUvcGxheWFibGUvcGVyc29uYWdnaW8udHMiLCJpbXBvcnQge0VsZW1lbnRvfSBmcm9tICcuLi9lbnVtZXJhemlvbmknO1xuXG5leHBvcnQgY2xhc3MgTWFnaWEge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbm9tZTogc3RyaW5nLCBwdWJsaWMgZGFubmk6IG51bWJlcixcbiAgICBwdWJsaWMgZWxlbWVudG86IEVsZW1lbnRvKXt9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd29ybGQvbWFnaWEvbWFnaWEudHMiLCJleHBvcnQgZW51bSBSYXp6YSB7XG4gIFVtYW5vaWRlLFxuICBEcmFjb25pYW5vLFxuICBMdWNlcnRvbG9pZGVcbn1cblxuZXhwb3J0IGVudW0gRWxlbWVudG97XG4gIGFjcXVhID0gMSxcbiAgYXJpYSxcbiAgZnVvY28sXG4gIHRlcnJhXG59XG5cbmV4cG9ydCBlbnVtIE1hdGVyaWFsZSB7XG4gIE9zc2lkaWFuYSA9IDEsXG4gIEZlcnJpdGUsXG4gIERpYW1hbnRpdGUsXG4gIEJyb256byxcbiAgU21lcmFsZG8sXG4gIFJ1Ymlub1xufVxuXG5leHBvcnQgZW51bSBFZmZldHRvIHtcbiAgQ3VyYSA9IDEsXG4gIFByb3RlemlvbmUsXG4gIE1pZ2xpb3JhbWVudG9cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd29ybGQvZW51bWVyYXppb25pLnRzIiwiZXhwb3J0IHtDaGllcmljb30gZnJvbSAnLi9jaGllcmljbyc7XG5leHBvcnQge0d1ZXJyaWVyb30gZnJvbSAnLi9ndWVycmllcm8nO1xuZXhwb3J0IHtNYWdvfSBmcm9tICcuL21hZ28nO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93b3JsZC90YXJnZXR0YWJsZS9wbGF5YWJsZS9pbmRleC50cyIsImltcG9ydCB7RG9vcn0gZnJvbSAnLi93b3JsZC90YXJnZXR0YWJsZS9pbmRleCc7XG5pbXBvcnQge0NoaWVyaWNvLCBHdWVycmllcm8sIE1hZ299IGZyb20gJy4vd29ybGQvdGFyZ2V0dGFibGUvcGxheWFibGUvaW5kZXgnO1xuaW1wb3J0ICogYXMgVGlwb2xvZ2llIGZyb20gJy4vd29ybGQvZW51bWVyYXppb25pJztcbmltcG9ydCB7QnVmZn0gZnJvbSAnLi93b3JsZC9lZmZldHRpL2J1ZmYnO1xuaW1wb3J0IHtBcm1hfSBmcm9tICcuL3dvcmxkL2FybWkvYXJtYSc7XG5pbXBvcnQge01hZ2lhfSBmcm9tICcuL3dvcmxkL21hZ2lhL21hZ2lhJztcblxubGV0IGQgPSBuZXcgRG9vcigxMDApO1xubGV0IG0gPSBuZXcgTWFnbygnTWVybGlubycsIFRpcG9sb2dpZS5SYXp6YS5VbWFub2lkZSwge1xuICBzdHI6IDEwLFxuICBkZXg6IDIwLFxuICBpbnQ6IDUwXG59LCAxMik7XG5sZXQgZyA9IG5ldyBHdWVycmllcm8oJ0NvbmFuJywgVGlwb2xvZ2llLlJhenphLkRyYWNvbmlhbm8sIHtcbiAgc3RyOjQwLFxuICBkZXg6MTIsXG4gIGludDogMlxufSwgMjApO1xubGV0IGMgPSBuZXcgQ2hpZXJpY28oJ0NsZXJpYycsIFRpcG9sb2dpZS5SYXp6YS5VbWFub2lkZSwge1xuICBzdHI6IDIwLFxuICBkZXg6IDE1LFxuICBpbnQ6IDhcbn0sIDE4KTtcblxubGV0IHAgPSBuZXcgQnVmZih7XG4gIGVmZmV0dG86IFRpcG9sb2dpZS5FZmZldHRvLlByb3RlemlvbmUsXG4gIGNhdXNhOiB7XG4gICAgdGlwb2xvZ2lhOiBUaXBvbG9naWUuRWxlbWVudG8uYWNxdWEsXG4gICAgdmFsb3JlOiAzXG4gIH1cbn0sIDE4MDApO1xuYy5zZXRCdWZmKHApO1xuXG5sZXQgc3BhZGEgPSBuZXcgQXJtYSgnU3BhZG9uZSBhIDIgTWFuaScsIDMsIFRpcG9sb2dpZS5NYXRlcmlhbGUuRmVycml0ZSk7XG5sZXQgZmlyZWJhbGwgPSBuZXcgTWFnaWEoJ0ZpcmViYWxsJywgMTAsIFRpcG9sb2dpZS5FbGVtZW50by5mdW9jbyk7XG5cbnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgbS5hdHRhY2soYywgZmlyZWJhbGwpO1xufSwxMDAwKTtcbnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgbS5hdHRhY2soYywgZmlyZWJhbGwpO1xufSwyMDApO1xuXG5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gIG0uYXR0YWNrKGMsIGZpcmViYWxsKTtcbn0sMjAwMCk7XG5cbmxldCBwYXJhZ3JhZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdwJyk7XG5wYXJhZ3JhZm8uaW5uZXJcblxuXG5cbmNvbnN0IGdldEpTT04gPSA8VD4oY29uZmlnOiB7IHVybDogc3RyaW5nIH0pOiBQcm9taXNlPFQ+ID0+IHtcbiAgY29uc3QgZmV0Y2hDb25maWcgPSAoeyBtZXRob2Q6ICdHRVQnIH0pO1xuICByZXR1cm4gZmV0Y2goY29uZmlnLnVybCwgZmV0Y2hDb25maWcpXG4gICAgLnRoZW48VD4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKTtcbn1cblxudHlwZSBMb2FkVXNlcnNSZXNwb25zZSA9IHtcbnVzZXJzOiB1c2VyXG5ba2V5OiBudW1iZXJdIDogdXNlclxufVxuXG50eXBlIHVzZXIgPSB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbn07XG5cbmZ1bmN0aW9uIGxvYWRVc2VycygpIHtcbnJldHVybiBnZXRKU09OPExvYWRVc2Vyc1Jlc3BvbnNlPih7IHVybDogJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2VycycgfSk7XG59XG5cbmNvbnN0IHVybCA9ICdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMnO1xuZ2V0SlNPTjxMb2FkVXNlcnNSZXNwb25zZT4oeyB1cmwgfSlcbi50aGVuKChyZXM6IExvYWRVc2Vyc1Jlc3BvbnNlKSA9PiB7XG4gIGNvbnNvbGUubG9nKHJlc1swXS5uYW1lKSAvLyA8PT0gbm8gZXJyb3IgPz8/XG59KVxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbWFpbi50cyIsImV4cG9ydCAqIGZyb20gJy4vaXRlbXMvaW5kZXgnO1xuZXhwb3J0ICogZnJvbSAnLi9wbGF5YWJsZS9pbmRleCc7XG5leHBvcnQgKiBmcm9tICcuL21vYi9pbmRleCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dvcmxkL3RhcmdldHRhYmxlL2luZGV4LnRzIiwiZXhwb3J0IHtEb29yfSBmcm9tICcuL2Rvb3InO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93b3JsZC90YXJnZXR0YWJsZS9pdGVtcy9pbmRleC50cyIsImltcG9ydCB7VGFyZ2V0dGFibGV9IGZyb20gJy4uL3RhcmdldHRhYmxlJztcblxuZXhwb3J0IGNsYXNzIERvb3IgZXh0ZW5kcyBUYXJnZXR0YWJsZSB7XG4gIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuICdEb29yJztcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93b3JsZC90YXJnZXR0YWJsZS9pdGVtcy9kb29yLnRzIiwiaW1wb3J0IHtNYWdpYX0gZnJvbSAnLi4vLi4vbWFnaWEvbWFnaWEnO1xuaW1wb3J0IHtBcm1hfSBmcm9tICcuLi8uLi9hcm1pL2FybWEnO1xuXG5pbXBvcnQge1JhenphfSBmcm9tICcuLi8uLi9lbnVtZXJhemlvbmknO1xuaW1wb3J0IHtQZXJzb25hZ2dpb30gZnJvbSAnLi9wZXJzb25hZ2dpbyc7XG5pbXBvcnQge1N0YXRzLCBJVGFyZ2V0dGFibGV9IGZyb20gJy4uL3RhcmdldHRhYmxlJztcblxuZXhwb3J0IGNsYXNzIENoaWVyaWNvIGV4dGVuZHMgUGVyc29uYWdnaW8ge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbm9tZTogc3RyaW5nLCBwdWJsaWMgcmF6emE6IFJhenphLFxuICAgIHB1YmxpYyBzdGF0czogU3RhdHMsIHJlYWRvbmx5IGhpdHM6IG51bWJlcil7XG4gICAgc3VwZXIobm9tZSwgcmF6emEsIHN0YXRzLCBoaXRzKTtcbiAgfVxuICB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLm5vbWU7XG4gIH1cbiAgYXR0YWNrKHRhcmdldDogSVRhcmdldHRhYmxlLCBhcm1hOiBBcm1hIHwgTWFnaWEpOiBudW1iZXJ7XG4gICAgcmV0dXJuIHN1cGVyLmF0dGFjayh0YXJnZXQsIGFybWEpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dvcmxkL3RhcmdldHRhYmxlL3BsYXlhYmxlL2NoaWVyaWNvLnRzIiwiaW1wb3J0IHtBcm1hfSBmcm9tICcuLi8uLi9hcm1pL2FybWEnO1xuaW1wb3J0IHtSYXp6YX0gZnJvbSAnLi4vLi4vZW51bWVyYXppb25pJztcbmltcG9ydCB7UGVyc29uYWdnaW99IGZyb20gJy4vcGVyc29uYWdnaW8nO1xuaW1wb3J0IHtTdGF0cywgSVRhcmdldHRhYmxlfSBmcm9tICcuLi90YXJnZXR0YWJsZSc7XG5cbmV4cG9ydCBjbGFzcyBHdWVycmllcm8gZXh0ZW5kcyBQZXJzb25hZ2dpbyB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBub21lOiBzdHJpbmcsIHB1YmxpYyByYXp6YTogUmF6emEsXG4gICAgcHVibGljIHN0YXRzOiBTdGF0cywgcmVhZG9ubHkgaGl0czogbnVtYmVyKXtcbiAgICBzdXBlcihub21lLCByYXp6YSwgc3RhdHMsIGhpdHMpO1xuICB9XG4gIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMubm9tZTtcbiAgfVxuICBhdHRhY2sodGFyZ2V0OiBJVGFyZ2V0dGFibGUsIGFybWE6IEFybWEpOiBudW1iZXJ7XG4gICAgcmV0dXJuIHN1cGVyLmF0dGFjayh0YXJnZXQsIGFybWEpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dvcmxkL3RhcmdldHRhYmxlL3BsYXlhYmxlL2d1ZXJyaWVyby50cyIsImltcG9ydCB7TWFnaWF9IGZyb20gJy4uLy4uL21hZ2lhL21hZ2lhJztcbmltcG9ydCB7UmF6emF9IGZyb20gJy4uLy4uL2VudW1lcmF6aW9uaSc7XG5pbXBvcnQge1BlcnNvbmFnZ2lvfSBmcm9tICcuL3BlcnNvbmFnZ2lvJztcbmltcG9ydCB7U3RhdHMsIElUYXJnZXR0YWJsZX0gZnJvbSAnLi4vdGFyZ2V0dGFibGUnO1xuXG5leHBvcnQgY2xhc3MgTWFnbyBleHRlbmRzIFBlcnNvbmFnZ2lvIHtcbiAgY29uc3RydWN0b3IocHVibGljIG5vbWU6IHN0cmluZywgcHVibGljIHJhenphOiBSYXp6YSxcbiAgICBwdWJsaWMgc3RhdHM6IFN0YXRzLCByZWFkb25seSBoaXRzOiBudW1iZXIpe1xuICAgIHN1cGVyKG5vbWUsIHJhenphLCBzdGF0cywgaGl0cyk7XG4gIH1cbiAgdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5ub21lO1xuICB9XG4gIGF0dGFjayh0YXJnZXQ6IElUYXJnZXR0YWJsZSwgYXJtYTogTWFnaWEpOiBudW1iZXJ7XG4gICAgcmV0dXJuIHN1cGVyLmF0dGFjayh0YXJnZXQsIGFybWEpO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dvcmxkL3RhcmdldHRhYmxlL3BsYXlhYmxlL21hZ28udHMiLCJleHBvcnQge0RyYWdvfSBmcm9tICcuL0RyYWdvJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93b3JsZC90YXJnZXR0YWJsZS9tb2IvaW5kZXgudHMiLCJpbXBvcnQge01hZ2lhfSBmcm9tICcuLi8uLi9tYWdpYS9tYWdpYSc7XG5pbXBvcnQge0lUYXJnZXR0YWJsZSwgQW5pbWF0b30gZnJvbSAnLi4vdGFyZ2V0dGFibGUnO1xuXG5leHBvcnQgY2xhc3MgRHJhZ28gZXh0ZW5kcyBBbmltYXRvIHtcbiAgdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gJ0RyYWdvJztcbiAgfVxuICBhdHRhY2sodGFyZ2V0OiBJVGFyZ2V0dGFibGUsIGFybWE6IE1hZ2lhKTogbnVtYmVye1xuICAgIHJldHVybiBzdXBlci5hdHRhY2sodGFyZ2V0LCBhcm1hKTtcbiAgfVxuXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dvcmxkL3RhcmdldHRhYmxlL21vYi9EcmFnby50cyIsImltcG9ydCB7SUVmZmV0dG99IGZyb20gJy4vZWZmZXR0aSc7XG5cbmV4cG9ydCBjbGFzcyBCdWZmIHtcbiAgcHJpdmF0ZSBfcHVsc2U6IG51bWJlcjtcbiAgY29uc3RydWN0b3IocHVibGljIGJ1ZmY6IElFZmZldHRvLCBkdXJhdGE6IG51bWJlcil7XG4gICAgdGhpcy5fcHVsc2UgPSBEYXRlLm5vdygpICsgZHVyYXRhO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIGNvbnNvbGUubG9nKCdidWZmIGZpbml0byEhIScpO1xuICAgIH0sIGR1cmF0YSk7XG4gIH1cbiAgaXNWYWxpZCgpOmJvb2xlYW57XG4gICAgaWYodGhpcy5fcHVsc2UgPj0gRGF0ZS5ub3coKSkgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dvcmxkL2VmZmV0dGkvYnVmZi50cyIsImltcG9ydCB7TWF0ZXJpYWxlfSBmcm9tICcuLi9lbnVtZXJhemlvbmknO1xuXG5leHBvcnQgY2xhc3MgQXJtYSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBub21lOiBzdHJpbmcsIHB1YmxpYyBkYW5uaTogbnVtYmVyLFxuICBtYXRlcmlhbGU6IE1hdGVyaWFsZSl7fVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93b3JsZC9hcm1pL2FybWEudHMiXSwic291cmNlUm9vdCI6IiJ9