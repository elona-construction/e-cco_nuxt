<template>
  <div id="formulaire-devis">
    <div class="hero is-fullheight has-background-primary-light pt-6">
      <div class="container p-4 pt-6">
        <div class="tile is-ancestor">
          <div class="tile is-6">
            <div class="container p-6">
              <div class="tile is-child">
                <div class="title is-primary">Le service E-cco</div>
                <div class="subtitle">Accélerer la mise en contact</div>
                <div class="text">
                  Sur la base de nos algorithmes et du feedback de tous les
                  utilisateurs de cette plateforme, nous avons trouvé 3
                  entreprises qui seront à même de vous fournir l'information
                  nécecessaire sur leurs prix, leurs argument compétitifs, leurs
                  expertise.
                </div>
                <div class="container p-6">
                  <div class="container p-6">
                    <!-- <div class="container p-6"> -->
                    <figure class="image">
                      <img
                        class="is-128x128 is-inline-block"
                        src="@/assets/images/undraw_people_search_re_5rre.svg"
                      />
                    </figure>
                    <!-- </div> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tile">
            <div class="container p-5">
              <div class="tile is-child box">
                <div class="title">Recevez vos devis gratuitement</div>
                <div class="container">
                  <div class="subtitle has-text-grey">
                    Obtenez les informations en direct du marché.
                    <br />
                  </div>
                  <p>
                    <em>
                      Cette demande de devis concerne le bâtiment à l'adresse: </em
                    ><strong> {{ store.adresse }} </strong>
                  </p>
                  <br />
                  <br />
                  <div class="field">
                    <div class="field-body">
                      <div class="field">
                        <label class="label"
                          >Nom
                          <span class="has-text-danger has-text-weight-normal"
                            >*</span
                          ></label
                        >

                        <p class="control is-expanded">
                          <input
                            class="input"
                            type="name"
                            placeholder="Favre"
                            v-model="nom"
                            name="nom"
                          />
                          <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                          </span>
                        </p>
                      </div>
                      <div class="field">
                        <label class="label">
                          Prénom
                          <span class="has-text-danger has-text-weight-normal"
                            >*</span
                          ></label
                        >

                        <p
                          class="control is-expanded has-icons-left has-icons-right"
                        >
                          <input
                            class="input"
                            type="name"
                            placeholder="Elona"
                            v-model="prenom"
                            name="prenom"
                          />
                          <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                          </span>
                          <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                          </span>
                        </p>
                      </div>
                    </div>

                    <div class="field-body">
                      <div class="field">
                        <label class="label"
                          >Email
                          <span class="has-text-danger has-text-weight-normal"
                            >*</span
                          ></label
                        >

                        <p class="control is-expanded">
                          <input
                            class="input"
                            type="email"
                            placeholder="elona@elona-construction.ch"
                            v-model="email"
                            name="email"
                          />
                          <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                          </span>
                        </p>
                      </div>
                      <div class="field">
                        <label class="label"
                          >Numéro de téléphone
                          <span class="has-text-danger has-text-weight-normal"
                            >*</span
                          ></label
                        >

                        <p
                          class="control is-expanded has-icons-left has-icons-right"
                        >
                          <input
                            class="input"
                            type="tel"
                            placeholder="+41 76 368 18 38"
                            v-model="telephone"
                            name="téléphone"
                          />
                          <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                          </span>
                          <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                          </span>
                        </p>
                      </div>
                    </div>

                    <div class="field-body">
                      <div class="field">
                        <label class="label"
                          >Adresse de contact
                          <span class="has-text-danger has-text-weight-normal"
                            >*</span
                          ></label
                        >

                        <div class="control is-expanded">
                          <input
                            class="input"
                            type="name"
                            placeholder="Rue du Lac 6 1200 Genève"
                            v-model="adresseContact"
                            :disabled="identique === true"
                            name="Adress"
                          />

                          <div class="control pt-2 pb-4">
                            <label class="checkbox">
                              <input
                                type="checkbox"
                                v-model="identique"
                                name="AdresseIdentique"
                              />
                              Adresse de contact identique à l'adresse du
                              bâtiment
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="field-body">
                      <div class="field">
                        <label class="label"
                          >Décrivez vos besoins particuliers.</label
                        >

                        <div class="control">
                          <textarea
                            class="textarea"
                            placeholder="Besoins particuliers..."
                            v-model="besoins"
                            maxlength="900"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div
                      class="notification is-danger mt-4"
                      v-if="errors.ressource.length"
                    >
                      <p v-for="error in errors.ressource" v-bind:key="error">
                        {{ error }}
                      </p>
                    </div>
                  </div>
                  <div class="tile is-horizontal has-background-link-light">
                    <div class="column is-6">
                      <div class="field is-narrow">
                        <div class="control">
                          <label class="checkbox">
                            <input
                              type="checkbox"
                              v-model="facade"
                              name="façade"
                            />
                            Rénovation de la facade
                          </label>
                        </div>
                      </div>
                      <div class="field is-narrow">
                        <div class="control">
                          <label class="checkbox">
                            <input
                              type="checkbox"
                              v-model="toiture"
                              name="toiture"
                            />
                            Rénovation de la toiture
                          </label>
                        </div>
                      </div>

                      <div class="field is-narrow">
                        <div class="control">
                          <label class="checkbox">
                            <input
                              type="checkbox"
                              v-model="fenetre"
                              name="fenêtre"
                            />
                            Remplacement des fenêtres
                          </label>
                        </div>
                      </div>
                    </div>

                    <div class="column is-6">
                      <div class="field is-narrow">
                        <div class="control">
                          <label class="checkbox">
                            <input
                              type="checkbox"
                              v-model="solaire"
                              name="solaire"
                            />
                            Installation panneaux solaires
                          </label>
                        </div>
                      </div>

                      <div class="field is-narrow">
                        <div class="control">
                          <label class="checkbox">
                            <input
                              type="checkbox"
                              v-model="chauffage"
                              name="chauffage"
                            />
                            Remplacement du chauffage
                          </label>
                        </div>
                      </div>
                      <div class="field is-narrow">
                        <div class="control">
                          <label class="checkbox">
                            <input
                              type="checkbox"
                              v-model="expertise"
                              name="expertise"
                            />
                            Expertise énergétique
                          </label>
                        </div>
                      </div>
                    </div>
                    <!-- </div> -->
                  </div>
                  <div
                    class="container p-4 is-horizontal has-background-link-light"
                  >
                    <label class="label">Je souhaite recevoir...</label>
                    <div class="field">
                      <div
                        class="select is-fullwidth has-background-primary-light"
                      >
                        <select v-model="selection">
                          <option>
                            Recevoir 3 appels d'offres par intervention via
                            email
                          </option>
                          <option>
                            Recevoir un seul appel d'offre par téléphone
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="field is-horizontal">
                    <div class="field-label">
                      <!-- Left empty for spacing -->
                    </div>
                    <div class="field-body">
                      <div class="field p-4">
                        <div class="control">
                          <button class="button is-primary" @click="submitForm">
                            Lancer mes demandes de devis
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
</template>

