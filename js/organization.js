async function loadOrganization() {

    try {

        const {
            data: { session }
        } = await supabase.auth.getSession();

        if (!session) return;

        const user = session.user;

        const orgName = document.getElementById("organizationName");

        if (orgName) {

            orgName.textContent =
                user.user_metadata?.organization_name ||
                "Default Organization";

        }

    } catch (err) {

        console.error("Organization Load Error:", err);

    }

}

await loadOrganization();
