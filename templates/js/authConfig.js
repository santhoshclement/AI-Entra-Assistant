const msalConfig = {
    auth: {
        clientId: "f60d2ebc-7bc6-4943-a711-ccd5cf4d2def",
        authority: "https://login.microsoftonline.com/1a9cfd22-fcc1-4a7c-80f0-5da5561da0e5",
        redirectUri: "https://santhoshclement.github.io/AI-Entra-Assistant/"
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false
    }
};

const loginRequest = {
    scopes: [
        "User.Read",
        "User.Read.All",
        "Group.Read.All",
        "Directory.Read.All",
        "RoleManagement.Read.Directory"
    ]
};
