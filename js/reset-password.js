document.addEventListener("DOMContentLoaded", async () => {

    console.log("Reset Password JS Loaded");

    const form = document.getElementById("resetForm");
    const message = document.getElementById("message");

    try {

        // Read recovery session from URL
        const {
            data,
            error
        } = await window.supabaseClient.auth.getSession();

        console.log(data);
        console.log(error);

    } catch (err) {

        console.error(err);

    }

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {

            message.style.color = "red";
            message.textContent = "Passwords do not match.";

            return;

        }

        if (password.length < 8) {

            message.style.color = "red";
            message.textContent = "Password must be at least 8 characters.";

            return;

        }

        message.style.color = "black";
        message.textContent = "Updating password...";

        try {

            const {
                data,
                error
            } = await window.supabaseClient.auth.updateUser({

                password: password

            });

            console.log(data);
            console.log(error);

            if (error) {

                message.style.color = "red";
                message.textContent = error.message;
                return;

            }

            message.style.color = "green";
            message.textContent = "Password updated successfully.";

            setTimeout(() => {

                window.location.href = "login.html";

            }, 1500);

        } catch (err) {

            console.error(err);

            message.style.color = "red";
            message.textContent = err.message;

        }

    });

});
