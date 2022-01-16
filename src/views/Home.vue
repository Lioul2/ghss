<template>
<section id="Home">
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <ol class="carousel-indicators">
            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class="active"></li>
            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class="active"></li>
        </ol>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="../assets/pp2.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h3>እንኳን ወደ ሐዋሳ ደብረ ምህረት ቅ/ገብርኤል ገዳም </h3>
                    <div class="autoWritter">
                        <h2 class="autoWrite-text">መ/ድ/ሰ/ት/ቤት  ድረ-ገፅ በሰላም መጡ!</h2>
                     </div>
                    <router-link class="btn btn-warning" to="/register">ይመዝገቡ</router-link>  
                                <router-view/>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/pp2.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h3>Web Designing</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    <a href="#" class="btn btn-warning">Read More</a>
                </div>
            </div>
            <div class="carousel-item">
                <img src="../assets/pp2.jpg" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h3>App Development</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    <a href="#" class="btn btn-warning">Read More</a>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">ተመለስ</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">ቀጣይ</span>
        </a>
    </div>
</section>


<!-- aims and goals -->

<section id="pro">
 <div class="title-text">
        <p></p>
        <h1></h1>
    </div>   
    <div class="pro-row">
        <div class="pro-col">
            <div class="slide">
                
                <div class="slide-info">
                    <h1>ራዕይ</h1>
                    <p>በኢ/ኦ/ተ/ቤ/ክ ትምህርትና በመልካም ሥነ ምግባር የታነጸ የቤተክርስቲያንና የሀገር ተረካቢ ትውልድ ማፍሪያ ተቋም መሆን፡፡</p>
                </div>
            </div>      
        </div>
        <div class="pro-col">
            <div class="slide">
                 
                <div class="slide-info">
                    <h1>ተልዕኮ</h1>
                    <p>በኢ/ኦ/ተ/ቤ/ክ መሰረታዊ ትምህርት የበለጸገ በመልካም ሥነ ምግባር የታነጸ ትውልድ ማፍራት፡፡  </p>
                </div>
            </div>
        </div>
        <div class="pro-col">
            <div class="slide">
                
                <div class="slide-info">
                    <h1> እሴቶች</h1>
                    <p>የኢ/ኦ/ተ/ቤ/ክ እምነትና ስርዓት የእምነቱ ተከታዮች በተለይም ህጻናትና ወጣቶች በቃለ እግዚአብሔር ማነጽ ነው፡፡ </p>
                </div>
            </div>
        </div>
    </div>
</section>


<!-- news -->


<section id="News">
     <div class="title-text">
        <h1></h1>
    </div>
    <div class="News-box">
        <div class="Newss">
        <p></p>  
            <div class="Newsss-img">
                <img src="../assets/gebriel.jpg">
                <h2>ጾም</h2>
            </div>
            <p>

ቀሲስ ዘክርስቶስ ጸጋዬ

ኅዳር ፲፫ ቀን ፳፻፲፬ ዓ.ም

የተወደዳችሁ የእግዚአብሔር ልጆች! እንደምን ሰነበታችሁ? እግዚአብሔር ይመስገን አላችሁ? መልካም፤ እግዚአብሔር አምላካችን የተመሰገነ ይሁን፡፡ ባላችሁበት ሆናችሁ ትምህርታችሁን  በጥሞና ተከታተሉ!

ልጆች! ለዛሬ ይዘንላችሁ የቀረብነው ትምህርት ስለ ጾም ነው፡፡ በመጀመሪያ ጾም ምን ማለት እንደሆነ እና እናንተ ሕፃናት ከሰባት ዓመት ዕድሜያችሁ ጀምሮ እንዴት መጾም እንዳለባችሁ እናስተምራችኋለን፡፡

ልጆች! ጾም ማለት ክርስቲያን የሆነ ሰው ሁሉ ለተወሰነ ጊዜና ሰዓት ከእህል ከውኃ ተከልክሎ መቆየት ማለት ሲሆን ከሥጋ፣ ከቅቤና፣ ከእንቁላል ደግሞ እንድንጾምባቸው የተወሰኑ የአጽዋማት ሳምንታት እስኪጠናቀቁ የምንከለከልበት ወቅት ማለት ነው፡፡ (ፍትሕ መንፈሳዊ አንቀጽ ፲፭)

