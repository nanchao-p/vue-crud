<template>
  <div id="app">
    <div class="ui inverted segment navbar">
      <div class="ui center aligned container">
        <div class="ui large secondary inverted pointing menu compact">
          <router-link to="/tasks" exact class="item">
            <i class="tasks icon"></i> Tasks
          </router-link>
          <router-link to="/tasks/new" exact class="item">
            <i class="plus circle icon"></i> New
          </router-link>
        </div>
      </div>
    </div>
    <div class="ui text container">
      <div class="ui one column grid">
        <div class="column">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app > .navbar {
  margin-bottom: 1.5rem;
}
input {
  width: 300px;
}
.label {
  width: 120px;
}
.input {
  margin-bottom: 10px;
}
button.ui.button {
  margin-top: 15px;
  display: block;
}
</style>
