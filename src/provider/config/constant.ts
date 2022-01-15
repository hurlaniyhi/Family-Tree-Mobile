export const fonts = {
    Poppins: require("@assets/fonts/Poppins-Medium.ttf"),
    Roboto: require("@assets/fonts/Roboto-Medium.ttf")
}

export const icons = {
    USER: require('@icons/user.png'),
    THEME: require('@icons/theme.png'),
    NOTIFICATION: require('@icons/notification.png'),
    SUPPORT: require('@icons/support.png'),
    HASH: require('@icons/hash.png'),
    ABOUT: require('@icons/about.png'),
    LOGOUT: require('@icons/logout.png'),
    PURPLE_DARK: require('@icons/logo-purple-dark.png'),
    PURPLE_LIGHT: require('@icons/logo-purple-light.png'),
    YELLOW_DARK:  require('@icons/logo-yellow-dark.png'),
    YELLOW_LIGHT: require('@icons/logo-yellow-light.png'),
    PINK_DARK: require('@icons/logo-pink-dark.png'),
    PINK_LIGHT: require('@icons/logo-pink-light.png'),
    GREEN_DARK: require('@icons/logo-green-dark.png'),
    GREEN_LIGHT: require('@icons/logo-green-light.png'),
    CALL: require('@icons/call.png'),
    LOCK: require('@icons/lock.png'),
    MAIL: require('@icons/mail.png'),
    ADDRESS: require('@icons/address.png'),
    COUNTRY: require('@icons/country.png'),
    GENDER: require('@icons/gender.png'),
    HOME: require('@icons/home.png'),
    STATE: require('@icons/state.png'),
    DATE: require('@icons/date.png'),
    FAMILY_NAME: require('@icons/family-name.png'),
    NAME: require('@icons/name.png'),
    KEY: require('@icons/key.png'),
    USER_GREEN: require('@icons/user-green.png'),
    USER_PINK: require('@icons/user-pink.png'),
    USER_PURPLE: require('@icons/user-purple.png'),
    USER_YELLOW: require('@icons/user-yellow.png'),
    DP_SM: require('@icons/profile-pics-small.png'),
    DP_LG: require('@icons/profile-pics-large.png'),
    DP3: require('@icons/dp3.jpg'),
    DP: require('@icons/test.jpg'),
    DP2: require('@icons/dp2.jpeg'),
    DP4: require('@icons/dp4.jpeg'),
    POST_IMAGE: require('@icons/post-image.png'),
    POST_IMAGE2: require('@icons/post2.jpeg'),
    POST_IMAGE3: require('@icons/post3.jpeg'),
    POST_IMAGE1: require('@icons/post1.jpeg')
}

export const initialState = {
    THEME: {
        green: false,
        purple: false,
        pink: false,
        yellow: false
    },
    THEME_MODE: {
        light: false,
        dark: false
    },
    FAMILY_DETAILS: {
        country: '',
        state: ''
    }
}

export const dropDownOptions = {
    STATE: [
        {title: "Kwara"},  {title: "Oyo"},  {title: "Lagos"},  {title: "Cancel"}
    ],
    COUNTRY: [
        {title: "Nigeria"},  
        {title: "Brazil"},  
        {title: "Portugal"},
        {title: "Italy"},
        {title: "France"},
        {title: "Cancel"}
    ],
    GENDER: [
        {title: "Male"},
        {title: "Female"},
        {title: "Cancel"}
    ]
}