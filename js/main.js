function clientManager() {
  this.mesAffichages = function(){
    $("#list1").empty();
    for (var x in Client.clientsList) {
      $("#list1").append("<tr><td>" + Client.clientsList[x].id
      + "</td>" + "<td>" + Client.clientsList[x].nom
      + "</td>" + "<td>" + Client.clientsList[x].age
      + "</td>" + "<td>" + Client.clientsList[x].city
      + "</td></tr>" );
      }
    }

    this.trieList = function(tab,key){

    tab.sort(function(a, b) {
       var keyA = a[key];
       var keyB = b[key];
       if (keyA < keyB) return -1;
       if (keyA > keyB) return 1;
       return 0;

     });
     this.mesAffichages();
    }
}





var objetClientManager = new clientManager()

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    Client = JSON.parse(this.responseText);
    objetClientManager.mesAffichages();
    $("#myList").change(function(){
      objetClientManager.trieList(Client.clientsList,$("#myList").val());
    })

  };
};
xhttp.open("GET", "list.json", true);
xhttp.send();
