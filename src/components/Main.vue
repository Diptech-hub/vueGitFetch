<template>
  <div>
    <h1 class="text-3xl font-bold underline p-6">My Github Repositories</h1>
      <button v-for="repo in repositories" :key="repo.id">
        <router-link :to="{ name: 'Repo', params: { id: repo.name } }">{{ repo.name }}</router-link>
      </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      repositories: [],
    };
  },
  mounted() {
    this.fetchRepositories();
  },
  methods: {
    async fetchRepositories() {
      try {
        const response = await fetch(`https://api.github.com/users/diptech-hub/repos`);
        const data = await response.json();
        this.repositories = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>