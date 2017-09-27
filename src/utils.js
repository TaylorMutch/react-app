
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

export const getRGB = color => {
    color.split(',')
    let rgb = color.split(',')
    rgb.shift()
    rgb = ['rgb(', rgb.join(), ')'].join('')
    return rgb
}

export const getInteger = value => {
    let val = parseInt(value, 10)
    if (window.isNaN(val)) {
        val = 0
    }
    return val
}
