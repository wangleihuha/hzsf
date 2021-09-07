<template>
  <div>
    <ul>
      <li>
        <router-link to="#">学校概况</router-link>
        <!-- 下拉框 -->
        <div class="dropdown">
          <dl class="content">
            <dd v-for="i in 9" :key="i">balabala..</dd>
          </dl>
          <div class="dropdown-img"><img src="/img/menu-img.jpg" alt=""></div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped lang="scss">
  .dropdown{
    width: 200px;
    height: 55px;
    background-color: black;
    .content{
      display: flex;
      background-color: red;
      >dd{
        width: 130px;
        background-color: yellow;
        padding: 10px;
      }
    }
  }
</style>