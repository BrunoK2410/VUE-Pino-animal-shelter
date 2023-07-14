<template>
  <header>
    <router-link to="/home">
      <div class="name-wrap">
        <img src="../../assets/logo.png" />
        <div class="title">
          <h1>PINO</h1>
          <p>CROATIAN ASSOCIATION OF ANIMAL PROTECTORS</p>
        </div>
      </div>
    </router-link>
    <div class="visit-time">
      <h3>Visiting &nbsp; time</h3>
      <ul>
        <li>MON-FRI</li>
        <li>10:00-18:00</li>
        <li>SAT-SUN</li>
        <li>10:00-15:00</li>
      </ul>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: #e84135;
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
}

header h1 {
  color: white;
  margin: 15px 0px 0px 30px;
  font-size: 50px;
}

.name-wrap {
  display: flex;
}

img {
  margin-left: 200px;
  width: 90px;
  height: 90px;
}

.title {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.title > p {
  color: white;
  margin: 0px 0px 0px 30px;
}

.visit-time {
  height: 100px;
  width: 200px;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  background-color: #ec665d;
  margin-right: 200px;
  border-radius: 20px;
  font-family: "Open Sans", sans-serif;
}
h3 {
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: white;
}
ul {
  display: flex;
  flex-wrap: wrap;
  font-size: small;
  padding: 0;
  margin-left: 15px;
  overflow: auto;
}

@media (max-width: 320px), (min-width: 320px) {
  header {
    min-width: 320px;

    flex-wrap: wrap;
    height: fit-content;
  }

  header h1 {
    font-size: 36px;
  }

  img {
    margin-left: 10px;
  }

  .title > p {
    font-size: 12px;
  }

  .visit-time {
    height: fit-content;
    flex-direction: column;
    margin: auto auto 10px auto;
  }

  h3 {
    justify-content: center;
    margin: 0;
  }

  ul {
    flex-direction: column;
    align-content: center;
  }
}

@media (min-width: 609px) {
  .visit-time {
    margin: 10px auto 10px auto;
  }
}
</style>
