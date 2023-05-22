  
    let data = ["syllabus.html", "p1.html", "p2.html", "style.html", "email.html", "system.html", "process.html"];

    function displayTable() {
      var startRange = document.getElementById("startRange").value;
      var endRange = parseInt(document.getElementById("endRange").value);

      if (isNaN(startRange) || isNaN(endRange) || startRange > endRange || startRange < 1 || endRange > data.length) {
        var validRange = "Valid Range: 1-" + data.length;
        alert("Invalid range, " + validRange);
        return;
      }

      var table = "<table><tr><th>Links</th></tr>";

      for (var i = startRange - 1; i <= endRange - 1; i++) {
        table += "<tr><td><a href='" + data[i] + "'>" + data[i] + "</a></td></tr>";
      }

      table += "</table>";

      document.getElementById("tableContainer").innerHTML = table;
    }

    function displayValidRangeMessage() {
      var validRangeMessage = "Valid Range: 1-" + data.length;
      document.getElementById("validRange").textContent = validRangeMessage;
    }
