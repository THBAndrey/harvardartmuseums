<template>
  <div>
    <div
      class="card"
      :style="
        `background-image: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%), url(${
          object.images
            ? object.images[0].baseimageurl + '?height=290'
            : 'default.png'
        })`
      "
      @click.self="showModal = true"
    >
      <button
        class="like-button"
        @click="
          isFavorite ? removeFromFavorites(object) : addToFavorites(object)
        "
      >
        <svg
          width="29"
          height="26"
          viewBox="0 0 30 28"
          xmlns="http://www.w3.org/2000/svg"
          stroke-width="2"
          stroke="currentColor"
          :fill="isFavorite ? 'currentColor' : 'transparent'"
        >
          <path
            d="M 14.321 26.262 C 14.733 26.663 15.393 26.663 15.805 26.262 L 26.938 15.437 C 30.438 12.035 30.438 6.508 26.938 3.106 C 23.689 -0.053 18.567 -0.269 15.063 2.459 C 11.559 -0.269 6.437 -0.053 3.188 3.106 C -0.312 6.508 -0.312 12.035 3.188 15.437 L 14.321 26.262 Z"
          ></path>
        </svg>
      </button>
    </div>
    <Modal :object="object" v-model="showModal" />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'

export default {
  components: {
    Modal: () => import('@/components/Modal')
  },
  props: {
    object: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    showModal: false
  }),
  computed: {
    ...mapGetters({
      favorites: 'favorites/getFavorites'
    }),
    isFavorite() {
      return Boolean(this.favorites.find(el => el.id === this.object.id))
    }
  },
  methods: {
    ...mapMutations({
      addToFavorites: 'favorites/addToFavorites',
      removeFromFavorites: 'favorites/removeFromFavorites'
    })
  }
}
</script>

<style lang="scss" scoped>
.card {
  height: 290px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  background-position: center, center;
  background-size: cover, cover;

  .like-button {
    opacity: 0;
    border-radius: 50%;
    box-sizing: content-box;
    width: 30px;
    height: 30px;
    padding: 6px 4px 2px 4px;
    border: none;
    outline: none;
    background: none;
    color: white;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background: rgba(255, 255, 255, 0.25);
    }

    &:active {
      background: rgba(255, 255, 255, 0.5);
    }
  }

  &:hover .like-button {
    opacity: 1;
  }
}
</style>
