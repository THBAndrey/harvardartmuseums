<template>
  <div v-if="show" class="wrapper" @click.self="$emit('change', false)">
    <div class="window">
      <img
        :src="
          object.images
            ? object.images[0].baseimageurl + '?height=400'
            : 'default.png'
        "
      />
      <div class="info-block">
        <div class="title">Title</div>
        <div class="desc">{{ object.title }}</div>
        <div class="title">Object Number</div>
        <div class="desc">{{ object.objectnumber }}</div>
        <div class="title">People</div>
        <div class="desc">
          <div v-for="(item, index) in object.people" :key="index">
            {{ item.name }}
          </div>
        </div>
        <div class="title">Date</div>
        <div class="desc">{{ object.dated }}</div>
        <div class="title">Century</div>
        <div class="desc">{{ object.century }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: Boolean,
    object: Object
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;

  .window {
    width: 800px;
    max-width: 100vw;
    max-height: 100vh;
    background-color: #1b1a1f;
    border-radius: 8px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 400px;
    }

    .info-block {
      margin-top: 16px;

      .title {
        color: #999;
      }
      .desc {
        margin-bottom: 16px;
      }
    }
  }
}
</style>
