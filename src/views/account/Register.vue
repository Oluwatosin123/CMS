<template>
  <div>
    <div class="main-section">
      <div class="logo-con">
        <a href="" class="logo-link"
          ><img src="../../assets/churchplus-logo.png" alt="Churchplus Logo"
        /></a>
      </div>
      <div class="header">
        <div class="top-con">
          <div class="header">
            <h1>Your all in one church management solution</h1>
            <h3 class="intro">
              Wave helps freelancers, consultants, and small businesses <br />
              around the world simplify their finances.
            </h3>
          </div>
        </div>
      </div>

      <div class="form-container">
        <div class="error-div" v-if="showError">
          <p class="error-message">{{ errorMessage }}</p>
        </div>

        <form @submit.prevent="register">
          <div>
            <input
              type="email"
              class="input"
              v-model="credentials.email"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <input
              :type="passwordType"
              v-model="credentials.password"
              class="input"
              placeholder="Password"
              required
            />
          </div>
          <div class="password-help">
            <span class="password-tip"
              >At least 6 characters, but longer is better.</span
            >
            <span class="show-password"
              ><a href="" class="show-password-link" @click="showPassword">{{
                showBtnText
              }}</a></span
            >
          </div>

          <button class="submit-btn sign-in-btn get-started">
            Get Started
          </button>
        </form>

        <div style="margin: 24px 0">
          <span class="or">or</span>
        </div>

        <div>
          <button class="facebook-btn btn-logo sign-in-btn google-sign-up">
            <img src="../../assets/google.png" alt="Google Icon" />
            <span>Sign in with Google</span>
            <span></span>
          </button>
        </div>
        
        <div class="terms">
          <p>
            By signing up, you are indicating that you have read and agree to
            the <a href="" class="terms-link">Terms of Use</a> and
            <a href="" class="terms-link">Privacy Policy.</a>
          </p>
        </div>
      </div>

      <div class="bottom-container">
        <div>
          <p class="sign-up-prompt">
            Already have an account?
            <router-link to="/" class="sign-up">Sign in now</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      passwordIsVissible: false,
      passwordType: "password",
      showBtnText: "Show",
      credentials: {
        ChurchName: "Default Church",
        firstName: "First name",
        lastName: "Last name",
      },
      showError: false,
      errorMessage: "",
      show: false,
    };
  },

  methods: {
    showPassword(e) {
      e.preventDefault();
      if (!this.credentials.password) return false;
      this.passwordType = this.passwordIsVissible ? "password" : "text";
      this.passwordIsVissible = !this.passwordIsVissible;
      this.showBtnText = this.passwordIsVissible ? "Hide" : "Show";
    },

    register() {
      axios
        .post("/initialsignup", this.credentials)
        .then((res) => {
          console.log(res);
          this.$store.dispatch("setUserEmail", this.credentials.email);
          localStorage.setItem("email", this.credentials.email)
          this.$router.push("/onboarding");
        })
        .catch((err) => {
          console.log(err.response);
          if (err.response.status === 400) {
            this.errorMessage = err.response.data;
            this.showError = true;
          }
        });
    },
  },
};
</script>

<style scoped>
.logo-con {
  display: flex;
  margin-top: 42px 0;
}

.logo-link {
  width: 100%;
  text-align: center;
  margin-top: 36px;
}

.header {
  text-align: center;
  margin-bottom: 30px;
  margin-top: 4px;
}

.header h1 {
  color: #1d262d;
  font-size: 28px;
  margin-bottom: 22px;
}

.header .intro {
  font-size: 20px;
}

.main-section {
  margin: auto;
  padding: 10px;
}

.form-container {
  max-width: 400px; /* sign up*/
  margin: auto;
}

.input {
  color: #1c252c;
  font-weight: normal;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 8px 10px 6px;
  min-height: 40px;
  appearance: none;
  outline: none;
  vertical-align: middle;
  transition: border 0.1s linear;
  border: 1px solid #b2c2cd;
  margin: 4px 0;
}
  .input::placeholder {
    font-style: italic;
    color: #b2c2cd;
    letter-spacing: 1.5px;
  }

.forgot-password {
  /* font-family: Averta, sans-serif; */
  font-size: 14px;
  line-height: 1.4;
  text-decoration: none;
  color: #136acd;
  font-weight: bold;
  cursor: pointer;
}

.f-password-div {
  margin-bottom: 8px;
}

.submit-btn {
  background: #136acd;
  font-size: 16px;
  font-weight: bold;
}

.sign-in-btn {
  color: #fff;
  border: 1px solid transparent;
  margin-top: 8px;
  width: 100%;
  padding: 8px 20px;
  box-sizing: border-box;
  text-align: center;
  min-width: 100px;
  border-radius: 500px;
  vertical-align: middle;
  text-decoration: none;
  appearance: none;
  font-weight: 400;
  font-size: 16px;
  outline: none;
}

.sign-in-btn:hover {
    cursor: pointer;
}

.input:focus {
  box-shadow: 0 0 0 3px rgba(19, 106, 205, 0.2);
}

  .input::placeholder {
    font-style: italic;
    color: #b2c2cd;
    letter-spacing: 1.5px;
  }

/* .input:not(:focus) {
  font-style: italic;
  color: #b2c2cd;
  letter-spacing: 1.5px;
} */

.or {
  display: flex;
  flex-direction: row;
  color: #8b9ba5;
}
.or:before,
.or:after {
  content: "";
  flex: 1 1;
  border-bottom: 1px solid #8b9ba5;
  margin: auto;
}

.or:before {
  margin-right: 10px;
}
.or:after {
  margin-left: 10px;
}

.google-btn {
  background: #4285f4;
}

.google-btn::before {
  content: "\e0e2";
  margin-right: auto;
}

.facebook-btn {
  background: #410093;
}

.bottom-container {
  text-align: center;
  color: #4d6575;
  font-size: 14px;
  line-height: 1.4;
  margin-top: 24px;
  font-weight: lighter;
}

.sign-up {
  color: #4d6575;
  font-weight: bold;
  text-decoration: underline;
  font-size: 12px;
}

.btn-logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1px;
}

/* Signup */
.intro {
  color: #718fa2;
  font-weight: lighter;
  margin-bottom: 40px;
  font-size: 23px;
}

.show-password {
  float: right;
}

.password-help {
  margin-bottom: 24px;
  font-size: 14px;
  color: #718fa2;
  font-weight: lighter;
}

.show-password-link {
  text-decoration: none;
  color: #136acd;
  font-weight: bold;
}

.get-started {
  background: #17c5cf;
  color: #000;
}

.google-sign-up {
  background: #4285f4;
}

.google-sign-up:hover {
  background: #4266f4;
}

.terms {
  text-align: center;
  margin-top: 40px;
  color: #718fa2;
  font-weight: lighter;
}

.terms-link {
  color: #4d6575;
  font-weight: bold;
  font-size: 12px;
}

.terms-link:hover {
  text-decoration: none;
}

.sign-up:hover {
  text-decoration: none;
}

.show-password:hover {
  text-decoration: underline;
}

.error-div {
  background: #fff8f8;
  border-color: #ffe9e9;
  padding: 10px 5px;
  margin-bottom: 24px;
  border-radius: 8px;
  border: 1px solid transparent;
  border-left: 5px solid #b52626;
}

.error-message {
  color: #b52626;
}
</style>
