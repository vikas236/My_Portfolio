const form = document.querySelector("form");
const input = form.childNodes;
const values = [];

const e = (() => {
  const submitMessage = () => {
    e.isValid();
    form.childNodes[4].addEventListener("click", () => {
      e.checkMessage();
      if (e.checkMessage() === true) {
        const data = `name: ${values[0]}
        email: ${values[1]}
        subject: ${values[2]}
        message: ${values[3]}`;
        e.sendMessage(data);
      } else {
        console.log("message not submitted");
        e.refillMessage();
      }
    });
  };

  const isValid = () => {
    for (let i = 0; i < 4; i += 1) {
      const box = input[i].childNodes[0];
      box.addEventListener("blur", () => {
        if (box.checkValidity() && box.value !== "") {
          input[i].classList.remove("invalid");
          box.style.border = "1px solid black";
        } else {
          input[i].classList.add("invalid");
          box.style.border = "1px solid red";
        }
      });
    }
  };

  // Check validity of message details
  const checkMessage = () => {
    let valid = true;
    for (let i = 0; i < 4; i += 1) {
      const box = input[i].childNodes[0];
      if (box.checkValidity() && box.value !== "") {
        input[i].classList.remove("invalid");
        values[i] = box.value;
      } else {
        input[i].classList.add("invalid");
        box.style.border = "1px solid red";
        valid = false;
      }
    }

    if (valid === false) {
      return false;
    }
    return true;
  };

  // Refill message details if invalid
  const refillMessage = () => {
    for (let i = 0; i < 4; i += 1) {
      const box = input[i].childNodes[0];
      if (values[i]) {
        box.value = values[i];
      }
    }
  };

  const sendMessage = (message) => {
    const botToken = "6609078554:AAGi_m3pc4C6TKfEUHyTQuGZ9_sShNL1ceY";
    const chatId = "-1001924061874";
    const parseMode = "Markdown";

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: parseMode,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          console.error("Failed to send message");
        }
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };
  return { submitMessage, checkMessage, isValid, refillMessage, sendMessage };
})();

export default e;
