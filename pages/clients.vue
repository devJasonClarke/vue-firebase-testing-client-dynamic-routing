<template>
  <div>
    <div class="container">
      <h1>Clients</h1>
      <div class="client-container">
        <div v-for="(client, index) in clients" class="client-card" :key="index">
          <p>Client: {{client[0].client_name}}</p>
          <p>Last Update: {{client[0].last_update}}</p>
          <p>hosting: ${{client[0].hosting_fee}}</p>
          <button @click="viewClient(client[1])">See more</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            clients: []
        }
    },
  methods: {
    async readFromFirestore() {
      const db = this.$fire.firestore;
      await db
        .collection("clients")
        .orderBy("timestamp")
        .onSnapshot(querySnapshot => {
          let clientList = [];
          querySnapshot.forEach(doc => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            clientList.push([doc.data(),doc.id]);
          });
          this.clients = clientList;
          console.log(this.clients)
        });
    },
    viewClient(id){
this.$router.push({name: 'client-id',  params: { id: id }})
    }
  },
  
  mounted() {
    this.readFromFirestore();
  }
};
</script>

<style lang="scss" scoped>
.container{
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
button{
    margin-top: 20px;
}
</style>
