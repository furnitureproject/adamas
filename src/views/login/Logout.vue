<template>
  <div>
  </div>
</template>

<script>
export default {
  created() {
    this.logout();
  },
  data() {
    return {
    };
  },
  methods: {
    async logout() {
      const token = await sessionStorage.getItem('token');
      if (token !== null) {
        await sessionStorage.removeItem('token');
        this.$router.push('/');
      }
    },
  },
};
</script>

<style>

</style>
