<template>
  <div>
    <h1>Yes it is here</h1>


    <form @submit.prevent="storage">
        <label for="avatar">Choose a profile picture:</label>
    <input
      type="file"
      id="avatar"
      name="avatar"
      accept="image/png, image/jpeg"
      @change="getFile($event)"
    />
    <button v-if="img.length <1" type="submit">Check Console</button>
    <button v-if="img.length >=1" type="submit">Choose another image</button>
    </form>
<div class="" v-for="(image, index) in img" :key="index">
        <img :src="image" alt="" width="500px">
</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: {},
      img: []
    };
  },
  methods: {
      getFile($event){
          this.file = $event.target.files[0];
          console.log(this.file)
      },
    storage() {
      let storage = this.$fire.storage.ref();
   

var ref = storage.child(`images/${this.file.name}`).put(this.file);

ref.on('state_changed', 
  (snapshot) => {

  }, 
  (error) => {
    // Handle unsuccessful uploads
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    ref.snapshot.ref.getDownloadURL().then((downloadURL) => {
      console.log('File available at', downloadURL);
      this.img.push(downloadURL);
    });
  }
);


    },
    s() {
        console.log('work!')
    }
  }
};
</script>

<style lang="scss" scoped></style>
