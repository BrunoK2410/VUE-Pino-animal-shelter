<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<style scoped>
.content {
  font-family: "Open Sans", sans-serif;
  border: 3px solid black;
  border-radius: 24px;
  margin: 40px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background-color: #e84135;
  color: white;
}

@media (max-width: 320px), (min-width: 320px) {
  .content {
    margin: 20px;
  }
}

@media (min-width: 768px) {
  .content {
    margin-right: 256px;
  }
}
</style>
