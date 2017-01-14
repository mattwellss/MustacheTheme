import GetsTemplates from './getstemplates';

let templateRegistry: GetsTemplates;
templateRegistry = function (key: string) : string {
    let doc = document.querySelector('[data-id="' + key + '"]');

    return doc ?
        doc.innerHTML : '';
};

export default templateRegistry;