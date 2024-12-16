let hrefs = [
    ["href_homepage", "index.html"],
    ["href_login", "login.html"],
    ["href_register", "register.html"],
    ["href_calculators", "calculator.html"],
    ["href_history", "history.html"],
]

hrefs.forEach((href) => {
    document.getElementById(href[0]).onclick = () => {window.location.href = href[1]};
})