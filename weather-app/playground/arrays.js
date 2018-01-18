
Reverse = function(number) {
    var reversed = 0;

    while (number != 0) {
        reversed *= 10;
        reversed += number % 10;
        number -= number % 10;
        number /= 10;
    }

    return reversed;
}
console.log(Reverse(1234));


function Node(data){
    this.data=data;
    this.next=null;
}


var singleNode=new Node(3);
var lastNode= new Node(4);
while(singleNode.next != null){

    singleNode=singleNode.next;

}
singleNode.next=lastNode.data;
lastNode.next=null;
console.log(singleNode);
