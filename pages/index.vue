<template>
    

<div class="home">
    <div class="hero is-primary is-fullheight pt-6 mt-6 has-background-primary-light">
        <div class="columns is-centered is-flex is-vcentered has-text-primary">
            <div class="column is-11 is-vcentered">
            <div class="tile is-ancestor pt-6 ">
                <div class="columns is-centered is-multiline ">
                    <div class="tile is-parent is-vertical is-3">

                    </div>
                    <div class="tile is-parent is-vertical is-10">
                        <div class="tile is-child pt-6 has-text-centered ">
                            <div class="content heropadding p-5">
                                <p class="title is-1 has-text-primary">
                                    Un impact positif depuis la maison,
                                    pour mes économies et pour la planète.
                                </p>
                    
                                <p class="text is-size-4">
                                    Libérez vous énergétiquement en investissement dans l'efficience énergétique de votre maison. 
                                </p>
                                <p>test store: {{ store.color}}</p>
                                <div class="container p-4">

                                </div>

                                <div class="columns is-centered p-5">
                                    <form @submit.prevent="submitAdresse" v-on:keyup.enter="submitAdresse" autocomplete="on" >
                                        <div class="field has-addons has-text-centered ">
                                            <p class="control">
                                                <input class="input is-large" type="text" placeholder="Mon adresse" v-model="adresse">
                                            </p>

                                            <div class="control">
                                                <a class="button is-link is-large" @click="submitAdresse">
                                                Lancez la simulation!
                                                </a>
                                            </div>
                                        </div>
                                        
                                    </form>
                                    <div class="notification is-danger" v-if="errorsAdress.ressource.length">
                                        <p v-for="error in errorsAdress.ressource" v-bind:key="error">  {{ error }} </p>
                                    </div>
                                </div>
                            
                        </div>

                    </div>
                </div>
                    <div class="tile is-parent is-vertical is-3">
                    </div>

                <div class="tile is-parent is-6">
                <div class="tile is-child pt-6">
                        <div class="container is-fluid heropadding">
                            <!-- <img src="@/assets/images/undraw_data_processing_yrrv.svg" alt class="p-0" /> -->
                        </div>
                    </div>
                </div>
        
            </div>
        </div>
        </div>
    </div> 
</div>

<section class="hero pb-5">
    <div class="columns is-centered">
        <div class="column is-11">
            <div class="hero-body has-text-centered">
                <p class="title is-2 has-text-primary has-text-centered">
                    Pourquoi estimer le potentiel de rénovation de ma maison?
                </p>
                <p class="text-muted mb-4">
                    Changement climatique, confort, dépendance économique, le bâti est au coeur d'enjeux de tailles ayant un effet direct sur la vie du propriétaire.
                </p> 
            </div>

        
            <div class="tile is-ancestor p-5">
                <div class="columns is-centered is-multiline ">

                    <div class="tile is-parent is-3">
                        <article class="tile is-child has-text-centered">
                            <figure class="image is-128x128 is-inline-block">
                                <img class="is-rounded" src="@/assets/images/Savings.png">
                            </figure>
                
                            <p class="title is-4 nobreak">Emissions de CO2</p>
                            <div class="content">
                                <p>
                                    Combien de CO2 mon bien rejette-t- il par ans aujourd'hui?<br> <br>De combien pourrais-je réduire mes émissions après rénovation?
                                </p>
                            </div>
                        </article>
            </div>
            <div class="tile is-parent is-3">
                <article class="tile is-child has-text-centered">
                    <figure class="image is-128x128 is-inline-block">
                        <img class="is-rounded" src="@/assets/images/Savings.png">
                    </figure>
                
                    <p class="title is-4 nobreak">Coûts & Aides</p>
                    <div class="content">
                    <p>
                        Quels sont les coûts à prendre en compte pour une rénovation partielle ou totale?<br> <br>De quelles déductions ou aides puis-je bénéficier?
                    </p>
                    </div>
                </article>
            </div>
            <div class="tile is-parent is-3">
                <article class="tile is-child has-text-centered">
                <figure class="image is-128x128 is-inline-block">
                    <img class="is-rounded" src="@/assets/images/Rentability.png">
                    </figure>
            
                <p class="title is-4 nobreak">Rentabilité</p>
                <div class="content">
                    <p>
                    De combien puis-je réduire mes factures de charge avec une rénovation? <br> <br>Combien d'années faut-ils pour obtenir un retour sur investisse- ment?

                    </p>
                </div>
                </article>
            </div>

            
            </div>   
        </div>
        </div>
    </div>

