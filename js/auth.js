const msalInstance = new msal.PublicClientApplication(msalConfig);

async function signIn() {
    try {
        const loginResponse = await msalInstance.loginPopup(loginRequest);
        console.log("User Logged In", loginResponse.account);
    } catch (error) {
        console.error(error);
    }
}
