<template>
    
   <div class="dashboard">
      <div class="row">
         <div class="col-sm-3">
            <ul class="dashboard-options">
                <li>
                  <router-link class="btn btn-md btn-outline-primary" to="/Dashboard">Home</router-link>  
                </li>
                <li>
                  <router-link class="btn btn-md btn-outline-primary" to="/admin/dashboardNews">News</router-link>  
                </li>
                <li>
                  <router-link class="btn btn-md btn-outline-primary" to="/admin/dashboardTomar">Tomar</router-link> 
                </li>   
            </ul>    
         </div> 
         <div class="col-sm-9">
            <h1 class="page-title">Home Page</h1>
            
            <div class="testimonial-row my-4">
                <div class="testimonial-col col-dashboard">
                    <div class="user">
                        <img src="" alt="YOUR IMAGE" >
                        <div class="user-info">
                            <form enctype="multipart/form-data" action="">
                                <input type="file" class="">
                                <textarea type="text" placeholder="TITLE" class="home-title my-1"></textarea> 
                                <textarea type="text" placeholder="MAIN TEXT" class="home-text my-1"></textarea> 
                                <button class="btn btn-secondary">POST</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


         </div> 
      </div>
   </div>

</template>

<style>
    .home-title{
        width: 20rem;
        border-radius: 1rem;
        height: 4rem;
        background-color: #e3e3e3;
        padding: 1rem;
    }
    .home-title:focus{
      color: #fff;
      background-color: #e3e3e3 ;
      color: black;
      padding: 1rem;
    }

   .home-text{
        width: 20rem;
        border-radius: 1rem;
        height: 12rem;
        background-color: #e3e3e3;
        padding: 1rem;
        transition: 0.2s;
   }
   .home-text:focus{
    color: #fff;
    background-color: #e3e3e3 ;
    color: black;
    padding: 2rem;
   }
  .dashboard-options{
    height: 100%;
    list-style: none;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }
  .dashboard-options li {
    width: 100%;
    padding: 5px;
  }
  .col-sm-9 {
    border-left: 1px solid black;
    margin-top: 20px;
  }
  .col-dashboard{
    background-color: #e3e3e3;
  }
  .page-title{
    margin-top: 12px;
  }
</style>