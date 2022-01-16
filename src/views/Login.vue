<template>
   <div class="loginform">
        <!-- Avatar Image -->
        <div class="avatar">
            <img src="https://www.markuptag.com/images/user-icon.jpg" alt="Avatar">
        </div>
        <h2>Login</h2>
        <!-- Start Form -->
        <form action="">
            <input type="text" name="username" placeholder="ስም">
            <input type="password" name="password" placeholder="የይለፍ ቃል">
            <input type="submit" name="login-btn" value="Login">
            <router-link to="/register" class="nav-item nav-link">Forgot your password?</router-link>
            <router-link to="/account" class="nav-item nav-link">Create account</router-link>
        </form>        
    </div>
</template>

<style>
body {
    margin: 0;
    padding: 0;
    font-family: arial;
}
.loginform {
    background: #ffffff;
    width: 350px;
    color: #4caf50;
    top: 60%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    box-sizing: border-box;
    padding: 30px 20px;
    border-radius: 20px;
    box-shadow: 0px 10px 29px 0px #e0e0e0;
}
.loginform p{
    margin: 0;
    padding: 0;
    font-weight: bold;
}
.loginform h2 {
    font-size: 30px;
    margin: 30px 0px;
    text-transform: uppercase;
    font-weight: normal;
    text-align: center;
}
.loginform input{
    width: 100%;
    margin-bottom: 30px;

}
.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
    position: absolute;
    top: -55px;
    left: 0px;
    right: 0px;
    border: 6px solid #e6e6e6;
}
.avatar img {
    width: 100%;
    height: auto;
}
.loginform input[type="text"], input[type="password"]
{
    border: none;
    border-bottom: 1px solid #1e5220;
    background: transparent;
    outline: none;
    height: 40px;
    color: #333;
    font-size: 16px;
}
.loginform input[type="submit"] {
    background: #4CAF50;
    color: #fff;
    font-size: 20px;
    padding: 7px 15px;
    border-radius: 20px;
    transition: 0.4s;
    border: none;
}
.loginform input[type="submit"]:hover {
    cursor: pointer;
    background: #1f5822;
}
.loginform a {
    text-decoration: none;
    font-size: 15px;
    line-height: 20px;
    color: #1e5220;
}
.loginform .have-not {
    float: right;
}
.loginform a:hover {
    color: #4caf50;
}

/*-- Responsive CSS --*/
@media(max-width: 576px) {
.loginform {
    width: 90%;
}
.loginform a {
    display: block;
    text-align: center;
    float: inherit !important;
    margin: 10px 0px;
}
}
</style>