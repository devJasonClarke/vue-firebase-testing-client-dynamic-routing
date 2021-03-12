<template>
  <div>
    <h1>THe Client</h1>
    <h2>{{ info.client_name}}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      getClient: this.$route.params.id,
      info: {},
    };
  },
  methods: {
    async client() {
      const messageRef = this.$fire.firestore
        .collection("clients")
        .doc(this.getClient);
      try {
        const messageDoc = await messageRef.get();
        this.info = messageDoc.data();

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
    this.client();
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
