<template>
  <div class="section">
    <div class="bg-indigo-10 text-center q-pa-md">
      <header>
        <div style="display: flex">
          <img style="width: 18%" src="../assets/imgs/logo.png" alt="" />
        </div>
        <div class="header-items">
          <img style="cursor: pointer" src="../assets/svg/person-icon.svg" alt="" />
          <router-link to="/home">Home</router-link>
          <router-link to="/account">Account</router-link>
          <router-link to="/settings">Settings</router-link>
          <router-link to="/login">Logout</router-link>
        </div>
      </header>
    </div>
    <div class="main">
      <span></span>
    </div>
  </div>
</template>

<script>
import logout from '../auth/authService'

export default {
  methods: {
    logoutBUtton() {
      logout()
      this.$router.push('./login')
    },
  },
}
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  height: 60px;
  gap: 50px;
}
.header-items {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 300px;
}

a {
  text-decoration: none;
  color: white;
  font-weight: bolder;
}
a:hover {
  color: rgb(204, 204, 204);
  transition: 0.2s;
}

.main {
  display: flex;
  box-shadow: 2px 2px 2px 4px rgba(128, 128, 128, 0.288);
  width: 1200px;
  height: 800px;
  margin-left: 300px;
  margin-top: 30px;
  justify-content: center;
  border-radius: 10px;
}

/* .section{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
} */
</style>
