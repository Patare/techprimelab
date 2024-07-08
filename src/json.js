const obj={ 
    "stuff": {
        "onetype": [
            {"id":1,"name":"John Doe"},
            {"id":2,"name":"Don Joeh"}
        ],
        "othertype": {"id":2,"company":{
            "onetype": [
                {"id":1,"name":{
                    "onetype": [
                        {"id":1,"name":{
                            "onetype": [
                                {"id":1,"name":"John Doe"},
                                {"id":2,"name":"Kalyan"}
                            ],
                            "othertype": {"id":2,"company":"ACME"}
                        }, },
                        {"id":2,"name":"Don Joeh"}
                    ],
                    "othertype": {"id":2,"company":"Nikhil"}
                },
            },
                {"id":2,"name":"Don Joeh"}
            ],
            "othertype": {"id":2,"company":"ACME"}
        }, }
    }, 
    
    "otherstuff": {
        "thing": [[1,42],[2,2]]
    }
};
var a = [1,2,3,4,6];
var b = [1,1,1,1];
var c = [];
function sumArray(a, b) {
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
      c.push((a[i] || 0) + (b[i] || 0));
    }
    return c;
}
sumArray(a,b);
console.log(c);

// console.log(obj);
console.log(obj.stuff.othertype.id);

console.log(obj.stuff.othertype.company.onetype[0].name.onetype[0].name.onetype[1].name);
console.log(obj.stuff.othertype.company.onetype[0].name.othertype.company);