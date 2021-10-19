// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){

        let pushNode = new Node(val);

        if(!this.head){
            this.head = pushNode;
            this.tail = this.head;
        } else {
            this.tail.next = pushNode;
            this.tail = pushNode;
        }
        this.length++;
        return this;
        
    }
    pop(){
        if(this.length === 0){
            return undefined;
        }
        let current = this.head;
        let prev;
        while(current.next !== null){
            prev = current;
            current = current.next;
        }
        prev.next = null;
        this.tail = prev;
        this.length--;
        
        return current;
    }
    traverse(){
        if(this.length === 0){
            return undefined;
        }
        let current = this.head;
        while(current){
            console.log(current.val);
            current = current.next;
        }
    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push('HELLO AGAIN')
list.traverse();
list.pop();
list.traverse();

