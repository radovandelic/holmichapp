var lang = navigator.language;
var language = lang.substring(0, 2);
if (language !== ("en")) { language = "en" }
var region = lang.substring(3, 5);

export const localization = {
    language: "en",
    region: "GB",
    lang: "de-DE",
    units: " km"
}

localization.language = language ? language : localization.language;
localization.region = region ? region : localization.region;