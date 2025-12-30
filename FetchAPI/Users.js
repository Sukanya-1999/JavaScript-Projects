async function fnGetUsersData() {
  var tbody = document.querySelector("tbody");
  try {
    const data = await fetch("https://randomuser.me/api/?results=50");
    const finalData = await data.json();
    console.log(finalData.results);
    finalData.results.forEach(function (user) {
      // var li = document.createElement("li");
      // li.textContent = user.name.first;
      // ol.appendChild(li);

      var tr = document.createElement("tr");
      var td1 = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      var td4 = document.createElement("td");
      var img = document.createElement("img");
      img.style.width = "50px";
      img.style.height = "50px";
      img.src = user.picture.medium;

      td1.appendChild(img);
      td2.textContent = user.name.first;
      td3.textContent = user.gender;
      td4.textContent = user.email;

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);

      tbody.appendChild(tr);
    });
  } catch (error) {
    console.log(error);
    alert("something went wrong");
  }
}
