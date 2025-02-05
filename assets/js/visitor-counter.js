
async function fetchAsync () {
    document.getElementById("visitorCounter").textContent  = "Visitor counter: Loading";
    let response = await fetch("{{ getenv `HOMEAWS_API_GATEWAY_URL` }}");
    let data = await response.json();
    if (data.statusCode == 200) {
        document.getElementById("visitorCounter").textContent  = "Visitors counter: " + data.body;
    }
}

document.addEventListener("DOMContentLoaded", function(){
    fetchAsync();
});