function addTask() {
    var inputText = document.getElementById("taskInput").value;

    var tRow = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = '<span onclick="toggleStatus(this, this.parentElement.parentElement)">&#10060;</span>';
    td2.innerHTML = inputText;
    td3.innerHTML = '<button onclick="this.parentElement.parentElement.innerText = &quot;&quot;">Remove</button>';
    
    tRow.appendChild(td1);
    tRow.appendChild(td2);
    tRow.appendChild(td3);
    tRow.className = "statusPending";

    document.getElementById("taskList").appendChild(tRow);

    document.getElementById("taskInput").value = '';
}

function toggleStatus(el, parentEl){
    if (parentEl.className == 'statusComplete') {
        el.innerHTML = "&#10060;";
        parentEl.className = ('statusPending');
    } else {
        el.innerHTML = "&#9989;";
        parentEl.className = ('statusComplete');
    }
}