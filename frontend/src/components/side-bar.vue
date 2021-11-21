<script>
export default {
  name: 'Sidebar',
  data() {
    return {}
  },
  methods: {
    addTask() {
      this.$store.commit('addTask')
    },
  },
}
</script>

<template>
  <aside>
    <ul :class="$style.sidebar">
      <li @click="addTask">
        <font-awesome-icon icon="plus" />
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" module>
aside {
  position: absolute;
  right: 0;
  top: 0;
  padding: 24px 24px 0 0;
}

.sidebar {
  text-align: center;
  list-style-type: none;

  > li {
    display: inline-block;
    font-size: 24px;
  }
}
</style>
