var arr = new Array(11);

for(let i = 1; i < arr.length; i++) {
    arr[i] = 0;
}

function toggleButton(idx) {
    for(let i = 0; i < arr.length; i++){
        if(i != idx && arr[i] == 1){
            return i;
        }
    }
    return 0;
}

function alertMessage(idx){
    if(idx == 1){
        alert("ArrayList tab is Open First Close it.");
    } else if(idx == 2){
        alert("LinkedList tab is Open First Close it.");
    } else if(idx == 3){
        alert("Doubly LinkedList tab is Open First Close it.");
    } else if(idx == 4) {
        alert("Stack tab is Open First Close it.");
    } else if(idx == 5) {
        alert("Queue tab is Open First Close it.");
    } else if(idx == 6){
        alert("Tree tab is Open First Close it.");
    } else if(idx == 7) {
        alert("AVL Tree tab is Open First Close it.");
    } else if(idx == 8) {
        alert("Graph tab is Open First Close it.");
    } else if(idx == 9) {
        alert("HashTable tab is Open First Close it.");
    }
}

const Arraylist = document.getElementById("ArrayList");
Arraylist.addEventListener('click' , () =>{
    const ArrayListContent = document.getElementsByClassName("ArrayListContent")[0];

    let toggle = toggleButton(1);
    if(toggle > 0){

        alertMessage(toggle);

    } else {
        
        if(ArrayListContent.style.display == "none"){
            ArrayListContent.style.display = "block";
            arr[1] = 1;
        } else {
            ArrayListContent.style.display = "none";
            arr[1] = 0;
        }
    }

})


const LinkedList = document.getElementById("LinkedList");
LinkedList.addEventListener('click' , () =>{
    const LinkedListContent = document.getElementsByClassName("LinkedListContent")[0];
   
    let toggle = toggleButton(2);

    if(toggle > 0){
        alertMessage(toggle);
    } else {
        if(LinkedListContent.style.display == "none"){
            LinkedListContent.style.display = "block";
            arr[2] = 1;
        } else {
            LinkedListContent.style.display = "none";
            arr[2] = 0;
        }
    }

})

const DoublyLinkedList = document.getElementById("DoublyLinkedList");
DoublyLinkedList.addEventListener('click' , () =>{
    const DoublyLinkedListContent = document.getElementsByClassName("DoublyLinkedListContent")[0];
   
    let toggle = toggleButton(3);

    if(toggle > 0){
        alertMessage(toggle);
    } else {
        if(DoublyLinkedListContent.style.display == "none"){
            DoublyLinkedListContent.style.display = "block";
            arr[3] = 1;
        } else {
            DoublyLinkedListContent.style.display = "none";
            arr[3] = 0;
        }
    }

})

const Stack = document.getElementById("Stack");
Stack.addEventListener('click' , () =>{
    const StackContent = document.getElementsByClassName("StackContent")[0];
   
    let toggle = toggleButton(4);

    if(toggle > 0){
        alertMessage(toggle);
    } else {
        if(StackContent.style.display == "none"){
            StackContent.style.display = "block";
            arr[4] = 1;
        } else {
            StackContent.style.display = "none";
            arr[4] = 0;
        }
    }

})

const Queue = document.getElementById("Queue");
Queue.addEventListener('click' , () =>{
    const QueueContent = document.getElementsByClassName("QueueContent")[0];
   let n = 5;
    let toggle = toggleButton(n);

    if(toggle > 0){
        alertMessage(toggle);
    } else {
        if(QueueContent.style.display == "none"){
            QueueContent.style.display = "block";
            arr[n] = 1;
        } else {
            QueueContent.style.display = "none";
            arr[n] = 0;
        }
    }

})

const Tree = document.getElementById("Tree");
Tree.addEventListener('click' , () =>{
    const TreeContent = document.getElementsByClassName("TreeContent")[0];
   let n = 6;
    let toggle = toggleButton(n);

    if(toggle > 0){
        alertMessage(toggle);
    } else {
        if(TreeContent.style.display == "none"){
            TreeContent.style.display = "block";
            arr[n] = 1;
        } else {
            TreeContent.style.display = "none";
            arr[n] = 0;
        }
    }

})

const AVLTree = document.getElementById("AVLTree");
AVLTree.addEventListener('click' , () =>{
    const AVLTreeContent = document.getElementsByClassName("AVLTreeContent")[0];
   let n = 7;
    let toggle = toggleButton(n);

    if(toggle > 0){
        alertMessage(toggle);
    } else {
        if(AVLTreeContent.style.display == "none"){
            AVLTreeContent.style.display = "block";
            arr[n] = 1;
        } else {
            AVLTreeContent.style.display = "none";
            arr[n] = 0;
        }
    }

})

const Graph = document.getElementById("Graph");
Graph.addEventListener('click' , () =>{
    const GraphContent = document.getElementsByClassName("GraphContent")[0];
   let n = 8;
    let toggle = toggleButton(n);

    if(toggle > 0){
        alertMessage(toggle);
    } else {
        if(GraphContent.style.display == "none"){
            GraphContent.style.display = "block";
            arr[n] = 1;
        } else {
            GraphContent.style.display = "none";
            arr[n] = 0;
        }
    }

})

const HashTable = document.getElementById("HashTable");
HashTable.addEventListener('click' , () =>{
    const HashTableContent = document.getElementsByClassName("HashTableContent")[0];
   let n = 9;
    let toggle = toggleButton(n);

    if(toggle > 0){
        alertMessage(toggle);
    } else {
        if(HashTableContent.style.display == "none"){
            HashTableContent.style.display = "block";
            arr[n] = 1;
        } else {
            HashTableContent.style.display = "none";
            arr[n] = 0;
        }
    }

})






