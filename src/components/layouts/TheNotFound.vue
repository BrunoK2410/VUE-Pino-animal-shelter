<template>
  <div>
    <img src="../../assets/dogerror.png" />
    <h1>404</h1>
    <h3>Oops,an error occured</h3>
    <p>The page you are looking for does not exist</p>
    <router-link to="/home">
      <base-button>&larr; Back to home page</base-button>
    </router-link>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

h1,
h3 {
  color: #575555;
}
</style>
