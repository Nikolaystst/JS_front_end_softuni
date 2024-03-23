function editElement(el, match, replace) {
    let elEdit = el.textContent;
    let editedElement = elEdit.replace(match, replace)
    el.textContent = editedElement
}

// function editElement(ref, match, replacer) {
//     const matcher = new RegExp(match, 'g')
//     ref.textContent = ref.textContent.replace(matcher, replacer);
// }