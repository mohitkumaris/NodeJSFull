
var json={

    name:'mohit'
};

var jsonstring=JSON.stringify(json);
console.log(jsonstring);

var string='{"name":"mohit"}';
var jsonObject=JSON.parse(string);
console.log(typeof jsonObject);