// helpers
function http(method, url){
    var xml = new XMLHttpRequest();
    xml.onreadystatechange = function() {
        if (this.readyState == 4) {
            return xml;
        }
    };

    xml.open(method, url, true);
    xml.send();
}

function check_user(name){
    var xml = http("GET", `/users?name=${name}`);

    if (xml.status == 200){
        return JSON.parse(xml.response.user), xml.response.token;
    } else {return null, null}
}

function get_user(name, pass){
    let is_token = false;

    if (!(name && pass)){
        name = localStorage.getItem("user_name");
        pass = localStorage.getItem("user_token");
        is_token = true;
    }

    var xml = http("GET", `/users?name=${name}`);

    if (xml.status == 200){
        return true;
    } else {return false}
}

function new_user(name, pass){
    if (!(name && pass)) {return}
    if (check_user(name)) {return}

    var xml = http("POST", `/users?name=${name}&pass=${pass}`);

    if (xml.status == 200){
        return JSON.parse(xml.response.user), xml.response.token;
    } else {return null, null}
}