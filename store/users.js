export const state = () => ({
  clients: [],
  age: 22
});

export const getters = {
  clients: state => state.clients,
  age: state => state.age
};

export const actions = {
  addClient({ commit },clientList) {
    commit("ADD_THEM", clientList);

  }
};

export const mutations = {
  ADD_THEM: (state, clientList) => ( state.clients = clientList)
};
