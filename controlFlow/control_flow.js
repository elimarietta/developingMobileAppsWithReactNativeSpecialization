let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

let personType = "Employee";

switch (personType) {
    case "Employee":
        accessCategory = "Full access to dietary services";
        break;
    case "Enrolled Member":
        accessCategory = "Full access to dietary services + 1:1 with dietician";
        break;
    case "Employee":
        accessCategory = "Partial access to dietary services";
        break;
    case "Non-Subscriber":
        accessCategory = "No acces; please enroll or subscribe to obtain access";
        break;
    default:
        accessCategory = "Unknown";
}

console.log("Access status:", accessCategory);