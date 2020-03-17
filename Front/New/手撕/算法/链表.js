//链表  12,99,36
class ListNode{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
let node1 = new ListNode(12);
let node2 = new ListNode(99);
let node3 = new ListNode(36);
node1.next = node2
node2.next = node3

let tmp = node1;
while (tmp!==null){
    console.log(tmp.val);
    tmp = tmp.next;
}


//链表遍历函数
function recursiveTraverse(head){
    if (head !== null){
        console.log(head.val)
        recursiveTraverse(head.next);
    }
}
recursiveTraverse(node1)

// 数组是连续存储空间，链表不需要存储空间
// 插入新元素 数组需要每个元素都移动，链表不需要


//☆链表反转~~
function reverseLinkedList(head){
    let dummy = head ;
    let tmp = head;
    while (head!=null && head.next!=null){
        dummy = head.next;
        head.next = dummy.next;
        dummy.next = tmp;
        tmp = dummy;
    }
    return dummy
}

let head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)

let reverse_head = reverseLinkedList(head)
let tmp1 = reverse_head;
while(tmp1 !== null){
    console.log(tmp1.val);
    tmp1 = tmp1.next;
}

    
let ary = [];
let tmp2 = reverse_head
while(tmp2!=null){
    ary.push(tmp2.val);
    tmp2 = tmp2.next;
}
console.log(ary)