ከዚያም በተጨማሪ ጾም ዓይን ክፉ ከማየት ጆሮ ክፉ ከመስማት፣ አንደበት ክፉ ከመናገር፣ እጅ ክፉ ከመሥራት በአጠቃላይ ሰውነት የኀጢአት ሥራ ከመሥራት የሚገታበት፣ የሚከለከልበት ሁኔታ ማለት ነው፡፡

ጾም የአዋጅ እና የፈቃድ ተብሎ በሁለት ይከፈላል፡፡</p>
            <router-link class="read-more" to="/news">ሙሉውን ለማንበብ</router-link>  
             <router-view/>
        </div>
        <div class="outer">
        <details open>
            <summary>ሃይማኖት ምን ማለት ነው?</summary>
            <div class="faq-content">
                <p>• ሃይማኖት ማለት ማመን እና መታመን ማለት ነው፡፡ ማመን ማለት በዓይነ ስጋ አይቶ በዕዝነ ሥጋ (ጆሮ) ሰምቶ፤በልብ አስቦ፤በስሜት ህዋሳትም አድምጦ  ለሊመረምሩት የማችሉትን ሩቅ በመሆን እና በረቂቅነት ያለውን ይሆናል ይደረጋል ብሎ መቀበል ነው፡፡ መታመን ማለት ደግሞ ይሆናል ይደረጋል ብሎ በእምነት የተቀበሉትን እንዲሆን፣እንዲደረግ፣እነዲፈጸም ተግባራዊ ምላሽ መስጠት ነው፡፡ ምሳሌ፦ ‹‹አንድ ሰው በጥምቀት ከሥላሴ ደግሞ ልደት ሊወለድ ይችላል›› ብሎ ካመነ ቦሃላ መጠመቅ ማለት ነው፡፡
</p>
            </div>
        </details>

        <details>
            <summary>ሃይማኖት እንዴት እና መች  ተጀመረ?</summary>
            <div class="faq-content">
                <p>• ሃይማኖት የተጀመረው ስሙን ቀድሰው ክብሩን ወርሰው ለመኖር ከተፈጠሩት ፍጥረታት የመጀመሪያዎቹ ቅዱሳን መላእክት በተፈተሩበት ዕለት(ስነ-ፍጥረት መፈጠር በተጀመረበት ዕለት) ነው፡፡ በዚህ ዕለት መላእክትን ፈጥሮ ፈጣሪ ተሰውሮባቸዋል፡፡ ይህንም ያደረገው ስለ ሁለት ነገር ነው፡፡
                    <br>1.ፈጣሪን በባህሪው ሊያው የሚቻለው ፍትረት የሌለ አኗኗሩም የማይመረመር መሆኑን ለማጠየቅ ነው፡፡ ‹‹መቼስ ቢሆን እግዚአብሔርን ያየው አንድ ስንኳ የለም›› (ዮሐ 1፡18) 
                    <br>2.ፈጣሪ አእምሮ ሰቶቸዋልና መርምረው ይወቁኝ በማለት ነው፡፡ (ይህም ሲባል በእምነት ሆነው እንጂ ያለእምነት ሆነው እግዚአብሔርን ሊያውቁ አይችሉም፡፡)
                    በዚህም መሰረት እውቀታቸውን ተጠቅመው ጥቄዎችን ጠየቁ፡፡ ጥያቄያቸውም እግዚአብሔርን በማመን የተጀመረ ነው በዚህም መሰረት ማን ፈጠረን?ከየት መጣን?.............የሚሉት ጥያቄዎች እንደሚያመለክቱት አላወቁትም እንጂ ፈጣሪ(አስገኝ) እንዳላቸው አምነዋል፡፡
                    <br>  
                </p>
                <h5>•ስለዚህ ሃይማኖት እንደዚህ በቅዱሳን መላእክት በመጀመሪያ ዕለት ተጀመረ፡፡ </h5>
            </div>
        </details>
        <details>
            <summary>ኦርቶዶክስ</summary>
            <div class="faq-content">
                <p>• ኦርቶዶክስ የሚለው ቃል የግሪክ ቃል ሲሆን ‹‹ኦርቶ›› (ኦርቶስ) ማለት ቀጥ ያለ እምነት ሲሆን ‹‹ዶክስ‹‹ ማለት ደግሞ እምነት ማለት ነው፡፡ ስለዚህ ኦርቶዶክስ ቀጥ ያለ፡የጸና፡የቀና እምነት ማለት ነው፡፡ በብሊይና በሓዲስ ኪዳን እንደተገለጸልን ቀጥ ያለ እምነት ወይም እውነተኛ ሃይማኖት ተብላ በአምላካችን የተመሰረተች ኦርቶዶክስ ተዋህዶ ናት፡፡</p>
            </div>
        </details>
        <details>
            <summary>ተዋህዶ </summary>
            <div class="faq-content">
                <p>• ተዋህዶ የቃሉ ትርጉም ግእዝ ሲሆን የሚያበስረንም የአምላካችን የእግዚአብሔርን ሰው የመሆን ምስጢር ነው፡፡ ይህም የተባለበት ምክንያት በዮሐንስ ወንጌል 1፡14 ‹‹ያ ቃል ሥጋ ሆነ›› በማለት ተዋህዶን (መዋሃዱን) ገልጾታል፡፡
