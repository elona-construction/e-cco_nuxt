import { defineStore, acceptHMRUpdate  } from 'pinia';
export const useLoadingStore = defineStore('LoadingStore', {
    state: () => ({

    isLoading:false,
      
    }),
    getters: {},
    actions: {
    setIsLoading(status){
      this.isLoading = status
    }
    },
  });

  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTestStore, import.meta.hot));
  }

