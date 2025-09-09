
const monthYearSelect = document.getElementById("monthYear");
const today = new Date();
const currentYear = today.getFullYear();
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

for (let year = currentYear; year <= currentYear + 10; year++) {
  for (let month = 0; month < 12; month++) {
    const option = document.createElement("option");
    option.value = `${year}-${month + 1}`;
    option.text = `${months[month]} ${year}`;
    monthYearSelect.appendChild(option);
  }
}

// Form submission
document.getElementById("appointmentForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let service = document.getElementById("service").value;
  let monthYear = document.getElementById("monthYear").selectedOptions[0].text;
  let time = document.getElementById("time").value;

  document.getElementById("confirmation").innerText =
    `✅ Thank you, ${name}! Your appointment for "${service}" on ${monthYear} at ${time} has been booked.`;
  this.reset();
});
