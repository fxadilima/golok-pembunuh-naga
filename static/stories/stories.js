
async function artikelSejarah(path, targetFrame) {
    const data = await fetch(path);
    const txt = await data.text();
    document.getElementById(targetFrame).innerHTML = txt;
}
