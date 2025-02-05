
document.addEventListener("DOMContentLoaded", function() {
    const text = "Welcome to My Portfolio";
    let index = 0;
    const typingTextElement = document.getElementById("typing-text");

    function type() {
        if (index < text.length) {
            typingTextElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100); // Adjust typing speed here
        }
    }

    type();
});
