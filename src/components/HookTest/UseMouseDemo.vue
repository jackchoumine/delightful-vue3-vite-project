<template>
  <div>
    <Follower>
      <div class="follower-content">I follow your mouse</div>
    </Follower>

    <pre>x: {{ x }}, y: {{ y }}</pre>
  </div>
</template>

<script lang="ts" setup>
  import { useMouseFollower, useMouse } from '@/hooks'
  const { x, y } = useMouse()
  const Follower = useMouseFollower(() => ({ x: x.value, y: y.value }))
</script>

<style scoped lang="css">
  .follower-content {
    background: white;
    color: black;
    font-size: 14px;
    padding: 10px 12px;
    border-radius: 6px;
  }
</style>
