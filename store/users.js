export const state = () => ({
  clients: [],
  age: 22
});

export const getters = {
  clients: state => state.clients,
  age: state => state.age
};

export const actions = {
  async addClient({ commit }) {
    const db = this.$fire.firestore;
    let clientList = [];
    await db
      .collection("clients")
      .orderBy("timestamp")
      .onSnapshot(querySnapshot => {
     
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
      
          clientList.push([doc.data(), doc.id]);
        });
    
      });

    commit("ADD_THEM", clientList);

  }
};

export const mutations = {
  ADD_THEM: (state, clientList) => ( state.clients = clientList)
};
