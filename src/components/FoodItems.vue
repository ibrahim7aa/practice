<template>
    <h1>Food Items</h1>
    <table >
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Email</th>
          <td>Image</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.firstName }}</td>
          <td>{{ item.lastName }}</td>
            <td>{{ item.email }}</td>
            <td><img :src="item.image" alt="food item" /></td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'FoodItems',
    data() {
      return {
        items: [],
        images: [] 
      };
    },  
    mounted() {
      axios.get('https://dummyjson.com/users')
        .then((response) => {
          this.items = response.data.users; 
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
     // https://dummyjson.com/icon/HASH/SIZE/?type=png (or svg)
   fetch('https://dummyjson.com/icon/abc123/150') // png is default
  .then(response => response.blob()) // Convert response to blob
.then(blob => {
  console.log('Fetched image blob:', blob);
})
// Blob {size: SIZE, type: 'image/png'}
    }
  };
  </script>
  