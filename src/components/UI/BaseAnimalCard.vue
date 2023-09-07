<template>
  <div class="card">
    <slot name="card"></slot>
    <div class="info">
      <slot name="info"></slot>
    </div>
  </div>
</template>

<style scoped>
.card {
  flex: 0 0 21%;
  height: 330px;
  border-radius: 15px;
  padding: 24px;
  position: relative;
  display: flex;
  align-items: flex-end;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.5);
  margin: 50px auto 50px auto;
}
.card:hover {
  transform: translateY(20px);
}
.card:hover:before {
  opacity: 1;
}
.card:hover .info {
  opacity: 1;
  transform: translateY(0px);
}
.card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2;
  transition: 0.5s;
  opacity: 0;
}

.info {
  position: relative;
  z-index: 3;
  color: white;
  opacity: 0;
  transform: translateY(30px);
  transition: 0.5s;
  font-size: 18px;
}

@media (max-width: 768px) {
  .card {
    width: 140px;
    height: 225px;
    flex: 0 0 47%;
    margin: 20px auto 30px auto;
  }
}

@media (min-width: 768px) {
  .card {
    flex: 0 0 30%;
    height: 225px;
    margin: 50px auto 50px auto;
  }
}

@media (min-width: 1024px) {
  .card {
    flex: 0 0 22%;
  }
}
</style>
