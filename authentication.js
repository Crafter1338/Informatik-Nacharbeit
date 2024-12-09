// helpers
function async_http(method, url, callback){
    var xml = new XMLHttpRequest();
    xml.open(method, url, true);
    xml.onreadystatechange = function() {
        if (this.readyState == 4) {
            callback(xml.status, xml);
        }
    };

    xml.send();
}

function http(method, url){
    var xml = new XMLHttpRequest();
    xml.open(method, url, false);
    xml.send();

    return xml;
}

function check_user(name){
    var xml = http("GET", `/php/users.php?name=${name}`);

    if (xml.status == 200){
        const response = JSON.parse(xml.responseText)
        return response.user, response.token;
    } else {return null, null}
}

function get_user(name, pass){
    let is_token = false;

    if (!(name && pass)){
        name = localStorage.getItem("user_name");
        pass = localStorage.getItem("user_token");
        is_token = true;
    }

    var xml = http("GET", `/php/users.php?name=${name}`);

    if (xml.status == 200){
        return true;
    } else {return false}
}

function new_user(name, pass){
    if (!(name && pass)) {return}
    if (check_user(name)) {return}

    var xml = http("POST", `/php/users.php?name=${name}&pass=${pass}`);

    if (xml.status == 200){
        const response = JSON.parse(xml.responseText)
        return response.user, response.token;
    } else {return null, null}
}