ኤር 6፡16     ማቴ 13፡14    ዕብ 13፡7
</p>
            </div>
        </details>
    </div>
    </div>    
</section>



<!-- service -->

<section id="service">
    <div class="title-text">
        <h1>ምክረ አበው </h1>
    </div>
    <div class="service-box">
        <div class="single-service">
            <img src="../assets/abwee2.jpg">
            <div class="overlay"></div>
            <div class="service-desc">
                <h1>ታላቁ ቅዱስ ጎሮጎርዮስ</h1>
                <hr>
                <p>"ዛሬን ለሰይጣን ነገን ደግሞ ለእግዚአብሔር አትስጡ!"</p>
            </div>
        </div>
        <div class="single-service">
            <img src="../assets/abwee.jpg">
            <div class="overlay"></div>
            <div class="service-desc">
                <h1>ታላቁ ቅዱስ ጎሮጎርዮስ</h1>
                <hr>
                <p>"ዛሬን ለሰይጣን ነገን ደግሞ ለእግዚአብሔር አትስጡ!"</p>
            </div>
        </div>
    </div>
</section>

<!-- personal information -->

<section id="info">
   
    <div class="title-text">
        <p>ለበለጠ መረጃ</p>
        <h1>የሰንበት ት/ቤት አመራሮችን እናስተዋውቆዎ</h1>
    </div>      
    <div class="info-row">
        <div class="info-col">
            <div class="person">
                 <img src="../assets/icon.png">
                <div class="person-info">
                    <h4>ታምራየሁ ግርማ </h4>
                    <small>@tameray_hugerma</small>
                </div>
            </div>
            <p>የሰ/ት/ቤት ሰብሳቢ</p>       
        </div>
        <div class="info-col">
            <div class="person">
                 <img src="../assets/icon.png">
                <div class="person-info">
                    <h4>ስንታየሁ ግርማ</h4>
                    <small>@senti</small>
                </div>
            </div>
            <p>የትምህርት ክፍል ሰብሳቢ</p>
        </div>
        <div class="info-col">
            <div class="person">
                 <img src="../assets/icon.png">
                <div class="person-info">
                    <h4> ቃልኪዳን እንዳለ</h4>
                    <small>@kale</small>
                </div>
            </div>
            <p>የመስተንግዶ ክፍል ሰብሳቢ</p>
        </div>
    </div>
    <div class="info-row">
        <div class="info-col">
            <div class="person">
                 <img src="../assets/icon.png">
                <div class="person-info">
                    <h4>ታምራየሁ ግርማ </h4>
                    <small>@tameray_hugerma</small>
                </div>
            </div>
            <p>የሰ/ት/ቤት ሰብሳቢ</p>       
        </div>
        <div class="info-col">
            <div class="person">
                 <img src="../assets/icon.png">
                <div class="person-info">
                    <h4>ስንታየሁ ግርማ</h4>
                    <small>@senti</small>
                </div>
            </div>
            <p>የትምህርት ክፍል ሰብሳቢ</p>
        </div>
        <div class="info-col">
            <div class="person">
                 <img src="../assets/icon.png">
                <div class="person-info">
                    <h4> ቃልኪዳን እንዳለ</h4>
                    <small>@kale</small>
                </div>
            </div>
            <p>የመስተንግዶ ክፍል ሰብሳቢ</p>
        </div>
    </div>
    <div class="info-row">
        <div class="info-col">
            <div class="person">
                 <img src="../assets/icon.png">
                <div class="person-info">
                    <h4>ታምራየሁ ግርማ </h4>
                    <small>@tameray_hugerma</small>
                </div>
            </div>
            <p>የሰ/ት/ቤት ሰብሳቢ</p>       
        </div>
        <div class="info-col">
            <div class="person">
                 <img src="../assets/icon.png">
                <div class="person-info">
                    <h4>ስንታየሁ ግርማ</h4>
                    <small>@senti</small>
                </div>
            </div>
            <p>የትምህርት ክፍል ሰብሳቢ</p>
        </div>
        <div class="info-col">
            <div class="person">
                 <img src="../assets/icon.png">
                <div class="person-info">
                    <h4> ቃልኪዳን እንዳለ</h4>
                    <small>@kale</small>
                </div>
            </div>
            <p>የመስተንግዶ ክፍል ሰብሳቢ</p>
        </div>
    </div>
