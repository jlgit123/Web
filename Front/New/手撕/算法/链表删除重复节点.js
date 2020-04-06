function ListNode(val){
    this.val = val;
    this.next = null;
}
let m = new ListNode(2);
let n = new ListNode(3);
let s = new ListNode(3);
let q = new ListNode(5);
m.next = n;
n.next = s;
s.next = q;

console.log(list(deleteDuplication(m)))
function deleteDuplication(pHead){
    let newHead = new ListNode('head');
    newHead.next = pHead;
    var pHead = newHead;
    var qHead = pHead.next;
    while(qHead){
        while(qHead.next!=null &&qHead.val == qHead.next.val){
            qHead = qHead.next;
        }
        if (pHead.next == qHead){
            pHead = qHead;
            qHead = qHead.next;
        } else {
            // qHead = qHead.next;
            pHead.next = qHead; 
        }
    }
    return newHead.next;
}

function list(node){
    let ary = [];
    while(node){
        ary.push(node);
        node = node.next;
    }
    return ary;
}