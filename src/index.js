// Import javascript
import description from "./javascript/description";
import introduction from "./javascript/introduction";
import message from "./javascript/sendMessage";
import contact from "./javascript/contact";

// Import css styling
import "./css/styles.css";
import "./css/tablets_mobiles.css";

introduction.animateText();
description.addSkills();
description.addProjects();
contact.addContainer();
message.submitMessage();
window.addEventListener("load", introduction.checkScreenSize);
window.addEventListener("resize", introduction.checkScreenSize);
