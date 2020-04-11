<template>
  <div class="search-content">
    <div class="page-menu-search" >
        <a-input-search
        style="width: 80%; max-width: 522px;"
        placeholder="请输入..."
        size="large"
        enterButton="搜索"
        @search="searchData"
        />
    </div>
    <div class="search-content-list">
      <div class="ant-pro-pages-list-applications-filterCardList">
        <a-list :loading="loading" :data-source="data" :grid="{ gutter: 24, xl: 4, lg: 3, md: 3, sm: 2, xs: 1 }" style="margin-top: 24px;">
            <a-list-item slot="renderItem" slot-scope="item">
            <a-card :body-style="{ paddingBottom: 20 }" hoverable>
                <a-card-meta :title="item.title">
                <template slot="avatar">
                    <a-avatar size="small" :src="item.avatar"/>
                </template>
                </a-card-meta>
                <template slot="actions">
                <a-tooltip title="下载">
                    <a-icon type="download" />
                </a-tooltip>
                <a-tooltip title="编辑">
                    <a-icon type="edit" />
                </a-tooltip>
                <a-tooltip title="分享">
                    <a-icon type="share-alt" />
                </a-tooltip>
                <a-dropdown>
                    <a class="ant-dropdown-link">
                    <a-icon type="ellipsis" />
                    </a>
                    <a-menu slot="overlay">
                    <a-menu-item>
                        <a href="javascript:;">1st menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a href="javascript:;">2nd menu item</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a href="javascript:;">3rd menu item</a>
                    </a-menu-item>
                    </a-menu>
                </a-dropdown>
                </template>
                <div class="">
                <card-info active-user="100" new-user="999"></card-info>
                </div>
            </a-card>
            </a-list-item>
        </a-list>
      </div>
    </div>
  </div>
</template>

<script>
import CardInfo from './components/CardInfo'

export default {
    name: 'VideoList',
    components: {
        CardInfo
    },
    data () {
        return {
            loading: true,
            data: [
                { title: 'aaa', avatar: '1111111' },
                { title: 'aaa', avatar: '1111111' },
                { title: 'aaa', avatar: '1111111' },
                { title: 'aaa', avatar: '1111111' },
                { title: 'aaa', avatar: '1111111' },
                { title: 'aaa', avatar: '1111111' },
                { title: 'aaa', avatar: '1111111' },
                { title: 'aaa', avatar: '1111111' },
                { title: 'aaa', avatar: '1111111' }
            ]
        }
    },
     mounted () {
         this.loading = false
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
  .search-head{
    background-color: #fff;
    margin: -25px -24px -24px;
    .search-input{
      text-align: center;
      margin-bottom: 16px;
    }
  }
  .search-content{
    background-color: #fff;
    margin: 15px;
  }
  .page-menu-search{ padding:20px; }
</style>
