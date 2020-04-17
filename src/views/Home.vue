<template>
  <div class="container">
    <div class="row">
      <div class="col-4" v-for="(record, index) in records" :key="index">
        <Card :object="record" />
      </div>
    </div>
    <div class="pagination">
      <Pagination
        :page="page"
        @next="setPageAndLoad(page + 1)"
        @prev="setPageAndLoad(page - 1)"
      />
    </div>
  </div>
</template>

<script>
import api from '@/utils/api'

export default {
  components: {
    Card: () => import('@/components/Card'),
    Pagination: () => import('@/components/Pagination')
  },
  data: () => ({
    records: null,
    info: null,
    page: 1
  }),
  methods: {
    setPageAndLoad(page) {
      if (page > 0 && page <= this.info.pages) {
        this.page = page
        this.loadPage(page)
      }
    },
    async loadPage(page) {
      let data = (await api.getObjects(20, page)).data
      this.records = data.records
      this.info = data.info
    }
  },
  mounted() {
    this.loadPage(1)
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 30px;
  margin-bottom: 30px;
}

.pagination {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 15px;
}
</style>
