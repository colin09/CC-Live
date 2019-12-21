<template>
    <div class="page-menu-search" >
        <a-input-search
        style="width: 80%; max-width: 522px;"
        placeholder="请输入..."
        size="large"
        enterButton="搜索"
        @search="searchData"
        />
    </div>
</template>

<script>
export default {
    name: 'VideoList',
    data () {
        return {
        }
    },
     mounted () {
     },
     methods: {
        searchData (value, event) {
            // alert('dddd')
            console.log('search...')
        }
     }
}
</script>

<style lang="less" scoped>
  .content {
    background-color: #fff;
    margin: 24px 24px 0;
  }
</style>
