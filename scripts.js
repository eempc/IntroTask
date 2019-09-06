const externalLinks = document.getElementsByClassName("nav-icon");

for (let i = 0; i < externalLinks.length; i++) {
    externalLinks[i].setAttribute('target', '_blank');
}