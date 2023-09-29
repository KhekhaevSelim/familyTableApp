<template>
  <div class="addFormContainer">
    
        <div class="wrapper">

            <div class="personalData">

                <span class="title">
                    Персональные данные
                </span>
                <div class="inputContainer" style="width : 100%">
                    <label for="input" class="inputLabel">Имя</label>
                    <input type="text" id="input" class="myInput" v-model="nameValue" >
                </div>
                <div class="inputContainer" style="width : 100%">
                    <label for="input" class="inputLabel">Возраст</label>
                    <input type="number" id="input" class="myInput" v-model="ageValue">
                </div>
               
            </div>

            <div class="addChildrenContainer">
                <div class="childrenHeader">
                    <span class="childrenHeader__title">
                    Дети (макс. 5)
                    </span>
                    
                    <button class="addNewChildBtn" @click="generateRow" v-if="canAddChild" >
                        <img src="../assets/plus.svg" alt="addIcon" >
                        <span class="addNewChildBtn__title">
                            Добавить ребенка
                        </span>
                    </button>
                    
                </div>

                <div v-for="(child, index) in children" :key="index" style="width : 100%">
                    <div class="row">
                        <div class="inputContainer" style="width: 40%">
                            <label for="input" class="inputLabel">Имя</label>
                            <input type="text" class="myInput" v-model="child.name">
                        </div>
                    <div class="inputContainer" style="width: 40%">
                        <label for="input" class="inputLabel">Возраст</label>
                        <input type="number" class="myInput" v-model="child.age">
                    </div>
                        <button @click="removeRow(index)" class="removeBtn">Удалить</button>
                    </div>
                </div>
                
            </div>

            <button @click="saveData" class="saveBtn">Сохранить</button>
        </div>

  </div>
</template>

<script>


export default {
name: 'AddForm',
data() {
    return {
      nameValue: this.$store.state.name,
      ageValue: this.$store.state.age,
      children: this.$store.state.children || [],
    };
  },
    computed: {
    canAddChild() {
        return this.children.length < 5;
    },
  },
  methods: {
    generateRow() {
      if (this.children.length < 5) {
        this.$store.commit("setChildRow");
      }
    },
    removeRow(index) {
        console.log(index)
        this.$store.commit("removeChildRow");
    },
    saveData() {
      this.$store.commit("setName", `${this.nameValue}`);
      this.$store.commit("setAge", this.ageValue);
      this.children.forEach((element, index) => {
        this.$store.commit("setChild", {index, childName : element.name , childAge : element.age });
      });
    },
  },
}
</script>


<style scoped>

*{

  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.addFormContainer{
    width: 100%;
    height: 76px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: start;
    flex-grow: 1;
    padding: 20px 20px;
}

.wrapper{
    max-width: 620px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
}

.personalData{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.title{
    margin: 0 0 20px 0;
    font-size: 16px;
}
.inputContainer{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border: solid 1px #F1F1F1;
    padding: 8px 10px;
    height: 56px;
    margin: 0 0 10px 0;
    border-radius: 4px;

}

.inputLabel{
    font-size: 13px;
    color : #1111117A;
}

.myInput{
 border: none;
    width: 100%;
    font-size: 14px;
    color: black;
    margin: 3px 0;
   padding: 5px 10px;
}

.addChildrenContainer{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.childrenHeader{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.childrenHeader__title{
    font-size: 16px;
}
.addNewChildBtn{
    display: flex;
    justify-content: center;
    align-items: center;
    width : 204px;
    height: 44px;
    border : solid 1px #01A7FD;
    border-radius: 100px;
    background-color: white;
    padding: 5px 15px ;
    cursor: pointer;
}

.addNewChildBtn__title{
    color : #01A7FD;
    font-size: 14px;
    margin: 0 0 0 5px;
}

.row{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0 0 0;
}

.removeBtn{
    background: white;
    border: none;
    color : #01A7FD;
    font-size: 14px;
    cursor: pointer;
    width: 118px;
    height: 44px;
    border-radius: 100px;
}

.removeBtn:hover{
    color : #ffffff;
    background-color: #01A7FD ;
}
.saveBtn{
    width: 118px;
    height: 44px;
    border-radius: 100px;
    background-color: #01A7FD;
    border: none;
    color : white;
    font-size: 14px;
    margin: 15px 0 0 0;
    cursor: pointer;
}
.saveBtn:hover{
    background-color: white;
    color : #01A7FD;
    border : solid 1px #01A7FD;
}
</style>
