
/* A shortcut for Object.assign({}, obj, props) */
export const morph = (obj, props = {}) => Object.assign({}, obj, props)

export const getCookies = () => {
    let cookies = {}

    document.cookie.split(';').forEach(item => {
        let [name, value] = item.trim().split('=')
        cookies[name] = decodeURIComponent(value)
    })

    return cookies
}

/* Shortcut for handling a JSON request. */
export const handleJSON = response => {
    let {status} = response;
    if (status >= 200 && status < 300) {
        return response.json();
    } else {
        throw new Error('Bad status: ' + response.status);
    }
}
