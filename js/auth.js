document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("loginForm");
    const message = document.getElementById("message");

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        message.textContent = "Signing in...";

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            message.textContent = error.message;
            return;
        }

        message.style.color = "green";
        message.textContent = "Login successful.";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);

    });

});
