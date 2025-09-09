<template>
  <q-page class="flex flex-center">
    <div class="box-side">
      <img class="pmvc" src="../assets/prefeituralogo.png" alt="" style="width: 75%;" >
    </div>
    <div class="box-inputs">
      <div class="login">
        <div class="input-zone">
        <q-input standout="bg-grey-1" v-model="text" label="Email" :input-style="{ color: 'black' }"/>
        <q-input standout="bg-grey-1" v-model="text" label="Senha" :input-style="{ color: 'black' } "/>
        <q-btn push color="indigo-10" label="Entrar" class="q-mt-md" type="submit"/>
        </div>
        <div class="icons-login">
          <img class="icon-google" src="../assets/Google__G__logo.png" alt="">
          <img class="icon-facebook" src="../assets/facebook.jpg" alt="">
        </div>
        <div class="links">
        <a href=""> Cadastre-se</a>
        <div style="width: 1px; height: 16px; background-color: indigo;"></div>
        <a href="http://" target="_blank">Esqueceu sua senha?</a>
        
        </div>
      </div>
      
    </div>
  </q-page>
</template>

<script setup>
//
</script>

<style scoped>
.box-side{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 100vh;
  background-color: rgb(255, 255, 255)
}
.box-inputs{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* (to bottom, rgb(138, 138, 238), aqua); */
  background-image: linear-gradient(to top, rgb(38, 38, 158), rgb(4, 32, 85));
   width: 60%;
   height: 100vh;
}
a{
  text-decoration: none;
  color: rgba(28, 0, 130, 0.897);
 
}
footer{
  background-color: red;
}

.links{
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
}
.login{
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

.input-zone{
display: flex;
flex-direction: column;
gap: 10px;
width: 300px  ;;
}



.icons-login{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;

}
.icon-google{
  width: 10%;
  border-radius: 20px;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.301);
  cursor: pointer;
}
.icon-facebook{
  width: 11%;
  border-radius: 20px;
  cursor: pointer;
}
/*
.pmvc{
  width: 20%;
} */
</style>