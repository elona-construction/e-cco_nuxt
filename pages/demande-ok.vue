<template>
  <div class="DemandeRecue">
    <div class="container p-6">
      <div class="container p-6">
        <div class="tile is-ancestor columns is-vcentered">
          <div class="tile is-6">
            <div class="container">
              <div class="title has-text-primary">
                Nous avons bien reçu votre demande!
              </div>
              <p>
                Vous avez fait un premier pas vers un investissement pour des
                économies sur le long terme et pour préserver l'environnement
                des générations futures.
                <br /><br />
                C'est un travail constant, et cette étape n'est qu'une partie du
                voyage. L'autre partie, c'est de toujours rester curieux, de
                continuer d'apprendre et de s'adapter quoi qu'il arrive.
                <br />
                <br />
                C'est pour cela que nous vous présentons quelques lectures qui
                vous permettront d'en apprendre plus, pas à pas, jour après
                jour.
                <br /><br />
              </p>
              <div class="container p-4"></div>
              <div class="container">
                <button class="button is-dark" @click="backToSimulations">
                  Revenir vers ma simulation
                </button>
              </div>
            </div>
          </div>
          <div class="tile is-2"></div>
          <div class="tile is-4">
            <div class="container p-3s is-centered">
              <img
                class="is-rounded"
                src="@/assets/images/moving_forward.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const router = useRouter();

function backToSimulations() {
  router.push("/simulations");
}
</script>
