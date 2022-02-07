// http://latentflip.com/loupe/?code=ZnVuY3Rpb24gY29tcGxldGVUYXNrKHRhc2ssIG1pbGxpc2Vjb25kcykgewogIHNldFRpbWVvdXQoZnVuY3Rpb24gbG9nVGFzaygpIHsKICAgIGNvbnNvbGUubG9nKAogICAgICAiTXkgdGFzayAiICsgdGFzayArICIgaGFzIGJlZW4gY29tcGxldGVkIGFmdGVyICR7bWlsbGlzZWNvbmRzfSBtaWxsaXNlY29uZHMuIgogICAgKTsKICB9LCBtaWxsaXNlY29uZHMpOwp9Cgpjb25zb2xlLmxvZygiKioqKioqIFN0YXJ0IG15IHRhc2tzICoqKioqKioiKTsKY29tcGxldGVUYXNrKCJDYWxsIG11bSIsIDgpOwpjb21wbGV0ZVRhc2soIiMxMDBkYXlzb2Zjb2RlIiwgMTIwKTsKY29tcGxldGVUYXNrKCJXYXRjaCBOZXRmbGl4IiwgNTApOwpjb21wbGV0ZVRhc2soIkNsZWFuIHJvb20iLCAzMCk7CmNvbnNvbGUubG9nKCItLS0tLS0gRW5kIG15IHRhc2tzIC0tLS0tLSIpOwo%3D!!!

function completeTask(task, milliseconds) {
  setTimeout(function () {
    console.log(
      `My task "${task}" has been completed after ${milliseconds} milliseconds.`
    );
  }, milliseconds);
}

console.log("****** Start my tasks *******");
completeTask("Call mum", 8);
completeTask("#100daysofcode", 120);
completeTask("Watch Netflix", 50);
completeTask("Clean room", 30);
console.log("------ End my tasks ------");
