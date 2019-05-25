<style>
.dynamic-card {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
}
</style>

<template>
  <div class="dynamic-card" v-bind="$attrs" v-on="$listeners">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "DynamicCard"
};
</script>
