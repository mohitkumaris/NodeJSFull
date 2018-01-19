
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


function Node(data) {
    this.data = data;
    this.next = null;
}

function SinglyList() {
    this._length = 0;
    this.head = null;
}

SinglyList.prototype.add=function (value) {



    var node= new Node(value),
        currentNode=this.head;
// 1st use-case: an empty list
    if(!currentNode){
        this.head=node;
        this._length++;
        return node;

    }
// 2nd use-case: a non-empty list
    while(currentNode.next){
        currentNode=currentNode.next;
    }

    currentNode.next=node;
    this.length++;
    return node;

};

var linkedlist = new SinglyList();
console.log(linkedlist.add(5));

