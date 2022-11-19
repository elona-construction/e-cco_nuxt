<template>
  <div id="simulations">
    <div
      class="is-loading-bar has-text-centered"
      v-bind:class="{ 'is-loading ': loadingStore.isLoading }"
    >
      <div class="lds-dual-ring is-vcentered is-fullheight"></div>
    </div>

    <div class="tile is-ancestor mt-6"></div>
    <div class="tile is-ancestor mt-6">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-white">
              <div class="card">
                <header class="card-header">
                  <p
                    class="card-header-title subtitle is-spaced has-text-weight-bold has-text-primary"
                  >
                    Situation actuelle
                  </p>
                </header>
                <div class="card-content">
                  <div class="columns is-vcentered">
                    <div class="column">
                      <p>Classe</p>
                      <h1 class="is-size-3 has-text-weight-bold">
                        {{ class_before }}
                      </h1>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-content">
                    <div class="columns">
                      <div class="column">
                        <p>Réduction des emissions de CO2</p>
                        <h1 class="is-size-4 has-text-weight-bold">
                          {{ reduction_co2 }} T/an
                        </h1>
                      </div>
                      <div class="column">
                        <p>Subventions disponibles aujourd'hui</p>
                        <h1 class="is-size-4 has-text-weight-bold">
                          {{ max_subv }} CHF
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-content">
                  <div class="columns">
                    <div class="column">
                      <p>Réduction de la consommation</p>
                      <h1 class="is-size-4 has-text-weight-bold">
                        {{ consumption_reduction }} kWh/an
                      </h1>
                    </div>
                    <div class="column">
                      <p>Economies annuelles</p>
                      <h1 class="is-size-4 has-text-weight-bold">
                        {{ saving_energy_cost }} CHF/an
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article class="tile is-child notification is-white">
              <div class="card">
                <header class="card-header">
                  <p
                    class="card-header-title subtitle is-spaced has-text-weight-bold has-text-primary"
                  >
                    Potentiel de rénovation
                  </p>
                </header>
                <div class="card-content">
                  <article class="tile is-child notification is-white">
                    <div class="tile is-ancestor">
                      <div class="tile is-vertical is-8">
                        <div class="tile">
                          <div class="tile is-parent is-vertical">
                            <article
                              class="tile is-child notification is-white"
                            >
                              <img
                                src="@/assets/images/image_maison.png"
                                alt="image de maison"
                              />
                            </article>
                            <article
                              class="tile is-child notification is-white"
                            >
                              <button
                                class="button is-primary"
                                @click="goToDevis"
                              >
                                Demander des devis
                              </button>
                            </article>
                          </div>
                        </div>
                      </div>
                      <div class="tile is-parent is-vertical">
                        <article class="tile is-child notification is-white">
                          <div class="field">
                            <label class="switch">
                              <p class="switchLegend py-2">Façades</p>
                              <input
                                type="checkbox"
                                name="switchFaçade"
                                v-model="store.checked.checkedFaçade"
                              />
                              <span class="slider round"></span>
                            </label>
                          </div>

                          <div class="field">
                            <label class="switch">
                              <p class="switchLegend py-2">Toitures</p>
                              <input
                                type="checkbox"
                                name="switchToiture"
                                v-model="store.checked.checkedToiture"
                              />
                              <span class="slider round"></span>
                            </label>
                          </div>

                          <div class="field">
                            <label class="switch"
                              ><p class="switchLegend py-2">Combles</p>
                              <input
                                type="checkbox"
                                name="switchComble"
                                v-model="store.checked.checkedComble"
                              />
                              <span class="slider round"></span>
                            </label>
                          </div>

                          <div class="field">
                            <label class="switch"
                              ><p class="switchLegend py-2">Chauffage</p>
                              <input
                                type="checkbox"
                                name="switchChauffage"
                                v-model="store.checked.checkedChauffage"
                              />
                              <span class="slider round"></span>
                            </label>
                          </div>

                          <div class="field">
                            <label class="switch"
                              ><p class="switchLegend py-2">
                                Panneaux solaires
                              </p>
                              <input
                                type="checkbox"
                                name="switchSolaire"
                                v-model="store.checked.checkedSolaire"
                              />
                              <span class="slider round"></span>
                            </label>
                          </div>
                        </article>
                        <article class="tile is-child notification is-white">
                          <p class="has-text-weight-semibold">
                            Coûts totaux estimés:
                          </p>
                          <h1
                            class="is-size-2 has-text-weight-bold has-text-grey-light"
                          >
                            {{ totalCost }} CHF
                          </h1>
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
      <!-- <div class="tile is-parent">
        <article class="tile is-child notification is-white">
          <div class="card">
            <header class="card-header">
              <p
                class="card-header-title subtitle is-spaced has-text-weight-bold has-text-primary"
              >
                Mon projet
              </p>
            </header>
            <div class="card-content">
              <p>Mes devis:</p>
              <h1 class="is-size-2 has-text-weight-bold has-text-grey-light">
                0
              </h1>
              <p class="is-size-5 has-text-weight-bold">
                Devis envoyés pour l'instant
              </p>

              <br />
              <p>Mes alertes:</p>
              <h1 class="is-size-2 has-text-weight-bold has-text-grey-light">
                0
              </h1>
              <p class="is-size-5 has-text-weight-bold">
                Alerte sur le prix du mazout
              </p>
            </div>
          </div>
        </article>
      </div> -->
    </div>

    <link
      rel="stylesheet"
      href="https://cdn.materialdesignicons.com/4.9.95/css/materialdesignicons.min.css"
    />
  </div>