</section>

<section>
<!-- Footer -->
<footer class="bg-dark text-center text-white">
  <!-- Grid container -->
  <div class="container p-4">
    <!-- Section: Social media -->
    <section class="mb-4">
      <!-- Facebook -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>

      <!-- Twitter -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-twitter"></i
      ></a>

      <!-- Google -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-google"></i
      ></a>

      <!-- Instagram -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-instagram"></i
      ></a>

      <!-- Linkedin -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>

      <!-- Github -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-github"></i
      ></a>
    </section>
    <!-- Section: Social media -->

    <!-- Section: Form -->
    <section class="">
      <form action="">
        <!--Grid row-->
        <div class="row d-flex justify-content-center">
          <!--Grid column-->
          <div class="col-auto">
            <p class="pt-2">
              <strong>Email address</strong>
            </p>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-md-5 col-12">
            <!-- Email input -->
            <div class="form-outline form-white mb-4">
              <input type="email" id="form5Example21" class="form-control" />
              <label class="form-label" for="form5Example21"></label>
            </div>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-auto">
            <!-- Submit button -->
            <button type="submit" class="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>
          <!--Grid column-->
        </div>
        <!--Grid row-->
      </form>
    </section>
    <!-- Section: Form -->

    <!-- Section: Text -->
    <section class="mb-4">
      <h4>
       የሐዋሳ ደ/ም/ቅ/ገብርኤል ገዳም መ/ድ/ሰ/ት/ቤት 
      </h4>
    </section>
    <!-- Section: Text -->

    <!-- Section: Links -->
    <section class="">
      <!--Grid row-->
      <div class="row">
        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
           <p>
            ያለጠባቂ ያልተወንና እንዲቀድሱን አባቶችን ለቀደሰ ለቅዱስ አምላካችን ለህያው እግዚአብሔር እንዲሁም ስም አጠራሯ ለሚጣፍጠው ለዘላለማዊት ድንግል እናታችን ለቅደስት ድንግል ማርያም ክብር ምስጋና ይድረሳቸው፡፡
          <br>ወስብሀት ለእግዚአብሔር ወለወላዲቱ ድንግል ወለመስቀሉ ክቡር ፡፡</p>
          
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">ክፍላት</h5>
            <hr>
          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">ትምህርት ክፍል</a>
            </li>
            <li>
              <a href="#!" class="text-white">መስተንግዶ ክፍል</a>
            </li>
            <li>
              <a href="#!" class="text-white">መዝሙር ክፍል </a>
            </li>
            <li>
              <a href="#!" class="text-white">ኪነ ጥበብ ክፍል</a>
            </li>
          </ul>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">ያግኙን</h5>
            <hr>
          <p><i class="fas fa-home me-3"></i> ሐዋሳ,ኢትዮጲያ</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@sundayschool.com
          </p>
          <p><i class="fas fa-phone me-3"></i> + 046 234 567 88</p>
          <p><i class="fas fa-print me-3"></i> + 046 234 567 89</p>
        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
           <div
            class="bg-image hover-overlay ripple shadow-1-strong rounded"
            data-ripple-color="light"
          >
            <img
              src="../assets/design.jpg"
              class="w-100"
            />
            <h6>አዲስ የሚሰራው የሰንበት ትምህርትቤታችን ዲዛይን</h6>
            <a href="#!">
              <div
                class="mask"
                style="background-color: rgba(251, 251, 251, 0.2);"
              ></div>
            </a>
          </div>
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->
    </section>
    <!-- Section: Links -->
  </div>
  <!-- Grid container -->

  <!-- Copyright -->
  <div class="container p-4">
    <!-- Section: Images -->
    
    <!-- Section: Images -->
  </div>
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.3);">
    <div class="row d-flex justify-content-center">
          <!--Grid column-->
          <div class="col-auto">
            <p class="pt-2">
              <strong>© 2020 Copyright:</strong>
              <a class="text-white" href="https://Hawassasaintgebrielsundayschool.com/">Hawassasaintgebrielsundayschool.com </a> 
            </p>
          </div>
          <!--Grid column-->

          <!--Grid column-->
          <div class="col-md-5 col-12">
            <!-- Email input -->
            <div class="form-outline form-white mb-4">
              <n>
              <a href="#/Home" class="text-white">Home |</a>
               <a href="#!" class="text-white">  Contact |</a>
                <a href="#!" class="text-white">   Tomar |</a>
                 <a href="#!" class="text-white">  News |</a>
              </n>
            </div>
          </div>
          <!--Grid column-->
        </div>
  </div>
  
  <!-- Copyright -->
