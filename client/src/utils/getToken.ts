export function getToken(): string | null {
    // Retrieve the user data from local storage
    const userData = localStorage.getItem("user");

    if (userData) {
      try {
        // Parse the user data string into a JavaScript object
        const user = JSON.parse(userData);

        // Extract the token from the user object
        const token: string = user.token;

        // Return the extracted token
        return token;
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    } else {
      console.log("User data not found in local storage.");
    }

    return null;
  }

  // Usage
//   const token: string | null = extractTokenFromLocalStorage();

//   if (token) {
//     console.log("Token:", token);
//   } else {
//     console.log("Token not found in local storage.");
//   }
