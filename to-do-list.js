function addTask() {
    var inputText = document.getElementById("taskInput").value;

    var tRow = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = '<span onclick="this.innerHTML == &quot;&#9989;&quot; ? this.innerHTML = &quot;&#10060;&quot; : this.innerHTML = &quot;&#9989;&quot;">&#10060;</span>';
    td2.innerHTML = inputText;
    td3.innerHTML = '<button onclick="this.parentElement.parentElement.innerText = &quot;&quot;">Remove</button>';
    
    tRow.appendChild(td1);
    tRow.appendChild(td2);
    tRow.appendChild(td3);

    document.getElementById("taskList").appendChild(tRow);

    document.getElementById("taskInput").value = '';
}