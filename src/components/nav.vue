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
                <router-link to="/" class="nav-item nav-link">Home|ቀዳሚገፅ|</router-link>
                <router-link to="/contact" class="nav-item nav-link">Contact|ያግኙን|</router-link>
                <router-link to="/news" class="nav-item nav-link">News|ዜና|</router-link>
                <router-link to="/tomar" class="nav-item nav-link">Tomar|ጦማር|</router-link>
                <router-link to="/dashboard" class="nav-item nav-link">Dashboard</router-link>
                              <div class="dropdown">
                                <button
                                  class="btn btn-primary dropdown-toggle"
                                  type="button" id="dropdownMenuButton1"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false">
                                  Catagories |ክፍላት|{{value}}
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" role="menu">
                                  <li v-for="option in options" :key="option">
                                    <a class="dropdown-item" @click="value = option" href="javascript:void(0)">{{option}}</a>
                                  </li>
                                </ul>
                              </div>
              </div>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="ፈልግ" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
                
              </form>
                <router-link to="/login" class="nav-item nav-link">Log in</router-link>
                <router-link to="/register" class="nav-item nav-link">Register</router-link>
            </div> 
    </nav>
  </div>
</template>