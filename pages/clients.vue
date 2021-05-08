<template>
  <div>
    <div class="container">
      <h1>Clients {{ age }}</h1>
      <div class="client-container">
        <div
          v-for="(client, index) in clients"
          class="client-card"
          :key="index"
        >
          <p>Client: {{ client[0].client_name }}</p>
          <p>Last Update: {{ client[0].last_update }}</p>
          <p>hosting: ${{ client[0].hosting_fee }}</p>
          <button @click="viewClient(client[1])">See more</button>
          <nuxt-link :to="{ name: 'client-id', params: { id: client[1] }}">User</nuxt-link>
        </div>
      </div>
  
    </div>
        {{clients}}
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  head:{
    title: 'The Client', 
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions({ getClient: "users/addClient" }),
    viewClient(id) {
      this.$router.push({ name: "client-id", params: { id: id } });
    },
  async addClient() {
    const db = this.$fire.firestore;
    let clientList = [];
    await db
      .collection("clients")
      .orderBy("timestamp")
      .onSnapshot(querySnapshot => {
     clientList = []
        querySnapshot.forEach(doc => {
          // doc.data() is never undefined for query doc snapshots
      
          clientList.push([doc.data(), doc.id]);
        });
        this.getClient(clientList)
    
      });

  }
  },

  computed: {
    ...mapGetters({
      clients: "users/clients",
      age: "users/age"
    })
  },
  mounted () {
       this.addClient();
  }
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
}
.client-container {
  display: grid;
  margin-top: 60px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 90px 30px;
}
.client-card {
  border: 1px solid black;
  padding: 15px;
}
button {
  margin-top: 20px;
}
</style>