</footer>
<!-- Footer -->
</section>



<!-- personal information -->


</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}

/* news */
.wellcome{
    font-size: 50%;
    color:#40668a;
    font-weight: bold;
}
    
#News{
    width: 100%;
    padding: 120px 0;
    background: #efefef;
}
.title-text{
    text-align: center;
    padding-bottom: 70px;
}
.title-text p{
    margin: 40px;
    font-size: 20px;
    color: #009688;
    font-weight: bold;
    position: relative;
    z-index: 1;
    display: inline-block;   
}
.title-text h1{
    font-size: 50px;
}
.News-box{
    width: 80%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
}
.Newss{
    flex-basis: 50%;
}
                .Newsss-img{
                    flex-basis: auto;
                    margin: auto;
                }
                .Newsss-img img{
                    width: 100%;
                    border-radius: 10px;
                }
@media screen and (max-width: 770px){
    .newss{
        flex-basis: 100%;
    }
}

.read-more{
    color: orange;
    text-decoration: none;
    padding: 0 25px 2px;
    border-radius: 36px;
    margin: 46px;
    font-size: 18px;
}

.outer {
    max-width: 500px;
    margin: 0 auto;
    font-family: arial;
    line-height: 26px;
}
.faq-content {
    background-color: #f1f1f1;
    padding: 5px 20px;
    border-radius: 5px;
}
summary {
    background-color: #2196f3;
    color: #fff;
    padding: 16px;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    font-size: 20px;
    outline: none;
    margin: 20px 0px;
}
details > summary::-webkit-details-marker {
    display: none;
}
details[open] summary ~ * {
    animation: smooth 0.4s ease-in-out;
}
@keyframes smooth {
    0% {
        opacity: 0;
        margin-top: -10px;
    }
    100% {
        opacity: 1;
        margin-top: 0px;
    }
}
details > summary::after {
    position: absolute;
    content: "+";
    right: 25px;
}
details[open] > summary::after {
    position: absolute;
    content: "-";
    right: 25px;
}



