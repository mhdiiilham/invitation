<template>
  <div id="reservation">
    <h1>RSVP</h1>
    <p>Please for the guests to fill out the attendance form below</p>

    <form @submit.prevent="submitRSVP">
      <div class="input-group">
        <label for="name">Your name <span>*</span></label>
        <input type="text" id="name" v-model="form.name" placeholder="Type your name" required />
      </div>

      <div class="input-group">
        <label for="email">Your email</label>
        <input type="email" id="email" v-model="form.email" placeholder="Type your email address" />
      </div>

      <div class="input-group">
        <label for="message">Message <span>*</span></label>
        <input type="text" id="message" v-model="form.message" placeholder="Write something..." required />
      </div>

      <div class="input-group">
        <label>Confirmation of attendance <span>*</span></label>
        <div class="radio-group">
          <input type="radio" id="yes" value=true v-model="form.attending" required />
          <label for="yes">Yes</label>

          <input type="radio" id="no" value=false v-model="form.attending" />
          <label for="no">No</label>
        </div>
      </div>

      <button id="submit-button" type="submit">CONFIRMATION</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
        attending: true,
      },
    };
  },
  methods: {
    submitRSVP() {
      // this should call the backend api to save or update guest attendances on the DB.
      console.log("RSVP Submitted:", this.form);
      alert("Thank you for your RSVP!");
    },
  },
  mounted() {
      const urlParams = new URLSearchParams(window.location.search);
      const rsvpName = urlParams.get('name');
      this.form.name = rsvpName;
    },
};
</script>

<style scoped>
#reservation {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 20px;
  background: #f8f5f0; /* Light cream/grey background */
  color: #333;
}


h1 {
  font-family: "DM Serif Text", serif;
  font-size: 2.5em;
  margin-bottom: 5px;
}

p {
  font-size: 1.1em;
  margin-bottom: 30px;
  color: #666;
}

form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
}

.input-group {
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

label {
  font-size: 1em;
  font-weight: bold;
  margin-bottom: 5px;
  color: #333;
}

label span {
  color: red;
}

input[type="text"],
input[type="email"],
input[type="number"] {
  width: 100%;
  background: none;
  border: none;
  border-bottom: 2px solid #333;
  font-size: 1.1em;
  padding: 10px 5px;
  outline: none;
  color: #333;
}

input::placeholder {
  color: rgba(51, 51, 51, 0.5);
}

.radio-group {
  display: flex;
  align-items: center;
  gap: 20px;
}

.radio-group input[type="radio"] {
  accent-color: #333;
  margin-right: 5px;
}

button {
  font-family: "Alumni Sans Pinstripe", serif;
  font-weight: 400;
  font-style: normal;
  margin-top: 30px;
  padding: 15px;
  font-size: 1.2em;
  color: white;
  background: #333;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  width: 100%;
  max-width: 500px;
}

button:hover {
  background: black;
}
</style>

