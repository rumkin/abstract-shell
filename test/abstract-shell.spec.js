'use strict';

const Shell = require('../');
const assert = require('assert');

describe('AbstractShell', function(){
    it('Should not initialize', function(){
        assert.throws(function(){
                new Shell();
            },
            /initialize/,
            'Initialization error'
        );
    });

    it('Should initialize when inherited', function(){
        var SomeShell = function(){
            Shell.call(this);
        };

        Object.setPrototypeOf(SomeShell.prototype, Shell.prototype);


        assert.doesNotThrow(function(){
                new SomeShell();
            },
            /initialize/,
            'Initialization error'
        );
    });
});
