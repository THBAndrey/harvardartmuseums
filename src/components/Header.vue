<template>
  <header>
    <div class="container">
      <router-link to="/">Главная</router-link>
      <router-link to="/favorites">Избранные</router-link>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #1b1a1f;
  box-shadow: 0px 3px 20px 0px black;

  .container {
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    text-decoration: none;
    color: #626262;
    transition: color 0.2s;

    &:hover {
      color: #3c59f0;
    }

    &.router-link-exact-active {
      color: white;
    }
  }
}
</style>
