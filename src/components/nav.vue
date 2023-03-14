<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light"> 
            <a class="navbar-brand" href="#">
              <img src="../assets/log.png" alt="" width="60" height="54">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
                           
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="navbar-nav mr-auto">
                <router-link to="/" class="mx-4 nav-item nav-link">Home|ቀዳሚገፅ|</router-link>
                <router-link to="/news" class="mx-4 nav-item nav-link">News|ዜና|</router-link>
                <router-link to="/tomar" class="mx-4 nav-item nav-link">Tomar|ጦማር|</router-link>
                <router-link to="/contact" class="mx-4 nav-item nav-link">Contact|ያግኙን|</router-link>    
              </div>
                <router-link to="/login" class="nav-item nav-link"> <button class="nav-btn btn btn-outline-primary">Log in</button>  </router-link>
                <router-link to="/register" class="nav-item nav-link"> <button class="nav-btn btn btn-outline-secondary">Register</button> </router-link>
            </div> 
    </nav>
  </div>
</template>
<style>
  .navbar{
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
  }
  @media (min-width: 991px) {
    .collapse{
       display: flex; 
       width: 100%;
       margin-left: 8rem;
       padding: 0;
    } 
  }
  .active {
    color: black;
  }
</style>