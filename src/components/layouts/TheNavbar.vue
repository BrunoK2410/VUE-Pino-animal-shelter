<template>
  <nav class="navbar">
    <ul class="nav-links">
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>
      <div class="menu">
        <li><router-link to="/home">Home</router-link></li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li class="adopt">
          <a>Adopt</a>
          <ul class="dropdown">
            <li>
              <router-link to="/dog">Dogs</router-link>
            </li>
            <li>
              <router-link to="/cat">Cats</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </div>
    </ul>
  </nav>
</template>

<script>
export default {
  provide() {
    return {
      animals: this.storedAnimals,
    };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ec665d;
  color: #fff;
  font-family: "Open Sans", sans-serif;
  max-height: fit-content;
}

a {
  color: #fff;
  cursor: pointer;
}

.menu {
  display: flex;
  gap: 16px;
  font-size: 18px;
}
.menu li:hover {
  background-color: #e84135;
  border-radius: 5px;
  transition: 0.3s ease;
}
.menu li {
  padding: 5px 14px;
}

.adopt {
  position: relative;
}

.dropdown {
  background-color: #ec665d;
  border: 1px solid #494646;
  padding: 16px 0;
  position: absolute;
  display: none;
  border-radius: 8px;
  top: 35px;
  z-index: 1;
}

.dropdown li + li {
  margin-top: 10px;
}

.dropdown li {
  padding: 0.5em 1em;
  width: 8em;
  text-align: center;
}

.dropdown li:hover {
  background-color: #e84135;
}
.adopt:hover .dropdown {
  display: block;
}
input {
  display: none;
}
.hamburger {
  display: none;
  font-size: 24px;
  user-select: none;
}

a.router-link-active {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .navbar {
    min-width: 320px;
  }
  .menu {
    display: none;
    flex-direction: column;
    position: relative;
    background-color: #ec665d;
    right: 0;
    left: 0;
    text-align: center;
    padding: 16px 0;
  }
  .menu li:hover {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e84135;
    transition: 0.3s ease;
  }

  .menu li + li {
    margin-top: 12px;
  }

  input:checked ~ .menu {
    display: block;
  }

  .hamburger {
    display: block;
  }

  .dropdown {
    left: 0;
    top: 30px;
    transform: translateX(35%);
  }

  .dropdown li:hover {
    background-color: #e84135;
  }
}
</style>
