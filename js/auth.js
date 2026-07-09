document.addEventListener("DOMContentLoaded", () => {

    console.log("Auth JS Loaded");
    console.log(window.supabase);
    console.log(supabase);

    const form = document.getElementById("loginForm");
    const message = document.getElementById("message");

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        message.textContent = "Signing in...";

        try {

            const { data, error } = await window.supabaseClient.auth.signInWithPassword({
                }),

                new Promise((_, reject) =>
                    setTimeout(() => reject(new Error("Login Timeout")), 10000)
                )

            ]);

            console.log(data);
            console.log(error);

            if (error) {
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
            message.textContent = err.message;

        }

    });

});
