function cycle(obj, parent) {
    //表示调用的父级数组
    var parentArr = parent || [obj];
    for (var i in obj) {
        if (typeof obj[i] === "object") {
            //判断是否有循环引用
            parentArr.forEach((pObj) => {
                if (pObj === obj[i]) {
                    obj[i] = "[cycle]"
                }
            });
            cycle(obj[i], [...parentArr, obj[i]])
        }
    }
    return obj;
}

var a = {
    b:{
        c:{}
    }
};

a.b.c.d = a;

console.log(cycle(a));