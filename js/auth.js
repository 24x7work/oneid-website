document.addEventListener("DOMContentLoaded", () => {

    console.log("Auth JS Loaded");
    console.log("window.supabase =", window.supabase);
    console.log("window.supabaseClient =", window.supabaseClient);

    const form = document.getElementById("loginForm");
    const message = document.getElementById("message");

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        message.style.color = "black";
        message.textContent = "Signing in...";

        try {

            const { data, error } =
                await window.supabaseClient.auth.signInWithPassword({
                    email: email,
                    password: password
                });

            console.log("Data:", data);
            console.log("Error:", error);

            if (error) {
                message.style.color = "red";
                message.textContent = error.message;
                return;
            }

            message.style.color = "green";
            message.textContent = "Login successful.";

            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 1000);

        } catch (err) {

            console.error(err);

            message.style.color = "red";
            message.textContent = err.message;

        }

    });

});
