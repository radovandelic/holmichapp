function translate(newString, newString2 = null, newString3 = null, newString4 = null) {
    const translations = {
        "en": {
            "APP_LANGUAGE": "The language of this app",
            "APPNAME": "Some Name",
            "SLOGAN": "the best app ever",

            "HOME_TITLE": "A title for RRRR the home screen",
            "HOME_TEXT": "A text for the home",

            "GREETING": `Hello ${newString}, how are you?`,

            "ROUTE": "Routes",
            "LOGIN": "Sign in",
            "LOGOUT_MESSAGE": "Log out from this computer?",
            "LOGOUT": "Log out",
            "REGISTER": "Register",

            "PROFILE": "Cockpit",
            "PROFILE_TITLE": "Profile Title",
            "PROFILE_GREETING": "Some greetings for the logged in user",

            "MAPS_INFO_TITLE": "Please add origin and destination addresses, to calculate the route",

            "MAP_STEP_TITLE": "Only two steps left",
            "MAP_STEP_1": "Calculate the Route",
            "MAP_STEP_2": "Choose someone to ask",

            "FROM": "From",
            "FILL_FORM": "Please fill the form, to see distance and duration.",
            "DESTINATION": "Destination",
            "SUBMIT_ADDRESSES": "Calculate the Route",
            "DISTANCE": "The distance is: ",
            "DURATION": "The duration is: ",
            "ESTIMATED_DURATION": "Estimated duration: ",
            "ROUTE_IMPOSSIBLE": "It is not possible to go there by car",

            "PICKUP_TITLE": "When you want to be picked up?",
            "PICKUP_DATE": "Date",
            "PICKUP_TIME": "Time",

            "LOGIN_FORM_TITLE": "Log In",
            "REGISTER_FORM_TITLE": "Register",
            "ENTER_USERNAME": "Enter username",
            "PLACEHOLDER_USERNAME": "Your username",
            "ENTER_EMAIL": "Enter email",
            "PLACEHOLDER_EMAIL": "Your email",
            "ENTER_PASSWORD": "Enter password",
            "PLACEHOLDER_PASSWORD": "Your password",

            "NEW_HERE": "New here? Create a new account.",
            "ALREADY_HAS_ACCOUNT": "Already have an account? Sign in here.",

            "ASK_SOCIAL_TITLE": `Ask someone, to pick you up from this route`,
            "ASK_SOCIAL_MESSAGE": `Hi, I need a ride from ${newString} to ${newString2}. Can you help? :-)`,

            "DAYS": [
                ["Monday"],
                ["Tuesday"],
                ["Wednesday"],
                ["Thursday"],
                ["Friday"],
                ["Saturday"],
                ["Sunday"]
            ],

            "MONTHS": [
                ["January", 31],
                ["February", 28],
                ["March", 31],
                ["April", 30],
                ["May", 31],
                ["June", 30],
                ["July", 31],
                ["August", 31],
                ["September", 30],
                ["October", 31],
                ["November", 30],
                ["December", 31]
            ],
            "ACCEPT_REQUEST": "Accept",
            "DENY_REQUEST": "Deny",
        },
        "de": {
            "APP_LANGUAGE": "Die Sprache der App",
            "APPNAME": "HolMichApp",
            "SLOGAN": "Die Abhol-App",

            "HOME_TITLE": "Das ist die Startseite",
            "HOME_TEXT": "Irgend ein Text auf der Startseite",
            "GREETING": `Hallo ${newString}, wie geht es dir?`,

            "ROUTE": "Routenplaner",
            "LOGIN": "Einloggen",
            "LOGOUT_MESSAGE": "Von diesem Computer abmelden?",
            "LOGOUT": "Ausloggen",
            "REGISTER": "Registrieren",

            "PROFILE": "Cockpit",
            "PROFILE_TITLE": "Die Überschrift des Profils",
            "PROFILE_GREETING": `Hallo ${newString}, geht es dir gut?`,

            "MAPS_INFO_TITLE": "Bitte gib den Startpunk und das Ziel deiner gewünschten Route an",

            "MAP_STEP_TITLE": "In nur zwei Schritten zum Ziel",
            "MAP_STEP_1": "Route auswählen",
            "MAP_STEP_2": "Abholanfrage senden",

            "FROM": "Von",
            "FILL_FORM": "Bitte fülle die Felder aus, um die Entfernung und die Fahrtdauer anzuzeigen.",
            "DESTINATION": "Nach",
            "SUBMIT_ADDRESSES": "Route berechnen",
            "DISTANCE": "Die Entfernung beträgt: ",
            "DURATION": "Die Fahrtdauer beträgt: ",
            "ESTIMATED_DURATION": "Geschätzte Fahrtdauer: ",
            "ROUTE_IMPOSSIBLE": "It is not possible to go there by car",

            "PICKUP_TITLE": "Wann willst du abgeholt werden?",
            "PICKUP_DATE": "Gib das Datum ein",
            "PICKUP_TIME": "Gib die Uhrzeit ein",

            "LOGIN_FORM_TITLE": "Einloggen",
            "REGISTER_FORM_TITLE": "Registrieren",
            "ENTER_USERNAME": "Benutzernamen aussuchen",
            "PLACEHOLDER_USERNAME": "Dein Benutzername",
            "ENTER_EMAIL": "Email eingeben",
            "PLACEHOLDER_EMAIL": "Email",
            "ENTER_PASSWORD": "Passwort eingeben",
            "PLACEHOLDER_PASSWORD": "Passwort",

            "NEW_HERE": "Neu hier? Registriere einen neuen Benutzer.",
            "ALREADY_HAS_ACCOUNT": "Bereits einen Account? Einfach anmelden.",

            "ASK_SOCIAL_TITLE": `Frag' jemanden, ob du gefahren werden kannst.`,
            "ASK_SOCIAL_MESSAGE": `Hey, ich muss von ${newString} nach ${newString2}. Kannst du mich fahren? :-)`,

            "DAYS": [
                ["Montag"],
                ["Dienstag"],
                ["Mittwoch"],
                ["Donnerstag"],
                ["Freitag"],
                ["Samstag"],
                ["Sonntag"]
            ],

            "MONTHS": [
                ["Januar", 31],
                ["Februar", 28],
                ["März", 31],
                ["April", 30],
                ["Mai", 31],
                ["Juni", 30],
                ["Juli", 31],
                ["August", 31],
                ["September", 30],
                ["Oktober", 31],
                ["November", 30],
                ["Dezember", 31]
            ]
        },
        "ACCEPT_REQUEST": "Annehmen",
        "DENY_REQUEST": "Ablehnen",
    }
    return translations;
}
export default translate;