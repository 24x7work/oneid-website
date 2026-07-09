document.addEventListener("DOMContentLoaded", () => {

    console.log("Auth JS Loaded");
    console.log("window.supabase =", window.supabase);
    console.log("window.supabaseClient =", window.supabaseClient);

    const form = document.getElementById("loginForm");
    const message = document.getElementById("message");
    const forgotPassword = document.getElementById("forgotPassword");

    // -----------------------------
    // LOGIN
    // -----------------------------
    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        message.style.color = "black";
        message.textContent = "Signing in...";

        try {

            const { data, error } =
                await window.supabaseClient.auth.signInWithPassword({
                    email,
                    password
                });

            console.log("Login Data:", data);
            console.log("Login Error:", error);

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

    // -----------------------------
    // FORGOT PASSWORD
    // -----------------------------
    if (forgotPassword) {

        forgotPassword.addEventListener("click", async (e) => {

            e.preventDefault();

            const email = document.getElementById("email").value.trim();

            if (!email) {

                message.style.color = "red";
                message.textContent = "Enter your email first.";

                return;

            }

            message.style.color = "black";
            message.textContent = "Sending reset email...";

            try {

                const { error } =
                    await window.supabaseClient.auth.resetPasswordForEmail(
                        email,
                        {
                            redirectTo: "https://24x7.work/reset-password.html"
                        }
                    );

                if (error) {

                    message.style.color = "red";
                    message.textContent = error.message;

                    return;

                }

                message.style.color = "green";
                message.textContent =
                    "Password reset email sent. Check your inbox.";

            } catch (err) {

                console.error(err);

                message.style.color = "red";
                message.textContent = err.message;

            }

        });

    }

});
