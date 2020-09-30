<template>
  <table class="border-collapse border-2 border-gray-500">
    <thead>
      <tr>
        <th
          v-for="col in columns"
          :key="col.title"
          class="bg-gray-600 border border-gray-400 px-4 py-2 text-white"
        >
          {{ col.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(val, index) in tableData"
        :key="index"
      >
        <td
          v-for="col in columns"
          :key="col.key"
          class="border border-gray-400 p-2"
        >
          {{ val[col.key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  name: 'AppTable',

  props: {
    columns: {
      type: Array,
      required: true
    },
    tableData: {
      type: [Array, Object],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