</template>
<script setup>
const router = useRouter();
const config = useRuntimeConfig();

const store = useTestStore();
const loadingStore = useLoadingStore();

onMounted(() => {
  console.log("mounted!");
  // console.log('useLocalstorage',useLocalStorage('pinia/auth/login'))
  tellLocal();
  submitSimulation();
});

const errors = reactive({ ressource: [] });

const adresse = ref("");
const class_before = ref("");
const consumption_reduction = ref("");
const saving_energy_cost = ref("");
const reduction_co2 = ref("");
const max_subv = ref("");
const coût_isolation_toiture = ref(0);
const coût_isolation_facade = ref(0);
const coût_remplacement_fenêtres = ref(0);
const coût_remplacement_chauffage_pac = ref(0);
const coût_solaire_thermique = ref(0);
const duree_proftabilité = ref("");

const totalCost = computed(() => {
  let ceiling = 0;
  let walls = 0;
  let windows = 0;
  let heater = 0;
  let solar = 0;

  // let checked = this.$store.getters.getChecked
  // console.log("new checked",checked)

  if (store.checked.checkedFaçade === true) {
    walls = coût_isolation_facade.value;
  }

  if (store.checked.checkedToiture === true) {
    ceiling = coût_isolation_toiture.value;
  }

  if (store.checked.checkedComble === true) {
    windows = coût_remplacement_fenêtres.value;
  }

  if (store.checked.checkedChauffage === true) {
    heater = coût_remplacement_chauffage_pac.value;
  }

  if (store.checked.checkedSolaire === true) {
    solar = coût_solaire_thermique.value;
  }

  let total = ceiling + walls + windows + heater + solar;
  let totalFormat = total.toLocaleString("de-CH", {
    //style           : 'currency',
    //currency        : 'CHF',
    //currencyDisplay : 'symbol',
    useGrouping: true,
  });

  return totalFormat;
});

function tellLocal() {
  console.log("adresse in local storage", localStorage.getItem("adresse"));
}

function goToDevis() {
  router.push("/devis");
}

function submitSimulation() {
  errors.ressource = [];
  let adresseFunc = store.adresse;
  adresse.value = adresseFunc;
  console.log("here is the adresse: ", adresse.value);

  if (adresse === "") {
    errors.ressource.push("Adresse manquante");
  }
  if (!errors.ressource.length) {

    sendData();
  }
}
async function sendData() {
  console.log("you made it to the sendData");

  loadingStore.setIsLoading(true);

  let data = {
    adresse: adresse.value,
  };

  console.log("data to send: ", data);

  await $fetch("/api/v1/housesim/", {
    baseURL: config.API_BASE_URL,
    method: "POST",
    body: data,
  })
    .then((response) => {
      console.log("RESPONSE SERVER message: ", response);
      // for stats on top
      class_before.value = response[0].class_before;
      consumption_reduction.value = response[0].consumption_reduction;
      saving_energy_cost.value = response[0].saving_energy_cost;
      reduction_co2.value = response[0].reduction_co2;
      max_subv.value = response[0].max_subv;
      // consumption_today.value = response[0].consumption_today
      duree_proftabilité.value = response[0].duree_proftabilité;

      // for generating total cost
      coût_isolation_toiture.value = response[0].coût_isolation_toiture;
      coût_isolation_facade.value = response[0].coût_isolation_facade;
      coût_remplacement_fenêtres.value = response[0].coût_remplacement_fenêtres;
      coût_remplacement_chauffage_pac.value =
        response[0].coût_remplacement_chauffage_pac;
      coût_solaire_thermique.value = response[0].coût_solaire_thermique;
    })
    .catch((error) => {
      errors.ressource.push("Un problème est survenu. Veuillez réessayer");
      console.log(error);
    });
  loadingStore.setIsLoading(false);
  return;
}
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #1d492b;
}

input:focus + .slider {
  box-shadow: 0 0 1px #1d492b;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
.switchLegend {
  padding-left: 5rem;
}
</style>
