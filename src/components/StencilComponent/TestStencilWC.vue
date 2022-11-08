<!--
 * @Date        : 2022-11-07 11:48:36
 * @Author      : ZhouQiJun
 * @LastEditors : ZhouQiJun
 * @LastEditTime: 2022-11-07 12:06:47
 * @Description : 
-->
<template>
  <div>
    <hello-stencil
      ref="hs"
      :name="name"
      :attr-array.prop="attrArray"
      :array.prop="array"
      :person.prop="person"
      :attr-person.prop="attrPerson"
      @my-click="myClick"
    ></hello-stencil>
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
  const name = '测试stencilComponent'
  const attrArray = reactive([{ name: 'vue3' }])
  const array = reactive([{ name: 'vue3' }])
  const person = reactive({ name: 'jack' })
  const attrPerson = reactive({ name: 'jack' })

  function myClick({ type }) {
    console.log(type)
  }
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
    console.log('on-end**********')
    console.log(detail)
  }
  const hs = ref()
  onMounted(() => {
    const countTo = document.querySelector('count-to')
    console.log(countTo)
    countTo.addEventListener('on-end', updated)
    console.log(hs.value)
    // hs.value.person = person.value
    // hs.value.setAttribute('person', person.value)
    hs.value.attrPerson = attrPerson.value
  })
</script>

<style lang="scss"></style>
