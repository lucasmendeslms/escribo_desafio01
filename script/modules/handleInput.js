export default function handleInput() {
  const input = document.querySelector("#input");

  const disableInput = () => {
    const button = document.querySelector("#send");
    input.value.length
      ? button.removeAttribute("disabled")
      : button.setAttribute("disabled", true);
  };

  const hiddenMessages = () => {
    const messages = [
      document.querySelector("#errorMessage"),
      document.querySelector("#resultSection"),
    ];

    messages.forEach((message) => {
      if (message.style.display !== "none") {
        message.style.display = "none";
      }
    });
  };

  const events = {
    input: disableInput,
    click: hiddenMessages,
  };

  if (input) {
    Object.keys(events).forEach((event) =>
      input.addEventListener(event, events[event])
    );
  }
}