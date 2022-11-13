<template>
  <div id="wrapper">

    <Navbar />

    <div class="contenu">
      <slot />
    </div>
  
    <Footer />

  </div>  
</template>

<script>
    export default defineNuxtComponent({
    Created(){
    const store = useTestStore();

     const token = store.token

     if (token){
       axios.defaults.headers.common['Authorization'] = "Token " + token
     }else {
       axios.defaults.headers.common['Authorization'] = ""
     }
   },


    })
    </script>

<style lang="scss">
    $primary: #1d492b;
    $link: #f89209;
    $footer-background-color : #1d492b;
    $navbar-padding-horizontal:size-2;
    $navbar-item-color:#f89209;
    
    
    .contenu {
      display: flex;
      min-height: 100vh;
      flex-direction: column;
    }
    
    #app {
      flex: 1;
      display: flex;
      flex-direction: column;
    }
    
    
    .lds-dual-ring {
    
      display: inline-block;
      width: 80px;
      height: 80px;
      
    }
    .lds-dual-ring:after {
    
      content: " ";
      display: block;
      width: 64px;
      height: 64px;
      margin: 8px;
      border-radius: 50%;
      border: 6px solid #ccc;
      border-color: #ccc transparent #ccc transparent;
      animation: lds-dual-ring 1.2s linear infinite;
    }
    @keyframes lds-dual-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .is-loading-bar {
      height: 0;
      overflow:hidden;
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      &.is-loading {
        height: 100px;
        margin:7rem;
      }
    }
    
    @media only screen and (min-width: 768px) {
      .navbarpadding{
      padding-right: 3rem;
      padding-left: 3rem;
    }
    
    }
    
    
    // IMPORTANT ADDINGS TO AVOID HAVING THOSE WEIRD WHITE SPACES
    // html,body{
    //     overflow-x: hidden;
    // }
    
    .navbar-default { margin : 0 !important; }
    </style>