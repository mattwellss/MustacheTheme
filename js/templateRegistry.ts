export default function (key) {
    let doc = document.querySelector('[data-id="' + key + '"]');

    return doc ?
        doc.innerHTML : '';
};