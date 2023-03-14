<template>
<div>
     
    <div class="info-row">
        
        <div class="info-col">
            <div class="person">
                 <!-- <img src="../assets/icon.jpg"> -->
                <div class="person-info">
                    <h1>የተማሪ ቅፅ መሙያ</h1>
                    <small>እባኮዎን ቅጹን በትክክል ይምሉ!</small>
                     <div class="register-box">
        <div class="registers">
            <form >
                <div>
                    <label for="firstname">ስም</label>
                    <input type="text" id="name" v-model="formvalues.firstname">
                </div>
                <div>
                    <label for="lastname">የአባት ስም   </label>
                    <input type="text" id="name" v-model="formvalues.lastname">
                </div>
                <div>
                    <label for="baptismname">የክርስትና ስም  </label>
                    <input type="text" id="name" v-model="formvalues.baptismname">
                </div>
                <div>
                    <label for="phonenumber">ስልክ ቁጥር</label>
                    <input type="text" id="name" v-model="formvalues.phonenumber">
                </div>
                <div>
                    <label for="fathername">የንስሀ አባት ስም</label>
                    <input type="text" id="name" v-model="formvalues.fathername">
                </div>
                <div>
                    <label for="familyphone">የቤተሰብ ስልክ ቁጥር</label>
                    <input type="text" id="name" v-model="formvalues.familyphone">
                </div>
                <div>
                <label for="country">ትምህርት ቤት</label>
                <select id="country">
                        <option value="">የትምህርት ቤት ስም ምረጥ</option>
                        <option value="comboni">ኮምቦኒ  </option>
                        <option value="sos">ኤስኦኤስ    </option>
                        <option value="evan">ኢቫን</option>
                        <option value="tabor">ታቦር</option>
                        <option value="bnb">ቢነቢ</option>
                        <option value="union">ዩኒየን</option>
                        <option value="eps"> ኢጲኤስ      </option>
                        <option value="mount olive">ማውንት ኦሊቭ</option>
                        <option value="hayoli">ሃዮሌ </option>
                        <option value="none">ምርጫ ውስጥ የለም </option>

                 </select>
                 
                </div>
                <div>
                <label for="program">መርሐ ግብር</label>
                    <select id="program">
                        <option value="">መርሐ ግብር</option>
                        <option value="monday">ሰኞ</option>
                        <option value="friday">አርብ</option>
                    </select>
                </div>
                <div>
                <label for="kebele">ቀበሌ</label>
                    <select id="kebele">
                        <option value="">ቀበሌ</option>
                        <option value="dumi">ዱሜ</option>
                        <option value="milinium">ሚሊኒየም</option>
                        <option value="menhariya">መንሃሪያ</option>
                        <option value="hayke">ሀይቅ</option>
                        <option value="boli">ቀበሌ</option>
                    </select>
                </div>
                <div>
                    <label for="profile">አስተያየት ካሎት</label>
                    <textarea id="profile" v-model="formvalues.profilesummary" />
                </div>
            </form>
        </div>
         <div class="registers-img">
          <img src="../assets/logoo.png">
        </div>
    </div>
                </div>
            </div>
           
            <p>የሐዋሳ ደብረ ምህረት ቅ/ገብርኤል ገዳም መ/ድ/ሰ/ት/ቤት  </p>
        </div>
    </div>
   
</div>
   
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


</template>

<script>
export default {
    name: 'Register',
    data() {
        return{
            formvalues: {
                firstname: '',
                lastname: '',
                profilesummary: '',
                country: '',
                fathername: '',
                phonenumber: '',
                familyphone: '',
                baptismname: '',
                kebele: '',
                program: ''
            }
        }   
    },
    methods: {
    },
}
</script>

<style scoped>
*{
    top: 10px;
}
#register {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
label{
    display: flex;
    margin-bottom: 5px;
    padding: 6px;
}
input + label{
    display: inline-flex;
    margin-right: 20px;
}
input[type='text'],
textarea,
select{
    display: block;
    width: 400px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.428;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.register-box{
    width: 60%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
}
.registers{
    flex-basis: 50%;
}
.registers-img{
    flex-basis: 30%;
    margin: auto;

}
.registers-img img{
    width: 80%;
}
.info{
    width: 100%;
    padding: 70px ;
}

.info-row{
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
}

.info-col{
    flex-basis: 50%;
    padding: 5px;  
    margin-bottom: 30px;
    border-radius: 1px;
    box-shadow: 0 10px 20px #00968814;
    cursor: pointer;
    transition: transform 0.5s;
}
.info-col p{
    font-size: 16px;
    color: #4caf50;
}

.person{
    display: flex;
    align-items: center;
    margin: 50px 0;  
}

/* .person img{
    width: 40px;
    margin-right: 20px;
    border-radius: 3px;
} */
.person-info .fa{
    margin-left: 10px;
    color: #27c0ff;
    font-size: 20px;
}

.person-info small{
        color: #4caf50;
        font-size: 18px;
}
@media screen and (max-width: 770px){
    .info-col{
        flex-basis: 100%;
    }
}
</style>