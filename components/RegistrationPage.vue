<template>
  <div class="flex column justify-center items-center">
    <span
      style="
        color: #ffff00;
        margin-top: 56px;
        font-size: 3.125rem;
        font-weight: 700;
      "
      >LOGO</span
    >
    <span
      style="
        color: #ffff00;
        margin-bottom: 30px;
        margin-top: 20px;
        font-size: 2.5rem;
        font-weight: 700;
      "
      class="text-white text-bold"
      >Free Registration</span
    >

    <div class="q-pa-md">
      <q-stepper
        ref="stepper"
        v-model="step"
        color="primary"
        animated
        style="width: 500px; background: none"
      >
        <q-step
          style="background: #eb9f13 !important"
          :name="1"
          title=""
          :done="step > 1"
        >
        </q-step>

        <q-step :name="2" title="" :done="step > 2"> </q-step>

        <q-step :name="3" title=""> </q-step>
      </q-stepper>
    </div>
    <div class="reg-container">
      <div class="q-pa-md">
        <div class="row" style="margin-bottom: 70px">
          <div class="col-12 text-center" style="height: 100px">
            <span class="text-white">Continue With</span>
            <div
              class="row justify-center items-center"
              style="margin-top: 10px"
            >
              <img
                class="icon-image"
                src="../resources/images/facebook-icon.svg"
                alt="facebook"
              />
              <div
                style="
                  background: #ffff;
                  height: 50px;
                  width: 50px;
                  border-radius: 5px;
                  margin-left: 20px;
                "
              >
                <img
                  class="icon-image"
                  src="../resources/images/google-icon.svg"
                  alt="google"
                />
              </div>
            </div>
            <div
              class="flex row justify-between items-center"
              style="margin-top: 40px"
            >
              <hr />
              <span class="text-white" style="margin: 0 15px">Or</span>
              <hr />
            </div>
          </div>
        </div>

        <div class="row q-col-gutter-md" style="margin-top: 40px">
          <div class="col-12 col-sm-6">
            <label class="input-title text-white">Username</label>
            <q-input
              class="input-fields"
              filled
              placeholder="Please enter username. "
            />
          </div>
          <div class="col-12 col-sm-6">
            <label class="input-title text-white">Password</label>
            <q-input
              v-model="password"
              class="input-fields"
              filled
              type="password"
              placeholder="Please enter password. "
            />
          </div>
          <div class="col-12 col-sm-6">
            <label for="" class="input-title text-white"
              >Confirm Password</label
            >
            <q-input
              v-model="password"
              class="input-fields"
              type="password"
              filled
              placeholder="Please enter password. "
            />
          </div>
          <div class="col-12 col-sm-6">
            <label for="" class="input-title text-white">Mobile Number</label>
            <q-input
              class="input-fields"
              type=""
              filled
              placeholder="Please enter mobile number. "
            />
          </div>
          <div class="col-12 col-sm-6">
            <label for="" class="input-title text-white">E-mail Address</label>
            <q-input
              class="input-fields"
              filled
              placeholder="Please enter e-mail address. "
            />
          </div>
          <div class="col-12 col-sm-6">
            <label for="" class="input-title text-white">Identity No</label>
            <q-input
              class="input-fields"
              filled
              placeholder="Please enter correct ID number. "
            />
          </div>
          <div class="col-12 col-sm-6">
            <label for="" class="input-title text-white">Referral</label>
            <q-input
              style="color: white"
              class="input-fields"
              filled
              hint="Leave blank if no referral."
              placeholder="Please enter referral username. "
            />
          </div>
          <div class="col-12 col-sm-6">
            <div class="flex justify-end items-end">
              <div style="width: 65%">
                <label for="" class="input-title text-white"
                  >Verification Code</label
                >
                <q-input
                  class="input-fields"
                  filled
                  placeholder="Verification Code. "
                  style="border-radius: 5px 0 0 5px; background: #262626"
                />
              </div>

              <div
                style="
                  width: 35%;
                  height: 50px;
                  background: #ffff;
                  border-radius: 0 5px 5px 0;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                "
              >
                <span class="text-red" style="font-size: 1.3rem">2678</span>
              </div>
            </div>
          </div>
          <div class="col-12 row items-center justify-center">
            <q-checkbox v-model="val" />
            <span class="text-white">I agree.</span
            ><a href="http://" target="_blank" rel="noopener noreferrer"
              >OCMS Terms & Condition</a
            >
          </div>
          <div class="col-12 row items-center justify-center">
            <q-btn
              class="reg-button"
              color="white"
              text-color="black"
              label="Register"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val: true,
      //   step: 1,
    }
  },
}
</script>
<style>
.icon-image {
  height: 50px;
  width: 50px;
}
.q-stepper__dot {
  background: #eb9f13;
  height: 70px;
  width: 70px;
}
.q-stepper {
  box-shadow: none;
  margin-bottom: 20px;
}
.reg-container {
  height: 831px;

  width: 760px;
  background: #000000;
  border: 2px #ffcc00 solid;
  border-radius: 8px;
  padding: 47px;
}

a {
  color: #d99e30;
  text-decoration: none;
}
hr {
  width: 270px;
  margin: 0;
  border: 1px #808080 solid;
}
.reg-button {
  background: linear-gradient(
    to bottom,
    rgba(234, 159, 19, 1) 0%,
    rgba(234, 159, 19, 1) 50%,
    rgba(187, 127, 15, 1) 100%
  ) !important;
  border: 2px rgba(187, 127, 15, 1) solid;
  border-radius: 50px;
  width: 160px;
  height: 54px;
  box-shadow: 0px 6px 0px 0px #ffffff40 inset;
  color: #ffffff !important;
  text-transform: capitalize;
}
.input-fields {
  height: 50px;
  border-radius: 5px;
  background: #262626;
  ::placeholder {
    color: #b0b0b0;
  }
}

.input-title {
  font-size: 15px;
  /* font-weight: 400; */
  line-height: 30px;
}
</style>
