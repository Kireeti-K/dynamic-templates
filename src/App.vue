<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 50px;
  height: 100%;
  font-size: 14px;
}
</style>

<template>
  <div id="app">
    <h3 style="margin-bottom: 20px; text-align: center; color: #4169E1;">DYNAMIC TEMPLATES</h3>
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
