let userRole = "Subscriber";
let accessLevel;
if (userRole === "Employee"){
    accessLevel = "You are fully authorized to have access to dietary services";
} else if (userRole === "Enrolled Member"){
    accessLevel = "You are fully authorized to have access to Dietary Services and one-on-one interaction with a dietician.";
} else if(userRole === "Subscriber"){
    accessLevel = "You are partially authorized to have access to dietary services";
} else {
    accessLevel = "You have to enroll or least subscribe first to avail this facicility.";
}

console.log("Type of service availed to access dietary services...")
console.log("Access Level: ", accessLevel);