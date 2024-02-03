<template>
    <div v-if="hasError">
      <h2>Error occurred:</h2>
      <p>{{ errorMessage }}</p>
      <!-- Additional error handling UI or retry logic -->
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        hasError: false,
        errorMessage: ' ',
      };
    },
    errorCaptured(err, vm, info) {
      this.hasError = true;
      this.errorMessage = err.message || 'An error occurred';
      console.error('Component Error:', err, info);
      // Optionally perform additional error handling/logging here
      return false; // Prevent error from propagating further
    },
  };
  </script>
  