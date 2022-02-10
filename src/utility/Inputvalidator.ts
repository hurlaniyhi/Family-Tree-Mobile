import { AppMode } from '@model'
import helpers from '@src/utility/helper'

const personalData = (data: any, theme: AppMode) => {
    const {firstName, lastName, email, phoneNumber, password, confirmPassword} = data

    if (!firstName || ! lastName || !email || !phoneNumber || !password || !confirmPassword) {
        helpers.showNotification('danger', 'Input Error', 'Kindly provide all required information', theme)
        return false
    }

    if (!email.includes('@')) {
        helpers.showNotification('danger', 'Input Error', 'Kindly provide a valid email address', theme)
        return false
    }

    if (phoneNumber.length < 11) {
        helpers.showNotification('danger', 'Input Error', 'Kindly provide a valid phone number', theme)
        return false
    }

    if (password != confirmPassword) {
        helpers.showNotification('danger', 'Input Error', 'Password did not match, kindly confirm password', theme)
        return false
    }

    if (password.length < 6) {
        helpers.showNotification('danger', 'Input Error', 'Password must of atleast 6 character length', theme)
        return false
    }

    return true
}

const relativeData = (data: any, theme: AppMode) => {
    const {fatherName, motherName, fatherPhoneNo, motherPhoneNo} = data

    if (!fatherName || !motherName || !fatherPhoneNo || !motherPhoneNo) {
        helpers.showNotification('danger', 'Input Error', 'Kindly provide all required information', theme)
        return false
    }

    if(fatherPhoneNo.length < 11 || motherPhoneNo.length < 11) {
        helpers.showNotification('danger', 'Input Error', 'Kindly provide a valid phone number', theme)
        return false
    }
    return true
}

export default {
    personalData,
    relativeData
}