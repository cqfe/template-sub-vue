<template>
  <a-card class="pageWrapper">
    <TableSearch v-model:value="listQuery" :fields="fields" @reset="onReset" @search="onSearch">
      <template #handle>
        <a-space>
          <a-button type="primary">新建</a-button>
        </a-space>
      </template>
    </TableSearch>
    <a-table
      :columns="[]"
      row-key="id"
      :loading="loading"
      :data-source="dataSource"
      :pagination="pagination"
      :scroll="{ x: `calc(90vw - 100px)`, y: `calc(100vh - 320px)` }"
      :row-selection="{ selectedRowKeys, onChange: onTableSelectChange }"
      @change="onTableChange"
    ></a-table>
  </a-card>
</template>

<script setup>
import TableSearch from '@iot-os/components/TableSearch/index.vue'
import { computed, onMounted } from 'vue'
import { usePaginationReq } from '@iot-os/hooks/usePaginationReq'
import { useState } from '@iot-os/hooks/useState'

// 查询表单字段
const fields = computed(() => {
  return [{ name: 'name', placeholder: 'placeholder', type: 'input' }]
})
// 表格相关方法和数据
const { dataSource, pagination, loading, fetchList, resetPage } = usePaginationReq(async () => ({
  status: true,
  data: {
    total: 11,
    records: new Array(10).fill(0).map((_, i) => ({ id: i })),
  },
}))
// 查询表单
const { state: listQuery, reset } = useState({
  name: undefined,
})
// 表格选中值
const selectedRowKeys = ref([])
// 获取表格数据
function fetchData(refresh) {
  if (refresh) resetPage()
  fetchList(listQuery)
}
// 表单查询条件改变
function onTableChange(page) {
  if (page.current) changePage(page, false)
  nextTick(() => {
    fetchData()
  })
}
// 重置查询条件
function onReset() {
  reset()
  fetchData(true)
}
// 表单搜索
function onSearch() {
  fetchData(true)
}
// 表格选中
function onTableSelectChange(selectedRowKeys) {
  selectedRowKeys.value = selectedRowKeys
}

onMounted(() => {
  fetchData(true)
})
</script>

<style scoped lang="scss"></style>
