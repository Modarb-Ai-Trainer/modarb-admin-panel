export default {
    general: {
        status: 500,
        error: ["Something went wrong, please check your internet connection."]
    },
    invalidData: {
        status: 422,
        error: ["Please make sure the entered data are ok!"]
    },
    unauthorized: {

        status: 401,
        error: ["Please make sure you're logged in!"]
    }
}