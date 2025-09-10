<template>
  <q-page class="flex flex-center">
    <div class="box-side">
      <img class="pmvc" src="../assets/imgs/prefeituralogo.png" alt="" style="width: 75%" />
    </div>
    <div class="box-inputs">
      <div class="login">
        <form @submit.prevent="onSubmit()" class="input-zone">
          <q-input
            standard
            v-model="username"
            placeholder="Email"
            :input-style="{ color: 'black' }"
            autocomplete="current-username"
          />
          <q-input
            standard
            v-model="password"
            type="password"
            placeholder="Senha"
            :input-style="{ color: 'black' }"
            autocomplete="current-username"
          />
          <q-btn push color="indigo-10" label="Entrar" class="q-mt-md" type="submit" />
        </form>

        <div class="icons-login">
          <img class="icon-google" src="../assets/imgs/Google__G__logo.png" alt="" />
          <img class="icon-facebook" src="../assets/imgs/facebook.jpg" alt="" />
        </div>
        <div class="links">
          <a href=""> Cadastre-se</a>
          <div style="width: 1px; height: 16px; background-color: indigo"></div>
          <a href="http://" target="_blank">Esqueceu sua senha?</a>
        </div>
        <p v-if="error" style="color: red">{{ error }}</p>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import auth from 'src/auth/authService'

const username = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

async function onSubmit() {
  console.log('[Login] onSubmit chamado', { username: username.value, password: password.value ? '***' : '(vazio)' })
  error.value = ''

try {
  await auth.login(username.value, password.value)
  router.push('/dashboard')
} catch (err) {
  error.value = err.message;
}}
console.log(auth.login)
</script>

<style scoped>
.box-side {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45%;
  height: 100vh;
  background-color: rgb(255, 255, 255);
}
.box-inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* (to bottom, rgb(138, 138, 238), aqua); */
  background-image: linear-gradient(to top, rgb(38, 38, 158), rgb(4, 32, 85));
  width: 55%;
  height: 100vh;
}
a {
  text-decoration: none;
  color: rgba(28, 0, 130, 0.897);
}

.links {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
}
.login {
  display: flex;
  gap: 30px;
  flex-direction: column;
  justify-content: center;
  padding-top: 30px;
  align-content: space-between;
  border-radius: 10px;
  width: 400px;
  height: 400px;
  align-items: center;
  background-color: aliceblue;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.192);
}

.input-zone {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
}

.icons-login {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.icon-google {
  width: 10%;
  border-radius: 20px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.301);
  cursor: pointer;
}
.icon-facebook {
  width: 11%;
  border-radius: 20px;
  cursor: pointer;
}
/*
.pmvc{
  width: 20%;
} */
</style>
