function ListNode(val){
    this.val = val;
    this.next = null;
}

function List(){//链表
    this.head = new ListNode();
    this.size = 0;
}

List.prototype={
    //链表尾部插入节点
    add:function(val){
        var cur = this.head; //找到最后一个节点
        while(cur.next){
            cur = cur.next;
        }
        cur.next = new ListNode(val);
        this.size++
    },
    //遍历链表
    forEach: function(cb){
        for(var cur=this.head.next;cur!=null;cur=cur.next){
            cb(cur.val)
        }
    },
    //打印链表中所有元素
    print :function(){
        this.forEach(item=>{
            console.log(item)
        })
    },
    //查找链表中某个元素所在的索引
    indexOf: function(val){
        var pos = 0;
        var cur = this.head.next;
        while(cur){
            if(cur.val === val) break;
            cur = cur.next;
            pos++;
        }
        return pos;
    },
    //在某个位置pos插入节点
    insert: function(pos,val){
        if(pos<0||pos>this.size-1){
            return null;
        }
        //找到插入位置的上一个节点
        var last = this.head;
        for (var i=0;i<pos;i++){
            last = last.next;
        }
        //保存下个节点的引用
        var snext = last.next;
        last.next = new ListNode(val);
        last.next.next = snext;

        this.size++;
        return val
    },
    //删除指定位置的节点，成功删除返回删除值，否则返回null
    delete: function(pos){
        if(pos<0||pos>this.size-1){
            return null;
        }
        var cur = this.head.next;  //删除节点
        var last = this.head;  //删除节点前面的元素
        for(var i=0;i<pos;i++){
            last = cur;  
            cur = cur.next;
        }
        last.next=cur.next;
        this.size--;
        return cur.val
    },
    //删除指定值的节点
    remove:function(val){
        var cur = this.head.next;
        var last = this.head;
        while(cur){
            if(cur.val === val){
                last.next = cur.next;
                this.size--;
                break;
            }
            last = cur;
            cur = cur.next;
        }
    }
}

let m = new List();
m.add(1);
m.add(2);
m.add(3);
m.add(4);
m.print();//1,2,3,4
// console.log(m.indexOf(2));//1
m.insert(2,5)
m.print();//1,2,5,3,4
m.delete(1);
m.print();//1,5,3,4
m.remove(5);
m.print();//1,3,4

