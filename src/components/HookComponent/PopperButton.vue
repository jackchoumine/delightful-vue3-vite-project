<template>
  <div>
    <h1>hook 与第三方库</h1>
    <button
      ref="btn"
      @mouseover="onMouseover"
      @mouseout="onMouseout"
      style="background-color: lightgreen; height: 40px; width: 100px"
    >
      按钮
    </button>
    <div
      v-show="isOver"
      ref="tooltip"
      style="background-color: lightyellow; height: 20px; width: 150px"
    >
      tool tip
    </div>
    <button type="button" @click="placement = 'top'">修改位置</button>
  </div>
</template>

<script lang="ts" setup>
  import { createPopper } from '@popperjs/core'
  const isOver = ref(false)
  function onMouseover() {
    isOver.value = true
  }
  function onMouseout() {
    isOver.value = false
  }
  const btn = ref()
  const tooltip = ref()

  const placement = ref('right')

  watchEffect(
    () => {
      console.log('watchEffect')
      createPopper(btn.value, tooltip.value, {
        placement: placement.value,
      })
    },
    {
      flush: 'post',
    }
  )
</script>
