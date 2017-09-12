function foo() {
    var fn = [];
    for (var i = 0; i < 10; i++) {
        fn[i] = function() {
            // arguments[] = 20;
            console.log(arguments);
        };
    }
    return fn;
}


var fns = foo(1, 2, 3);
for (var j = 0; j < fns.length; j++) {
    fns[j](j);
}