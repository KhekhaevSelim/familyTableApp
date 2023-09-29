<template>
  <div class="container">

    <div class="wrapper">
        <div class="parentInfo">
            <span class="parentInfo__title">
              Персональные данные
            </span>
            <span class="parentInfo__data" >
              <span v-if="name !== ''">{{name}}</span>
              <span v-if="age !== ''">, {{formattedAge(age)}}</span>
            </span>
        </div>

        <div class="childrenInfo">
          <span class="childrenInfo__title">
            Дети
          </span>
          <span class="childrenInfo__data" v-for="(child, index) in children" :key="index">
             <span v-if="children[index].name !== ''">{{children[index].name}}</span> <span v-if="children[index].age !== ''">, {{formattedAge(children[index].age)}}</span>
             <span v-if="children[index].name === '' || children[index].age === ''"> (не корректные или не полные данные у ребёнка номер {{index + 1}}) </span>
          </span>
        </div>
        
    </div>
        
  </div>
</template>

<script>

import {mapGetters} from 'vuex'
export default {
  name: 'PreviewComponent',
  props: {
  
  },
  data() {
    return {
      children: this.$store.state.children || [],
    };
  },
   computed: {
    ...mapGetters(['getName', 'getAge']),
    name() {
      return this.getName;
    },
    age() {
      return this.getAge;
    },
  },
  methods : {
    formattedAge(age){
      if(age === 1 || ((age % 10 === 1) && (age !== 11) )){
        return age + ' год'
      }  else if(((age % 10 === 2) || (age % 10 === 3) || (age % 10 === 4)) && (age > 20 || age < 10)) {
        return age + ' года'
      } else {
        return age + " лет"
      }
    }
  }
}
</script>


<style scoped>

*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.container{
    width: 100%;
    height: 76px;
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-grow: 1;
    padding: 20px;
}

.wrapper{
  max-width: 620px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.parentInfo{
  width: 100%;
  height: 68px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
}

.parentInfo__title{
  font-size: 16px;
  font-weight: 500;
}

.parentInfo__data{
  font-size: 16px;
  font-weight: 700;
}

.childrenInfo{
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 60px 0 0 0;
}
.childrenInfo__title{
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 20px 0;
}

.childrenInfo__data{
    font-size: 16px;
    font-weight: 700;
    height: 44px;
    background-color: #F1F1F1;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    padding: 10px;
    margin: 0 0 5px 0;
    align-items: center;
}
</style>