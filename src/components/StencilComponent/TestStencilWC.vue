<!--
 * @Date        : 2022-11-07 11:48:36
 * @Author      : ZhouQiJun
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2022-11-07 12:06:47
 * @Description : 
-->
<template>
  <div>
    <my-rating :max-value="10" :person="person" :personArray="[person]"></my-rating>
    <button type="button" @click="changePerson">修改person</button>
    <hr />
    <count-to v-if="show" :end-value="endValue" :precision="3">
      <span slot="left">工资：</span>
      <span slot="right">$</span>
    </count-to>
    <button @click="toggle">toggle</button>
  </div>
</template>

<script setup>
  const person = reactive({ name: 'jack' })
  function changePerson(params) {
    person.name = 'HELLO_WORLD'
  }

  const show = ref(true)
  const endValue = ref(2000)
  function toggle() {
    show.value = !show.value
    endValue.value = Math.random() * 10000
  }
  function updated({ detail }) {
    console.log('on-end***********')
    console.log(detail)
  }
  onMounted(() => {
    const countTo = document.querySelector('count-to')
    console.log(countTo)
    countTo.addEventListener('on-end', updated)
  })
</script>

<style lang="scss"></style>