/* service */

#service {
    width: 100%;
    padding: 40px 0;
}
.service-box{
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: auto;
}
.single-service{
    flex-basis: 48%;
    text-align: center;
    border-radius: 7px;
    margin-bottom: 20px;
    color: white;
    position: relative;
}
.single-service img{
    width: 100%;
    border-radius: 7px;
}
.overlay{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    border-radius: 7px;
    cursor: pointer;
    background: linear-gradient(rgba(0,0,0,0.5),#00962d);
    opacity: 0;
    transition: 1s;
}
.single-service:hover .overlay{
    opacity: 1;
}
.service-desc{
    width: 80%;
    position: absolute;
    bottom: 0;
    left: 50%;
    opacity: 0;
    transform: translateX(-50%);
    transition: 1s;
}
.hr{
    background: #fff;
    height: 2px;
    border: 0;
    margin: 15px auto;
    width: 60%;
}
.service-desc p{
    font-size: 24px;
}
.single-service:hover .service-desc{
    bottom: 40%;
    opacity: 1;
}


/* personal information */


#info{
    width: 100%;
    padding: 20px 0;
    background: #efefef;
}

.info-row{
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
}
.info-col{
    flex-basis: 28%;
    padding: 5px;  
    margin-bottom: 30px;
    border-radius: px;
    box-shadow: 0 10px 20px #00968814;
    cursor: pointer;
    transition: transform 0.5s;
}

.info-col p{
    font-size: 14px;
}

.person{
    display: flex;
    align-items: center;
    margin: 10px 0;  
}

.person img{
    width: 40px;
    margin-right: 20px;
    border-radius: 3px;
}
.person-info .fa{
    margin-left: 10px;
    color: #27c0ff;
    font-size: 20px;
}

.person-info small{
        color: #009688;
}
@media screen and (max-width: 770px){
    .info-col{
        flex-basis: 100%;
    }
}



/*  promotion moto */


.pro{
    width: 10px;
    padding: 10px;
}

.pro-row{
    width: 80%;
    height: 80px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    cursor: pointer;
    transition: transform 0.5s;
}
.pro-col{
    flex-basis: 28%;
    padding: 25px;  
    margin-bottom: 1px;
    border-radius: 2px;
    box-shadow: 0 10px 20px #515353;
    cursor: pointer;
    transition: transform 0.5s;
    background: white;
}

.pro-col p{
    font-size: 23px;
}
.pro-col h1{
    font-size: 30px;
}

.slide{
    display: flex;
    align-items: center;
    margin: 10px 0;  
}


.slide-info .fa{
    margin-left: 10px;
    font-size: 20px;
}

.slide-info small{
        color: #009688;
}
.pro-col:hover{
    transform: translateY(-15px);
}

@media screen and (max-width: 770px){
    .pro-col{
        flex-basis: 100%;
    }
}




.autoWritter {
    font-family: arial;
    display: table;
    margin: 10px auto;
    background: transparent;
}
.autoWrite-text {
    color:#27c0ff;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    letter-spacing: 2px;
    /*-- Call text and cursor animation --*/
    animation-fill-mode: backwards;
    animation: write 14s steps(40, end), cursor .7s step-end infinite;
    animation-iteration-count: 3;
    font-size: 32px;
    border-right: 4px solid;
}

/*-- Write text as Animated --*/
@keyframes write {
	from {
		width: 0%
	}
	to {
		width: 100%
	}
}

/*-- Animated blink cursor CSS--*/
@keyframes cursor{
	from, to {
		border-color: transparent;
	}
	100% {
		border-color: #ff9800;
	}
}



/* carousel images slide show */

.carousel-caption {
    background-color: rgb(0 0 0 / 46%);
    text-align: left;
    padding: 25px;
    border-radius: 10px;
}
ol.carousel-indicators {
    display: block;
    left: auto;
    bottom: 50px;
    right: 15px;
}
.carousel-indicators li {
    height: 5px;
    background-color: #ffeb3b;
    opacity: .6;
}
</style>