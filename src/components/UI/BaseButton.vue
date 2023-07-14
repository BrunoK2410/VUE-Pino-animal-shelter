<template>
  <button><slot></slot></button>
</template>

<style scoped>
button {
  padding: 10px;
  margin-top: 10px;
  outline: none;
  border: none;
  border-radius: 3px;
  background: white;
  color: black;
  font-weight: bold;
  cursor: pointer;
  transition: 0.4s ease;
}
button:hover {
  background: #e84135;
  color: white;
}
</style>