</section>





    <section class="hero is-halfheight has-background-primary-light py-5 my-5">
        <div class="columns is-centered">
        <div class="column is-11 "> 
            <div class="container mb-6">
            </div>
            <div class="tile is-ancestor columns is-vcentered">
                <div class="tile is-4 is-vertical is-half ml-6">
                    <p class="title is-6 has-text-primary">
                        SIMULATEUR DE CLASSE
                    </p>
                    <p class="title is-4">
                        Pourquoi estimer la classe
                        de sa maison avant de faire des travaux?
                    </p>
                    <div class="content">
                        <div class="text-muted font-size-15 mb-4">
                            Des subventions sont disponibles en fonction de la classe pour:
                            <ul>
                                <li>Le remplacement d'un chauffage</li>
                                <li>La rénovation d'une facade ou d'une toiture</li>
                                <li>L'installation de panneaux solaires</li>
                                <li>D'autres situations spécifiques à chaque communes</li>
                            </ul>
                        </div>
                        <p class="text-muted font-size-15 mb-4">
                            Estimer la classe de votre maison vous permettra de mieux planifier vos travaux et vos remplacements afin de minimiser la facture finale.
                        </p>


                    </div>

                    
                    <div class="form py-5">
                        <form @submit.prevent="submitAdresse" v-on:keyup.enter="submitAdresse" autocomplete="on" >
                            <div class="field has-addons">
                                <p class="control">
                                    <input class="input" type="text" placeholder="Mon adresse" v-model="adresse">
                                </p>

                                <div class="control">
                                    <a class="button is-primary" @click="submitAdresse">
                                    Lancez la simulation!
                                    </a>
                                </div>
                            </div>
                            
                        </form>
                        <div class="notification is-danger" v-if="errorsAdress.ressource.length">
                            <p v-for="error in errorsAdress.ressource" v-bind:key="error">  {{ error }} </p>
                        </div>
                    </div>
                </div>
                
                <div class="tile is-8 p-6">
                    <div class="container p-6">
                        <div class="container p-6">
                            <img src="@/assets/images/house_etiquette.png" alt class="p-0 is-inline-block" />
                        </div>
                    </div>
                    </div>
            </div>
        </div>
        </div>
    </section>

        
    <section class="hero is-halfheight is-white py-5 my-5">
        <div class="columns is-centered">
            <div class="column is-11 "> 
                <div class="container mb-6">
                </div>
                <div class="tile is-ancestor columns ">
                <div class="tile is-6 p-6">
                    <div class="container p-6">
                        <div class="container p-6">
                            <img src="@/assets/images/undraw_choosing_house.svg" alt class="p-0 is-inline-block" />
                        </div>
                    </div>
                    </div>
                    <div class="tile is-6 is-vertical is-half ml-6 p-6">
                        <p class="title is-6 has-text-primary">
                            COUTS, DEMANDE DE DEVIS, SUIVI
                        </p>
                        <p class="title is-4">
                            Pourquoi estimer la classe
                            de sa maison avant de faire des travaux?
                        </p>
                        <div class="content">
                            <div class="text-muted font-size-15 mb-4">
                            Si vous êtes acheteur(se) ou vendeur(se) d'une maison, alors connaitre la classe des maisons qui vous intéressent vous permettra:
                            <ul>
                                <li>D'anticiper la valeur</li>
                                <li>D'y ajouter une estimation des charges futures</li>
                                <li>De comprendre si le bien correspond à vos préférences</li>
                            </ul>
                        </div>



                        </div>

                        
                        <div class="form py-5">
                                <form @submit.prevent="submitAdresse" v-on:keyup.enter="submitAdresse" autocomplete="on" >
                                    <div class="field has-addons">
                                        <p class="control">
                                            <input class="input" type="text" placeholder="Mon adresse" v-model="adresse">
                                        </p>

                                        <p class="control">
                                            <a class="button is-primary" @click="submitAdresse">
                                            Lancez la simulation!
                                            </a>
                                        </p>
                                    </div>
                                    
                                </form>

                                <div class="notification is-danger" v-if="errorsAdress.ressource.length">
                                    <p v-for="error in errorsAdress.ressource" v-bind:key="error">  {{ error }} </p>
                                </div>                     
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        </section>    

    <section class="section hero is-white" :class=" { 'is-halfheight': messageOK }">
    <div class="columns is-centered">
        <div class="column is-11">


        <div class="columns is-centered">
        <div class="column is-6 p-2">

            <div v-if="messageOK" class="container">
                <div class="content pt-6">
                    <p class="title has-text-black has-text-centered"> Nous avons bien reçu votre message!</p>
                </div>
            </div>
            <div v-else>

            <div class="container p-2">
                <div class="card p-5 has-background-primary-light">
                                    <div class="hero-body has-text-centered">
                <p class="title has-text-black">
                    Contactez-nous
                </p>
                <p class="container">
                    Nous ne sommes qu'au début de l'aventure. Soyez-les premiers à prendre de l'avance & influencez le développement de nos futurs outils.
                </p>
                </div>
                <div class='container is-centered'>
                
                                <div class="field-body">
                                <div class="field">
                                    <label class="label">Nom <span class="has-text-danger has-text-weight-normal">*</span></label>

                                    <div class="control is-expanded">
                                    <input class="input" type="name" placeholder="Favre" name="nom" v-model="nom" >
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span>
                                </div>
                                </div>
                                <div class="field">
                                    <label class="label"> Prénom <span class="has-text-danger has-text-weight-normal">*</span></label>

                                    <p class="control is-expanded">
                                    <input class="input" type="name" placeholder="Elona" name="prenom" v-model="prenom" >

                                    </p>
                                </div>
                                </div>

                                <div class="field-body">
                                    <div class="field">
                                    <label class="label">Email <span class="has-text-danger has-text-weight-normal">*</span></label>
    
                                    <p class="control is-expanded has-icons-left">
                                        <input class="input" type="email" placeholder="elona@elona-construction.ch" name="email" v-model="email" >
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-envelope"></i>
                                    </span>
                                        <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                        </span>
                                    </p>
                                    </div>

                                </div> 
                            <div class="field-body">
                                <div class="field">
                                    <label class="label">Décrivez en quelques mots vos besoins <span class="has-text-danger has-text-weight-normal">*</span></label>
                                    <div class="control">
                                        <textarea class="textarea" placeholder="Voici ma requête: ..." maxlength="910" v-model="message" ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="notification is-danger mt-4" v-if="errorsForm.ressource.length">
                              <p v-for="error in errorsForm.ressource" v-bind:key="error">{{ error }}</p>
                          </div>


                <div class="field is-horizontal is-align-content-start ">
                    <div class="field-body">
                    <div class="field">
                        <div class="control pt-2">
                        <button class="button is-primary" @click="submitMessage">
                            Send message
                        </button>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                </div>

            </div>
            </div>
        </div>

        </div>

    </div>
    </div> 