<script setup>
const router = useRouter()
const store = useTestStore();
const config = useRuntimeConfig()

const nom = ref("");
const prenom = ref ("");
const email = ref("");
const telephone = ref("");
const adresseContact = ref("");
const identique = ref(false);

const besoins = ref("");
const facade = ref(false);
const toiture = ref(false);
const fenetre = ref(false);
const solaire = ref(false);
const chauffage = ref(false);
const expertise = ref(false);
const selection = ref("Recevoir 3 appels d'offres par intervention via email");

const errors = reactive({ ressource: [] });
const orders = reactive({ ressource: [] });



watch(identique, (newValue, oldValue) => {
  identiqueWatch()
});

function identiqueWatch() {
  if (identique.value === true) {
    adresseContact.value = store.adresse;
  }
  if (identique.value === false) {
    adresseContact.value = "";
  }
}

function submitForm() {
  errors.ressource = [];
  if (nom.value === "") {
    errors.ressource.push('Veuillez remplir le champ "Nom"');
  }
  if (prenom.value === "") {
    errors.ressource.push('Veuillez remplir le champ "Prénom"');
  }
  if (email.value === "") {
    errors.ressource.push('Veuillez remplir le champ "Email"');
  }
  if (telephone.value === "") {
    errors.ressource.push('Veuillez remplir le champ "Numéro de téléphone"');
  }
  if (adresseContact.value === "") {
    errors.ressource.push('Veuillez remplir le champ "Adresse de contact"');
  }
  if (besoins.value.length > 900) {
    errors.ressource.push('Le champ "besoins" est trop long');
  }

  if (!errors.ressource.length) {
    sendData();
  }
}

async function sendData() {
  // this.$store.commit("setIsLoading", true);

  const data = {
    nom: nom.value,
    prenom: prenom.value,
    email: email.value,
    telephone: telephone.value,
    adresseBatiment: store.adresse,
    adresseContact: adresseContact.value,
    identique: identique.value,

    besoins: besoins.value,
    facade: facade.value,
    toiture: toiture.value,
    fenetre: fenetre.value,
    solaire: solaire.value,
    chauffage: chauffage.value,
    expertise: expertise.value,
    selection: selection.value,
  };
  console.log("this is the data to be send: ", data);

  await $fetch("api/v1/devis/", {
    baseURL: config.API_BASE_URL,
    method: "POST",
    body: data,
  })
    .then((response) => {
      console.log("RESPONSE SERVER: ", response);
      router.push('/demande-ok')
    })
    .catch((error) => {
      errors.ressource.push("Something went wrong. Please try again");
      console.log(error);
    });
  //   this.$store.commit('setIsLoading', false)
}
</script>
