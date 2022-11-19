import { defineStore, acceptHMRUpdate  } from 'pinia';
export const useTestStore = defineStore('TestStore', {
    state: () => ({
      
        isAuthenticated: false,
        token: '',
        results: '',
        adresse:'',
        checked:{
          checkedFaçade:true,
          checkedToiture:true,
          checkedComble:true,
          checkedChauffage:true,
          checkedSolaire:true
        },
      
    }),
    getters: {},
    actions: {
      setAdresse(adresse){
        this.adresse = adresse       
      },
      initializeAdresse(adresse){
        if (localStorage.getItem('adresse')){
        this.adresse = localStorage.getItem('adresse')
        }else{this.adresse = ''}
      },
    },
  });

  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTestStore, import.meta.hot));
  }
