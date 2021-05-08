<template>
  <div>
    <h1>THe Client</h1>
    <h2>{{ info}}</h2>
  </div>
</template>

<script>

export default {
  data() {
    return {
      getClient: this.$route.params.id,
      info: [],
    };
  },

  methods: {
  cliient(){
    return this.theClient.find(client => client === this.getClient)
  },
  setInfo(){
    this.client();
    /* this.info = this.theClient; */
  },
    async client() {
      const messageRef = this.$fire.firestore
        .collection("clients")
        .doc(this.getClient);
      try {
        const messageDoc = await messageRef.get();
       return this.info = messageDoc.data();

      } catch (e) {
        alert(e);
        return;
      }
    },

    loadClient() {
      this.info == "";
    }
  },
  created() {
    this.setInfo();
  } /* ,
        computed: {
           async client() {
                   const db = this.$fire.firestore;
                   console.log(this.getClient);
                   let cl = await db.collection('clients').doc(this.getClient).get();
                   this.info = await cl;
                return await cl.data();
        } */
};
</script>

<style lang="scss" scoped></style>
