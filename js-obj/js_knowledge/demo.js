// for (var i = 0; i < 5; i++) {
//     //闭包传参
//     //每次创建传当前数值进去
//     (function(n) {
//         setTimeout(function() {
//             console.log(n);
//         }, 0)
//     })(i);
// }


function fun(n, o) {
    console.log(o);
    return {
        method: function(m) {
            return fun(m, n);
        }
    }
}

var a = fun(0);
a.method(1);
a.method(2);

fun(0).method(1).method(2).method(3);