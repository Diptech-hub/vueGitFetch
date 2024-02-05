<template>
  <div>
    <h1>{{repository.name}}</h1>
    <h2>Description: {{ repository.description }}</h2>
    <h2>ID: {{ repository.id }}</h2>
    <h2>Stagazers Count: {{ repository.stargazers_count }}</h2>
    <h2>Fork: {{ repository.fork }}</h2>
    <h2>Forks Count: {{ repository.forks_count }}</h2>
    <h2>Language: {{ repository.language }}</h2>
    <h2>Date Created: {{ repository.created_at }}</h2>
    <h2>Size :{{ repository.size }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      repository: {},
    };
  },
  mounted() {
    this.fetchRepository();
  },
  methods: {
    async fetchRepository() {
      try {
        const id = this.$route.params.id;
        const response = await fetch(`https://api.github.com/repos/diptech-hub/${id}`);
        this.repository = await response.json();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
