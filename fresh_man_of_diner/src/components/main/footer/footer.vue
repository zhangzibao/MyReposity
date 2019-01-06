<template>
    <nav style="padding-bottom: 5px">
        <router-link v-for="item in nav" :to="item.path" @click="selectNav(isselect)" exact>
            <svg class="icon" aria-hidden="true">
                <!--<use :xlink:href="isselect==title?item.icon1:item.icon0"></use>-->
                <use :xlink:href="item.icon0"></use>
            </svg>
            {{item.title}}
        </router-link>

    </nav>
</template>

<script scoped>
  export default {
    data() {
      return {
        isselect: '点餐',
        nav: [{ title: '点餐', path: '/my_index', icon0: '#icon-shouye', icon1: '' },
          { title: '活动', path: '/service', icon0: '#icon-liwu', icon1: '' },
          { title: '订单', path: '/my_order', icon0: '#icon-dingdan', icon1: '' },
          { title: '我的', path: '/about_us', icon0: '#icon-wode', icon1: '' }]
      }
    },
    methods: {
      selectNav(title) {
        this.isselect = title
      }
    },
    mounted() {
    }
  }
</script>

<style scoped lang="less">
    nav {
        position: fixed;
        bottom: 0;
        width: 100%;
        z-index: 20;
        min-height: 1rem;
        background:#fff;
        border-top: 1px #f4f4f4 solid;
        display: flex;
        justify-items: center;
        justify-content:space-around;
        padding-top: .2rem;
    }
    nav a {
        display: flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        line-height: 1.3;
        color: #262626;
        font-size: 12px;
    }

    .router-link-active {
        color: #f4ea2a;
    }

    .icon {
        width: 2.4em;
        height: 2.4em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }

</style>
