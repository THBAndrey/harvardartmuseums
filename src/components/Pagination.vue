<template>
  <div class="pagination">
    <button @click="$emit('prev')">Prev</button>
    <span>{{ page }}</span>
    <button @click="$emit('next')">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    page: Number
  }
}
</script>

<style lang="scss" scoped>
$border: 1px solid currentColor;
.pagination {
  > span,
  button {
    border-top: $border;
    border-bottom: $border;
    padding: 6px 8px;
    font-size: 1em;
    line-height: 1em;
  }

  button {
    border: $border;
    background: none;
    color: currentColor;
    outline: none;
    cursor: pointer;

    &:first-child {
      border-radius: 4px 0 0 4px;
    }
    &:last-child {
      border-radius: 0 4px 4px 0;
    }
  }
}
</style>
