// affiliate

function getQueryStringValue(key) {
    return decodeURIComponent(
        window.location.search.replace(
            new RegExp(
                '^(?:.*[&\\?]' +
                    encodeURIComponent(key).replace(/[\.\+\*]/g, '\\$&') +
                    '(?:\\=([^&]*))?)?.*$',
                'i'
            ),
            '$1'
        )
    )
}

if (getQueryStringValue('r') && window.localStorage) {
    window.localStorage.setItem('r', getQueryStringValue('r').trim())
}
