<template>
  <section class="container posts-page">
    <el-card>
      <div slot="header" class="clearfix">
        <span>新着登録</span>
      </div>
      <el-table
      :data="showPosts"
      style="width:100%"
      class="table" 
      >
      <el-table-column
      prop="title"
      label="タイトル">
      </el-table-column>
      <el-table-column
      prop="user.id"
      label="投稿者"
      width="180">
      </el-table-column>
      <el-table-column
      prop="created_at"
      label="投稿日時"
      width="240">
      </el-table-column>
      </el-table>
    </el-card>
  </section>
</template>

<script>
export default {
  computed:{
    showPosts(){
      return [
        {
          id: '001',
          title: 'title1',
          body: 'body1',
          created_at: '2019/09/23 12:00:00',
          user:{
            id: 'ike01'
          }
        },
        {
          id: '002',
          title: 'title2',
          body: 'body2',
          created_at: '2019/09/23 12:00:00',
          user:{
            id: 'ike02'
          }
        },
      ]
    }
  }
}
</script>

<style>
.posts-page .el-table__row{
  cursor: pointer;
}
</style>