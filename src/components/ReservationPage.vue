<template>
  <div id="reservation">
    <h1>RSVP</h1>
    <p v-if="!isConfirm">Please for the guests to fill out the attendance form below.</p>
    <form @submit.prevent="submitRSVP" v-if="!isConfirm">
      <div class="input-group">
        <label for="name">Your name <span>*</span></label>
        <input type="text" id="name" :readonly="autofill" v-model="form.name" placeholder="Type your name" required />
      </div>

      <div class="input-group">
        <label for="email">Phone Number </label>
        <input type="text" id="phoneNumber" :readonly="autofill" v-model="form.phoneNumber" placeholder="Type your phone number" />
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
    <div v-if="isConfirm">
      <p>Thank you for your confirmation, please keep this QR Code.</p>
      <qrcode :value="qrCodeValue" :options="{ width: 400, margin: 10, color: { dark: '#000000', light: '#ffffff' } }"></qrcode>
    </div>
    <button v-if="isConfirm" v-show="!hideSaveButton" id="save-qr" @click="saveQrCode">Save To Device</button>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue';
import html2canvas from 'html2canvas';
import axios from 'axios';

export default {
  comments: {
    QrcodeVue,
  },
  data() {
    return {
      form: {
        name: "",
        phoneNumber: "",
        message: "",
        attending: true,
      },
      isConfirm: false,
      size: 300,
      hideSaveButton: false,
      autofill: false,
      guestShortId: null,
      qrCodeValue: null,
      guestInformation: null,
    };
  },
  methods: {
    submitRSVP() {
      // this should call the backend api to save or update guest attendances on the DB.
      console.log("RSVP Submitted:", this.form);
      alert("Thank you for your RSVP!");
      this.guestInformation["will_attend_event"] = this.form.attending;
      this.guestInformation["message"] = this.form.message;
      this.qrCodeValue = btoa(JSON.stringify({'short_id': this.guestShortId, is_vip: this.guestInformation["is_vip"]}));
      this.isConfirm = true;
      console.log(this.qrCodeValue);
    },
    saveQrCode() {
      this.hideSaveButton = true;
      const qrElement = document.getElementById("reservation");

      if (!qrElement) {
        console.error("QR Code element not found");
        return;
      }

      html2canvas(qrElement, { scale: 2 }).then(canvas => {
        const imageURL = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = imageURL;
        link.download = "WeddingOfOcaAndIlham.png";
        link.click();
      }).catch(error => {
        console.error("Error capturing QR Code:", error);
      });
    },
    async fetchGuestInformation(guestShortId) {
      try {
        const response = await axios.get(`https://gosm.muhammadilham.xyz/api/v1/public/guests?short_id=${guestShortId}`);
        if (response.status === 200) {
          const { data } = response.data;
          this.guestInformation = data;
          this.form.name = this.guestInformation.name;
          this.form.phoneNumber = this.guestInformation.phone_number;
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted() {
      const urlParams = new URLSearchParams(window.location.search);
      this.guestShortId = urlParams.get('id');
      if (this.guestShortId) {
        this.fetchGuestInformation(this.guestShortId);
        this.autofill = true;
      }
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

