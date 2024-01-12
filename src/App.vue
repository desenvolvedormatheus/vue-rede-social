<template>
  <router-view />
</template>

<style>
@font-face {
   font-family: 'nunito';
   src: url('./assets/fonts/Nunito/Nunito-VariableFont_wght.ttf');
}

:root{
  --primary-color: #93c5fd;
  --secondary-color: #ff5656;
  --third-color: #374151;
}

*{
  font-family: nunito;
}
body {
  margin: 0;
  padding: 0;
  display: flex;
  height: 100vh;
}

h1, p{
  padding: 0;
  margin: 0;
}

#app {
  margin: 0;
}

</style>
