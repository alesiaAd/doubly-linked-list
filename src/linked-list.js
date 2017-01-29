const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        return this;
    }

    append(data) {
        var newNode = new Node(data, null, null);
        if(this.length === 0) {
            this._head = newNode;
            this._tail = newNode;
        }
        else {
            this._tail.next = newNode;
            newNode.prev = this._tail;
            this._tail = newNode;
        }
        this.length ++;

        return this;
    }

    head() {
        if(this._head === null) {
            return null;
        }
        return this._head.data;
    }

    tail() {
        if(this._tail === null) {
            return null;
        }
        return this._tail.data;
    }

    at(index) {
        return this.nodeAt(index).data;
    }

    nodeAt(index) {
        var node = this._head;
        for(var i = 0; i < this.length; ++i) {
            if(i === index) {
                return node;
            }
            node = node.next;
        }
        return null;
    }

    insertAt(index, data) {
        var n47Node = this.nodeAt(index);
        if(n47Node) {
            var n32Node = n47Node.prev;
        }
        var newNode = new Node(data,n32Node,n47Node);
        if(n47Node) {
            n47Node.prev = newNode;
        }
        if(n32Node) {
            n32Node.next = newNode;
        }
        this.length ++;
        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._tail = null;
        this._head = null;
        this.length = 0;
        return this;
    }

    deleteAt(index) {
        var nodeToDelete = this.nodeAt(index);
        var nodePrev = nodeToDelete.prev;
        var nodeNext = nodeToDelete.next;
        if(nodePrev) {
            nodePrev.next = nodeNext;
        }
        if(nodeNext) {
            nodeNext.prev = nodePrev;
        }
        this.length --;
        return this;
    }

    reverse() {
        var node = this._head;
        var head = this._head;
        var tail = this._tail;
        for (var i = 0; i < this.length; ++i){
            var prev = node.prev;
            var next = node.next;
            node.prev = next;
            node.next = prev;
            node = next;
        }
        this._tail = head;
        this._head = tail;
        return this;
    }

    indexOf(data) {
        var node = this._head;
        for(var i = 0; i < this.length; ++i) {
            if(node.data === data) {
                return i;
            }
            node = node.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
