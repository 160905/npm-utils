import Cookies from 'js-cookie'

export const getCookies = (key: string) => Cookies.get(key)

export const setCookies = (key: string, value: any) => Cookies.set(key, value)

export const removeCookies = (key: string) => Cookies.remove(key)

export const deleteAllCookies = () => {
    var cookies = document.cookie.split(';')

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i]
        var eqPos = cookie.indexOf('=')
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
        document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
    }
}
