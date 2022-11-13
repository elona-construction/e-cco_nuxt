<template>
    <div>
    <nav>
        <div class="has-navbar-fixed-top">
          <nav class="navbar is-primary is-fixed-top">
            <div class="navbar-brand navbarpadding">
        
              
                <NuxtLink to="/" class="navbar-item">Accueil</NuxtLink>
              
        
              <a class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="toggle">
                <span aria-hidden="true"></span>
                <!-- <span aria-hidden="true"></span>
                <span aria-hidden="true"></span> -->
              </a>
            </div>
            <div class="navbar-menu" id="navbar-menu" v-bind:class="{'is-active':showMobileMenu}">
              <div class="navbar-start">  
        
              </div>
              <div class="navbar-end navbarpadding ">
                
                
                <div class="navbar-item">
                <div class="buttons">
                  <!-- <template v-if="store.state.isAuthenticated">
                    <router-link to="/tableau-de-bord" class="button is-light"> Tableau de bord </router-link>
                  </template> 
                  <template v-else>
                  <router-link to="/log-in" class="button is-light" >Log in</router-link> 
                  </template>   -->
      
                </div>
                </div>
              </div>
            </div>
          </nav>
        
      </div>
    </nav>
</div>

</template>


<script setup>
const showMobileMenu = ref(false)
const toggle = () =>{
    showMobileMenu.value = !showMobileMenu.value
}
const toggleClose = () =>{
    showMobileMenu.value = false
}
</script>