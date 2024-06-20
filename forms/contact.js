document.getElementById('contactForm').addEventListener('submit', async function(event) {
  event.preventDefault();
  document.getElementById('result').textContent = "Sending....";
  const formData = new FormData(event.target);

  formData.append("access_key", "b671215e-0867-4f4a-bba9-97e57764867e");

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  const data = await response.json();

  if (data.success) {
    document.getElementById('result').textContent = "Form Submitted Successfully";
    event.target.reset();
  } else {
    console.log("Error", data);
    document.getElementById('result').textContent = data.message;
  }
});
