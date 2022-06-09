var arr = new Array(11);

for (let i = 1; i < arr.length; i++) {
  arr[i] = 0;
}

// return 0 if all tab is close other-wise return open tab number.
function toggleButton(idx) {
  for (let i = 0; i < arr.length; i++) {
    if (i != idx && arr[i] == 1) {
      return i;
    }
  }
  return 0;
}

function alertMessage(idx) {
  if (idx == 1) {
    alert(
      "ArrayList tab is Open First Close it. ( Single click on ArrayList Tab for Close )"
    );
  } else if (idx == 2) {
    alert(
      "LinkedList tab is Open First Close it.  ( Single click on LinkedList Tab for Close )"
    );
  } else if (idx == 3) {
    alert(
      "Doubly LinkedList tab is Open First Close it. ( Single click on DoublyLinkedList Tab for Close )"
    );
  } else if (idx == 4) {
    alert(
      "Stack tab is Open First Close it. ( Single click on Stack Tab for Close )"
    );
  } else if (idx == 5) {
    alert(
      "Queue tab is Open First Close it. ( Single click on Queue Tab for Close )"
    );
  } else if (idx == 6) {
    alert(
      "Tree tab is Open First Close it. ( Single click on Tree Tab for Close )"
    );
  } else if (idx == 7) {
    alert(
      "AVL Tree tab is Open First Close it. ( Single click on AVL Tree Tab for Close )"
    );
  } else if (idx == 8) {
    alert(
      "Graph tab is Open First Close it. ( Single click on Graph Tab for Close )"
    );
  } else if (idx == 9) {
    alert(
      "HashTable tab is Open First Close it. ( Single click on HashTable Tab for Close )"
    );
  }
}

const getActiveContent = (idx) => {
  switch (idx) {
    case 1:
      parent = document.getElementById("ArrayList");
      child = document.getElementsByClassName("ArrayListContent")[0];
      break;
    case 2:
      parent = document.getElementById("LinkedList");
      child = document.getElementsByClassName("LinkedListContent")[0];
      break;
    case 3:
      parent = document.getElementById("DoublyLinkedList");
      child = document.getElementsByClassName("DoublyLinkedListContent")[0];
      break;
    case 4:
      parent = document.getElementById("Stack");
      child = document.getElementsByClassName("StackContent")[0];
      break;
    case 5:
      parent = document.getElementById("Queue");
      child = document.getElementsByClassName("QueueContent")[0];
      break;
    case 6:
      parent = document.getElementById("Tree");
      child = document.getElementsByClassName("TreeContent")[0];
      break;
    case 7:
      parent = document.getElementById("AVLTree");
      child = document.getElementsByClassName("AVLTreeContent")[0];
      break;
    case 8:
      parent = document.getElementById("Graph");
      child = document.getElementsByClassName("GraphContent")[0];
      break;
    case 9:
      parent = document.getElementById("HashTable");
      child = document.getElementsByClassName("HashTableContent")[0];
      break;
  }

  return child;
};

// const onToggle = () => {}

const onToggle = (idx) => {
  let parent, child;

  const val = toggleButton(idx);
  if (val > 0) {
    const data = getActiveContent(val);
    arr[val] = 0;
    data.style.display = "none";
    console.log(data);
    // console.log("M");
  }

  arr[idx] = 1;
  const temp = getActiveContent(idx);
  temp.style.display = "block";

  console.log(temp);
};