</section> 
</div>


</template>

<script setup>

const adresse = ref('')
const nom = ref('')
const prenom= ref('')
const email = ref('')
const message = ref('')
const messageOK = ref(false)

const errorsForm=reactive({ressource:[
]
})
const errorsAdress = reactive({ressource:[
]
})

const store = useTestStore()



function submitAdresse(){
    errorsAdress.ressource = []

    if (adresse.value === ''){
        errorsAdress.ressource.push('Veuillez saisir une adresse!')
        console.log("this is the errorsAdress array:", errorsAdress)
    }
    
    if (!errorsAdress.ressource.length){
        store.setAdresse(adresse.value)
        localStorage.setItem("adresse", adresse.value)

    // this.$store.commit('setAdresse', this.adresse)
    // localStorage.setItem("adresse", this.adresse)
    // this.$router.push('/simulations')
    console.log("adresse Ok Louise")
    }
  }

function submitMessage(){
        errorsForm.ressource = []
    if (nom.value === '') {
        errorsForm.ressource.push('Veuillez remplir le champ "Nom"')
        // console.log("shit nom not working", nom.value)
        console.log(errorsForm)
    }
    if (prenom.value === '') {
        errorsForm.ressource.push('Veuillez remplir le champ "Prénom"')
    }
    if (email.value === '') {
        errorsForm.ressource.push('Veuillez remplir le champ "Email"')
    }
    if (message.value === '') {
        errorsForm.ressource.push('Veuillez rédiger un message')
    }
    if (message.value.length > 900) {
        errorsForm.ressource.push('Le champ "besoins" est trop long')
    }

    if (!errorsForm.ressource.length){
        sendMessage()
        console.log('form working')
    }
  }
async function sendMessage(){
    // this.$store.commit('setIsLoading', true)

    const data = {
      'nom':nom.value,
      'prenom':prenom.value,
      'email':email.value,
      'message':message.value,
        }
    console.log('this is the message to be send: ',data)

    //to put in await in working function
        messageOK.value = true


//     await axios
//     .post('/api/v1/contact/', data)
//     .then(response => {

//     console.log("RESPONSE SERVER message: ",response.data)
//     this.messageOK = true


//   })
//   .catch(error => {
//       this.errorsForm.push('Un problème est survenu. Veuillez réessayer')
//       console.log(error)
//   })
//   this.$store.commit('setIsLoading', false)
// },
}


    </script>