<template>

    <div id="simulations">
    
    <div class="tile is-ancestor mt-6">
    
    </div>
      <div class="tile is-ancestor mt-6 ">
    
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              
              <article class="tile is-child notification is-white">
                
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title subtitle is-spaced has-text-weight-bold has-text-primary">
                      Situation actuelle
                    </p>
                  </header>
                  <div class="card-content">
                    <div class="columns is-vcentered">
                      <div class="column">
                        <p>Classe</p>
                        <h1 class="is-size-3  has-text-weight-bold">{{ class_before }}</h1>
                      </div>
                    </div>
                  </div>
                <div class="card">
                  <div class="card-content">
                    <div class="columns">
                        <div class="column">
                        <p>Réduction des emissions de CO2</p>
                        <h1 class="is-size-4  has-text-weight-bold">{{ reduction_co2 }} T/an </h1>
                      </div>
                   <div class="column">
                        <p>Subventions disponibles aujourd'hui</p>
                        <h1 class="is-size-4  has-text-weight-bold">{{ max_subv }} CHF </h1>
                      </div>
                  </div>
                  </div>
                </div>
                </div>
    
                  <div class="card">
                    <!-- <header class="card-header">
                      <p class="card-header-title subtitle is-spaced has-text-weight-bold has-text-primary">
                        Potentiel d'amélioration
                      </p>
                    </header> -->
                    <div class="card-content">
                      <div class="columns">
                        <div class="column">
                          <p>Réduction de la consommation</p>
                          <h1 class="is-size-4  has-text-weight-bold">{{ consumption_reduction }} kWh/an</h1>
                        </div>
                          <div class="column">
                          <p>Economies annuelles</p>
                          <h1 class="is-size-4 has-text-weight-bold">{{ saving_energy_cost }} CHF/an</h1>
    
                          <!-- <h1 class="is-size-3  has-text-weight-bold">{{ saving_energy_cost }}</h1>
                        </div>
                          <div class="column">
                          <p>Durée pour profitabilité</p>
                          <h1 class="is-size-3  has-text-weight-bold">{{ duree_proftabilité }}</h1>
                        </div>         
          -->
                          </div>
        
    
                    </div>
                    </div>
                </div>
    
              </article>
              <article class="tile is-child notification is-white">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title subtitle is-spaced has-text-weight-bold has-text-primary">
                      Potentiel de rénovation
                    </p>
                  </header>
                  <div class="card-content">
                  <article class="tile is-child notification is-white">
                    <div class="tile is-ancestor">
                      <div class="tile is-vertical is-8">
                        <div class="tile">
                          <div class="tile is-parent is-vertical">
                            <article class="tile is-child notification is-white">
                              <img src="@/assets/images/image_maison.png" alt="image de maison">
                            </article>
                            <article class="tile is-child notification is-white">
                              <button class="button is-primary" @click="goToDevis">  Demander des devis</button>
                            </article>
                          </div>
                        </div>
                      </div>
                      <div class="tile is-parent is-vertical">
                        <article class="tile is-child notification is-white">
                          <div class="field ">
                            <label class="switch"> <p class="switchLegend py-2">Façades</p> 
                            <input type="checkbox" name="switchFaçade"  v-model="checkedFaçade" > 
                            <span class="slider round"></span> 
                            </label>
                          </div>
                          
    
                          <div class="field">
                            <label class="switch"> <p class="switchLegend py-2">Toitures</p>
                            <input type="checkbox" name="switchToiture" v-model="checkedToiture">
                            <span class="slider round"></span>
                            </label>
                          </div>
                          
                          <div class="field">
                            <label class="switch"><p class="switchLegend py-2">Combles</p>
                            <input type="checkbox" name="switchComble" v-model="checkedComble">
                            <span class="slider round"></span>
                            </label>
                          </div>
                          
                          <div class="field">
                            <label class="switch"><p class="switchLegend py-2">Chauffage</p>
                            <input type="checkbox" name="switchChauffage"  v-model="checkedChauffage">
                            <span class="slider round"></span>
                            </label>
                          </div>
                          
                          <div class="field">
                            <label class="switch"><p class="switchLegend py-2">Panneaux solaires</p>
                            <input type="checkbox" name="switchSolaire" v-model="checkedSolaire">
                            <span class="slider round"></span>
                            </label>
                          </div>
                          
                        </article>
                        <article class="tile is-child notification is-white">
                          <p class="has-text-weight-semibold">Coûts totaux estimés:</p>
                          <h1 class="is-size-2  has-text-weight-bold has-text-grey-light">{{ totalCost }} CHF</h1>
    
    
                        </article>
                      </div>
                    </div>
                  </article>
                </div>
                </div>
    
              </article>
            </div>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-white">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title subtitle is-spaced has-text-weight-bold has-text-primary">
                  Mon projet
                </p>
              </header>
              <div class="card-content">
                <p>Mes devis:</p>
                <h1 class="is-size-2  has-text-weight-bold has-text-grey-light">0</h1>
                <p class="is-size-5  has-text-weight-bold">Devis envoyés pour l'instant</p>
              
                <br>
                <p>Mes alertes:</p>
                <h1 class="is-size-2  has-text-weight-bold has-text-grey-light">0</h1>
                <p class="is-size-5  has-text-weight-bold">Alerte sur le prix du mazout</p>
              
              </div>
            </div>
          </article>
        </div>
      </div>
    
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/4.9.95/css/materialdesignicons.min.css">
    
    </div>
    </template>
    <script setup>
const class_before= ref(0)
const consumption_reduction= ref(0)
const saving_energy_cost= ref(0)
const reduction_co2= ref(0)
const max_subv= ref(0)
const coût_isolation_toiture= ref(0)
const coût_isolation_facade= ref(0)
const coût_remplacement_fenêtres= ref(0)
const coût_remplacement_chauffage_pac= ref(0)
const coût_solaire_thermique= ref(0)
const duree_proftabilité= ref(0)

</script>
