<template>
    <div class="not-found">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <router-link to="/" class=" hover:bg-violet-600 bg-violet-400 transform-cpu p-3 rounded shadow-lg transition-all">Go back to home</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound'
  }
  </script>
  
  <style  scoped>
  .not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }
  
  h1 {
    font-size: 6rem;
    color: #e74c3c;
  }
  
  p {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  
  router-link {
    text-decoration: none;
    color: #3498db;
    border: 1px solid #3498db;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.2s;
  
  }
  </style>
  