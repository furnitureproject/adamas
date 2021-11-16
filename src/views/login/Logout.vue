<template>
  <div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  created() {
    this.logout();
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(['changeisLoginAct']),
    logout() {
      const token = sessionStorage.getItem('token');
      if (token !== null) {
        sessionStorage.removeItem('token');
        this.changeisLoginAct(false);
        this.$router.push('/');
      }
    },
  },
};
</script>

<style>

</style>
