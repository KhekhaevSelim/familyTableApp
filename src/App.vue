<template>
  <div class="container">
      <Header/>
      <router-view></router-view>
      <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue'
import Header from "./components/Header.vue"

export default {
  name: 'App',
  components: {
   Header,
    Footer,
  }
}
</script>


<style scoped>

@font-face {
  font-family: 'MontserratBold';
  src: url('assets/montserrat/Montserrat-Medium.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}
*{
  font-family: 'MontserratBold', Arial, sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}

.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
}
</style>
