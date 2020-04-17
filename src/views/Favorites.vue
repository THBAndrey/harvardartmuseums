<template>
  <div class="container">
    <div class="row">
      <div class="col-4" v-for="(record, index) in records" :key="index">
        <Card :object="record" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
    Card: () => import('@/components/Card')
  },
  computed: {
    ...mapGetters({
      records: 'favorites/getFavorites'
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
