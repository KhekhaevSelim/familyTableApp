import { createStore } from 'vuex'


export default createStore({
  state () {
    return {
      name : "",
      age : "",
      children : [],
    }
  },
  getters: {
    getName(state) {
      return state.name;
    },
    getAge(state) {
      return state.age;
    },
    getChildren(state){
      return state.children
    }
  },
  mutations: {
    setName(state, newName) {
        state.name = newName;
    },
    setAge(state, newAge) {
        state.age = newAge;
    },
    setChildRow(state){
        state.children.push(
          {name : "", age : ""}
        )
    },
    removeChildRow(state, index){
        state.children.splice(index, 1);
    },
    setChild(state, { index, childName, childAge }) {
      if(childName !== "" && childAge !== ""){
        state.children[index].name = childName;
        state.children[index].age = childAge;
      }
    
    },
  },
})



