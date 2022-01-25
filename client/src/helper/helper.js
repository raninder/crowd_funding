const isUserLoggedIn = () => {
  return localStorage.getItem("userID") ? true : false
}

module.exports = {isUserLoggedIn};