<template>
    <div class="not-found">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <div @click="goBack" class="router-link hover:bg-blue-600 bg-blue-800 transform-cpu p-3 rounded shadow-lg transition-all">Go back</div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NotFound',
    methods: {
      goBack() {
        // If the tab has a history (meaning it wasn't just opened to this page)
        // navigate back in history
        if (window.history.length > 1) this.$router.go(-1);
        // If there's no history, attempt to close the tab
        else window.close();
      },
    },
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
  
  .router-link {
    cursor: pointer;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.2s;
  
  }
  </style>
  