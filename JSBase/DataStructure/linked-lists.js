function Node(element) {
  this.element = element
  this.next = null
}

function LList() {
  this.head = new Node('head')
  this.find = find
  this.findPrevious = findPrevious
  this.insert = insert
  // this.remove = remove
  this.display = display
}

function find(item) {
  let currentNode = this.head
  while (currentNode.element !== item) {
    currentNode = currentNode.next
  }
  return currentNode
}

function findPrevious(item) {
  let currentNode = this.head
  while (currentNode.element !== null && currentNode.next.element !== item) {
    currentNode = currentNode.next
  }
  return currentNode
}

function insert(newElement, item) {
  let newNode = new Node(newElement)
  let current = this.find(item)
  newNode.next = current.next
  current.next = newNode
}

function display() {
  let currentNode = this.head
  while (!(currentNode.next === null)) {
    console.log(currentNode.next.element)
    currentNode = currentNode.next
  }
}

const cities = new LList()
cities.insert('Beijing', 'head')
cities.insert('Shanghai', 'head')
// console.log(cities)
cities.display()