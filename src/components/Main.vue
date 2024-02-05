<template>
  <div>
    <h1 class="text-4xl font-bold m-8">My Github Repositories</h1>
      <button v-for="repo in repositories" :key="repo.id" class="m-1 bg-blue-500 hover:bg-blue-900">
        <router-link :to="{ name: 'Repo', params: { id: repo.name } }" class="text-white hover:text-white">{{ repo.name }}</router-link>
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