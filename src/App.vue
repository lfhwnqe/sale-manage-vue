<template>
  <div id="app">
    <ui-header></ui-header>
    <div class="app-body">
      <transition :name="transitionName">
        <router-view class="main-view"></router-view>
      </transition>
    </div>
    <ui-footer></ui-footer>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        transitionName: 'fold-left'
      };
    },
    watch: {
      // watch $route 决定使用哪种过渡
      '$route'(to, from) {
        //to、from是最基本的路由对象，分别表示从(from)某个页面跳转到(to)另一个页面,to.path（表示要跳转到的路由地址），from.path同理。
        const routerDeep = ['/', '/next1'];
        //找到to.path和from.path在routerDeep数组中的下标
        const toDepth = routerDeep.indexOf(to.path);
        const fromDepth = routerDeep.indexOf(from.path);
        this.transitionName = toDepth > fromDepth ? 'fold-left' : 'fold-right';
      }
    }
  };
</script>
<style lang="scss" scoped>
  .main-view {
    height: 84vh;
    width: 100vw;
    overflow: auto;
    position: absolute;
  }

  .app-body {
    height: 84vh;
    width: 100vw;
  }

  .fold-left-enter-active {
    animation-name: fold-left-in;
    animation-duration: .3s;
  }

  .fold-left-leave-active {
    animation-name: fold-left-out;
    animation-duration: .3s;
  }

  @keyframes fold-left-in {
    0% {
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      /* visibility: visible; */
    }
    /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fold-left-out {
    0% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
    100% {
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      /* visibility: hidden; */
    }
  }

  .fold-right-enter-active {
    animation-name: fold-right-in;
    animation-duration: .3s;
  }

  .fold-right-leave-active {
    animation-name: fold-right-out;
    animation-duration: .3s;
  }

  @keyframes fold-right-in {
    0% {
      width: 100%;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
      /* visibility: visible; */
    }
    /*50% {
      transform: translate3d(50%, 0, 0);
    }*/
    100% {
      width: 100%;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fold-right-out {
    0% {
      width: 100%;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    /*50% {
      transform: translate3d(-50%, 0 , 0);
    }*/
    100% {
      width: 100%;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
      /* visibility: hidden; */
    }
  }
</style>

