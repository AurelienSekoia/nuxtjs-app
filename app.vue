<template>
  <div>
    <button class="button" @click="signIn">Sign In</button>
    <button class="button" @click="signOut">Sign Out </button>
  </div>
</template>

<script setup>

async function signIn() {
  const credentials = await signInUser("doe@gmail.com", "doe@gmail.com");
  console.log("credentials", credentials);
}

async function signOut() {
  await signOutUser()
}
</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>