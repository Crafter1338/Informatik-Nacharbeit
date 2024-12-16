let hrefs = [
    ["href_homepage", "index.html"],
    ["href_square", "square.html"],
    ["href_circle", "circle.html"],
    ["href_cylinder", "cylinder.html"],
]

console.log()

hrefs.forEach((href) => {
    document.getElementById(href[0]).onclick = () => {window.location.href = href[1]};
})