<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 80px;
  height: 100%;
}
</style>

<template>
  <div id="app">
    <dynamic-editor></dynamic-editor>
  </div>
</template>

<script>
import DynamicEditor from "./components/DynamicEditor";

export default {
  name: "app",
  components: {
    DynamicEditor
  }
};
</script>
