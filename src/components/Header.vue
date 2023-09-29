<template>
  <div class="containerHeader">
        <img src="../assets/logo.svg" alt="logo" class="logo">
        <div class="nav">
            <router-link to="/addForm" exact-active-class="active-link">Форма</router-link>
            <router-link to="/preview" exact-active-class="active-link">Превью</router-link>
        </div>
  </div>
</template>

<script>

export default {
  name: 'HeaderComponent',
  props: {
  
  }
}
</script>


<style scoped>

.containerHeader{
    width: 100%;
    height: 76px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: solid 1px #b7b4b43b;
}

.logo{
    position: absolute;
    left: 20px;
}
.nav :nth-child(1){
   margin: 0 20px 0 0;
}
a{
    text-decoration: none;
    color : #1111117A;
}
.active-link{
  color : #01A7FD;
}
</style>
