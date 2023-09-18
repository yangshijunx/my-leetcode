// 实现一个链表
// 链表可以分为单向链表和双向链表以及循环链表
class myNode {
  value: any
  next: any
  constructor(value, next){
    this.value = value
    this.next = next
  }
}
interface LinkListNode {
  value: any,
  next: any
}
class myLinkList{
  dummyHead: any
  size: number
  constructor() {
    this.dummyHead = new myNode(null, null)
    this.size = 0
  }
  // 在指定索引位置插入一个node类型的节点
  add(index: number,newNode: LinkListNode){
    if(index > this.size || index < 0){
      throw new Error('新增索引非法')
    }
    let pre = this.dummyHead
    for(let i = 0; i<index; i++){
      pre = pre.next
    }
    newNode.next = pre.next
    pre.next = newNode
    this.size++
  }
  // 在链表表头新增节点
  addFirst(node:LinkListNode){
    this.add(0,node)
  }
  addLast(node:LinkListNode){
    let index = this.size
    this.add(index, node)
  }
  // 删除指定索引的节点
  remove(index){
    if(index > this.size || index < 0){
      throw new Error('待删除索引非法')
    }
    let pre = this.dummyHead
    for(let i =0; i<index; i++){
      pre = pre.next;
    }
    let delNode = pre.next
    pre.next = delNode.next
    delNode.next = null
    this.size--
  }
  // 删除第一个节点
  removeFirst(){
    this.remove(0)
  }
  // 删除最后一个节点
  removeLast(){
    this.remove(this.size-1)
  }
  // 获取节点长度
  getSize(){
    return this.size
  }
  // 获取结构
  toString(){
    let cur = this.dummyHead.next
    let str = ''
    while(cur !== null){
      str+=cur.value+'->'
      cur = cur.next
    }
    return str += null;
  }
}

let list1 = new myNode(1,null)
let list2 = new myNode(2,null)
let link1 = new myLinkList()
link1.add(0, list1)
link1.add(1, list2)
console.log("第一个节点", list1)
console.log("第一个链表", link1.size)
console.log("toString", link1.toString())