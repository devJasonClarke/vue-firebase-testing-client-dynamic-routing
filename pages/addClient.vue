<template>
  <div class="body">
    <div class="container">
      <h1>Add Client</h1>

      <form @submit.prevent="submit">
        <div class="form-group">
          <label>Name of Client:</label>
          <input
            type="text"
            v-model="name"
            placeholder="Name Of Client"
            required
          />
        </div>
        <div class="form-group">
          <label>Instituion</label>
          <select
            name="Web Dev Package"
            v-model="instituion"
            id="web-dev-packages"
            required
          >
            <option value="select" disabled hidden
              >Please Select A Institution</option
            >
            <option value="School">School</option>
            <option value="Business">Business</option>
          </select>
        </div>
        <div class="form-group">
          <label>Select a Development Package</label>
          <select
            name="Web Dev Package"
            v-model="developmentPackage"
            id="web-dev-packages"
            required
          >
            <option value="select" hidden disabled
              >Please Select A Package</option
            >
            <option value="Basic Web Development Package"
              >Basic Web Development Package</option
            >
            <option value="Premium Web Development Package"
              >Premium Web Development Package</option
            >
            <option value="Advance Web Development Package"
              >Advance Web Development Package</option
            >
          </select>
        </div>
        <div class="form-group">
          <label>Development Fee</label>
          <input
            type="number"
            min="750"
            v-model="developmentFee"
            placeholder="Web Development Fee"
            required
          />
        </div>
        <div class="form-group">
          <label>
            Select a Hosting Package
          </label>
          <select
            name="Web Hosting and Maintenance Package"
            id="Hosting-packages"
            v-model="hostingPackage"
            required
          >
            <option value="select" hidden disabled
              >Please Select A Package</option
            >

            <option value="Basic Hosting and Maintenance Package"
              >Basic Hosting and Maintenance Package</option
            >
            <option value="Premium Hosting and Maintenance Package"
              >Premium Hosting and Maintenance Package</option
            >
            <option value="Advance Hosting and Maintenance Package"
              >Advance Hosting and Maintenance Package</option
            >
          </select>
        </div>
        <div class="form-group">
          <label>Hosting Fee</label>
          <input
            type="number"
            min="100"
            v-model="hostingFee"
            placeholder="Total Hosting Fee"
            required
          />
        </div>
        <button type="submit">Add Client</button>
      </form>
    </div>
<!--     <div class="data">
      {{ name }}
      {{ instituion }}
      {{ developmentPackage }}
      {{ developmentFee }}
      {{ hostingPackage }}
      {{ hostingFee }}
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      instituion: "select",
      developmentPackage: "select",
      developmentFee: null,
      hostingPackage: "select",
      hostingFee: null
    };
  },
  methods: {
    submit() {
      const db = this.$fire.firestore;
      let d = new Date();
      var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      if (
        this.instituion != "select" &&
        this.developmentPackage != "select" &&
        this.hostingPackage != "select"
      ) {
        db.collection("clients")
          .add({
            development_fee: this.developmentFee,
            development_package: this.developmentPackage,
            hosting_fee: this.hostingFee,
            hosting_package: this.hostingPackage,
            client_name: this.name,
            payments: [{ fee: this.hostingFee, month: months[d.getMonth()] }],
            timestamp: this.$fireModule.firestore.FieldValue.serverTimestamp()
          })
          .then(docRef => {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch(error => {
            console.error("Error adding document: ", error);
          });

this.$router.push("/clients")
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
form {
  max-width: 500px;
  display: flex;
  flex-direction: column;

  input,
  select {
    height: 30px;
    outline: none;
    border: 1px solid black;
    border-radius: 3px;
    padding: 5px;
  }
  label {
    margin-bottom: 5px;
  }
  button {
    align-self: center;
  }
}
.form-group {
  display: flex;
  flex-direction: column;
  margin: 15px 0 15px 0;
}
</style>
