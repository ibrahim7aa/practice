<template>
    <!-- <ChildComp name="ibrahim" :user="user" :getData="getData" /> -->
     <ChildComp/>
  </template>
    
  <script>
import ChildComp from './components/child.vue';
  export default {
    name: 'ParentPage', 
    components: {
      ChildComp, 
    },
  //   methods: {
  //     getData() {
  //           console.warn("hi")
  //     }
  //   },
  //   data() {  
  //     return {
  //       user:{name:'peter',email:'ibrahim@email.com'}
  //     };
  //   },
  };
  // </script>
  