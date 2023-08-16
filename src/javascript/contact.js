const form = document.querySelector("form");
// const input = document.querySelectorAll("input");

const e = (() => {
  const addContainer = () => {
    const data = document.createElement("div");
    for (let i = 0; i < 4; i += 1) {
      const box = document.createElement("div");
      box.classList.add("message_box");
      box.appendChild(form.childNodes[i + 1]);
      data.appendChild(box);
    }
    data.appendChild(form.childNodes[5]);
    form.innerHTML = data.innerHTML;
  };

  return {
    addContainer,
  };
})();

export default e;
