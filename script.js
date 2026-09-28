//your JS code here. If required.
const inputs = document.querySelectorAll(".code");

inputs.forEach((input, index) => {

    input.addEventListener("keydown", (event) => {

        // Sirf 0-9 allow
        if (!/^[0-9]$/.test(event.key) &&
            event.key !== "Backspace" &&
            event.key !== "Delete" &&
            event.key !== "ArrowLeft" &&
            event.key !== "ArrowRight" &&
            event.key !== "Tab") {

            event.preventDefault();
        }

        // Digit enter hone par next input
        if (/^[0-9]$/.test(event.key)) {
            setTimeout(() => {
                if (input.value.length === 1) {
                    inputs[index + 1]?.focus();
                }
            }, 0);
        }
    });

    // Backspace par previous input
    input.addEventListener("keydown", (event) => {

        if (event.key === "Backspace" && input.value === "") {
            inputs[index - 1]?.focus();
        }
    });
});