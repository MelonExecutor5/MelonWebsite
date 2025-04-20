document.getElementById("run-btn").addEventListener("click", () => {
    const input = document.getElementById("script-input").value;
    const output = document.getElementById("console-output");
  
    if (!input.trim()) {
      output.innerHTML = "⚠️ Please enter a script.";
      return;
    }
  
    // Simulate execution
    output.innerHTML = `✅ Running script...\n\n${input}`;
  });
  
  document.getElementById("clear-btn").addEventListener("click", () => {
    document.getElementById("script-input").value = "";
    document.getElementById("console-output").innerHTML = "<em>Output will appear here...</em>";
  });
  