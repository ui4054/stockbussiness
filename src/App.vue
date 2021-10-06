<template>
  <div id="app">
    <nav class="navbar navbar-light bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/" id="navhome">
          <img
            src="../src/assets/foto_1.jpg"
            alt=""
            height="65"
            class="d-inline-block align-text-top"
          />
          
        
        <router-link class= "titulos" to="/">Stockbussines</router-link> 
        <router-link class= "titulos" to="/">Home</router-link> 
        <router-link class= "titulos" to="/about">About</router-link>
        </a>
        <router-link class= "registro" to="/registro">Registro</router-link> 
        <img
            src="../src/assets/user.jpg"
            alt=""
            height="65"
            class="d-inline-block align-text-top"
          />
        
      </div>
    </nav>

    <router-view />
    
  </div>
</template>

<style>
#navhome p{ 
display: inline;
}
#navhome {
  display: flex;
  align-items: center;
}
.titulos{
  color:white;
  margin-left: 30px;
  text-decoration: none;
}
.registro{
  margin-right: -700px; 
  color:white;
  text-decoration: none;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
