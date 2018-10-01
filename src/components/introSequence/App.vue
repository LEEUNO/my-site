<template>
  <div>
    <div style="display:none;">
      <button @click="startAnimation(true)">
        start
      </button>
      <button @click="startAnimation(false)">
        reset
      </button>
      <!-- <img id="return" ref="return" class="return-icon" src="../../../static/assets/return-icon.svg" alt="return"> -->
      <svg id="return-icon" width="100%" height="100%" viewBox="0 0 28 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->
          <title>return-icon</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Page-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="return-icon" transform="translate(-2.000000, -5.000000)">
                  <g>
                      <rect id="icon-wrapper" fill-rule="nonzero" x="0" y="0" width="32" height="32"></rect>
                      <path d="M12.6189932,11 L23.5,11 C26.5375661,11 29,13.4624339 29,16.5 L29,16.5 C29,19.5375661 26.5375661,22 23.5,22 L2,22" id="return-line" stroke="#000000" stroke-width="1.88571429" fill-rule="nonzero"></path>
                      <polyline id="return-arrow" stroke="#000000" stroke-width="1.88571429" fill-rule="nonzero" transform="translate(16.949747, 10.949747) rotate(-315.000000) translate(-16.949747, -10.949747) " points="13.4497475 7.44974747 13.4497475 14.4497475 20.4497475 14.4497475"></polyline>
                  </g>
              </g>
          </g>
      </svg>
    </div>
    <Container></Container> 
  </div>
</template>

<script>
import Container from './components/Container'
export default {
  name: 'TEST',
  components: {
    Container
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
