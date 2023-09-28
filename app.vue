<template>
  <div v-if="firebaseUser">
    <button class="button" @click="signOut">Sign Out </button>
    <pre>{{ firebaseUser }}</pre>
  </div>
  <div v-else>
    <button class="button" @click="signIn">Sign In</button>
    <p>User signed Out</p>
  </div>

</template>

<script setup>
const firebaseUser = useFirebaseUser();

const credentials = ref();

async function signIn() {
  credentials.value = await signInUser("doe@gmail.com", "doe@gmail.com")
    .then(_ => initUser())
    .catch((error) => {throw new Error(error)});
}

async function signOut() {
  credentials.value = await signOutUser()
}
</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";
</style>