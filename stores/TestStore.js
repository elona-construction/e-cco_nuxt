import { defineStore, acceptHMRUpdate  } from 'pinia';
export const useTestStore = defineStore('TestStore', {
    state: () => ({
      
        isAuthenticated: false,
        token: '',
        results: '',
        isLoading:true,
        adresse:'',
        checked:null,
        checkedSolaire: {},
        count: 0,
        color:'blue',
      
    }),
    getters: {},
    actions: {
      setAdresse(adresse){
        this.adresse = adresse
        
      },
    },
  });

  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTestStore, import.meta.hot));
  }
