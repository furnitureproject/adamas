<template>
  <div>
    <table class="type09">
      <thead>
      <tr>
        <th scope="cols"></th>
        <th scope="cols">상품코드</th>
        <th scope="cols">상품명</th>
        <th scope="cols">옵션명</th>
        <th scope="cols">가격</th>
        <th scope="cols">등록일</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th scope="row"></th>
        <td>202108110001</td>
        <td>desk</td>
        <td>화려한 네발</td>
        <td>444,444원</td>
        <td>2021-08-11</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {

};
</script>

<style lang='scss' scoped>
table.type09 {
  border-collapse: collapse;
  text-align: left;
  line-height: 1.5;
  margin-top: 82px;
}
table.type09 thead th {
  padding: 10px;
  font-weight: bold;
  vertical-align: top;
  // color: #369;
  // border-bottom: 3px solid #036;
  color: #2F4858;
  border-bottom: 3px solid #2F4858;
}
table.type09 tbody th {
  width: 150px;
  padding: 10px;
  font-weight: bold;
  vertical-align: top;
  border-bottom: 1px solid #ccc;
  background: #f3f6f7;
}
table.type09 td {
  width: 350px;
  padding: 10px;
  vertical-align: top;
  border-bottom: 1px solid #ccc;
}
</style>
