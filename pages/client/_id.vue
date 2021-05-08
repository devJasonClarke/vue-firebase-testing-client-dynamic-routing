<template>
  <div>
    <h1>THe Client</h1>
    <h2>{{ info}}</h2>
  </div>
</template>

<script>

export default {

  async asyncData({app, params, error, route}) {
/*  const ref = fireDb.collection("test").doc("test")
      let snap
      try {
        snap = await ref.get()
      } catch (e) {
        // TODO: error handling
        console.error(e)
      }
      return {
        text: snap.data().text
      }


     let messageDoc; */
     let theParam = String(route.params.id);
     console.log(theParam)
       const messageRef = app.$fire.firestore.collection("clients").doc(`${theParam}`);

     let messageDoc;
  
      try {
        messageDoc = await messageRef.get()
         console.log(messageRef)

      } catch (e) {
       console.log(e)
     
      } return{
        info: messageDoc.data()
      }

/*   const ref = fireDb.collection("test").doc("test")
  let snap
  try {
    snap = await ref.get()
  } catch (e) {
    // TODO: error handling
    console.error(e)
  }
  return {
    text: snap.data().text
  } */
},
  data() {
    return {
      getClient: this.$route.params.id,

    };
  },

  methods: {
  cliient(){
    return this.theClient.find(client => client === this.getClient)
  },
  /* setInfo(){
    this.client();
   
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
    }, */

    loadClient() {
      this.info == "";
    }
  },
  created() {
/*     this.setInfo(); */
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
