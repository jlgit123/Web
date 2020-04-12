function ListNode(val){
    this.val = val;
    this.next = null;
}
var head1 = new ListNode(1);
head1.next = new ListNode(3);
head1.next.next = new ListNode(5);

var head2 = new ListNode(2);
head2.next = new ListNode(4);
head2.next.next = new ListNode(6);


function Merge(head1,head2){
    if(!head1) return head2;
    if(!head2) return head1;
    let nHead;

    if(head1.val<head2.val){
        nHead = head1;
        nHead.next = Merge(head1.next,head2)
    }else{
        nHead = head2;
        nHead.next = Merge(head1,head2.next)
    }
    return nHead
}

let n =Merge(head1,head2)
console.log(n)
var ary=[];
while(n){
    ary.push(n.val)
    n=n.next;
}
console.log(ary)  //[ 1, 2, 3, 4, 5, 6 ]