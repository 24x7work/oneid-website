document.addEventListener("DOMContentLoaded", async () => {

    const {
        data: { session }
    } = await supabase.auth.getSession();

    if (!session) {
        window.location.href = "login.html";
        return;
    }

    document.getElementById("userEmail").textContent =
    session.user.email;

    console.log("Logged in:", session.user.email);

    const logoutBtn = document.getElementById("logoutBtn");

    logoutBtn.addEventListener("click", async () => {

        await supabase.auth.signOut();

        window.location.href = "login.html";

    });

});
