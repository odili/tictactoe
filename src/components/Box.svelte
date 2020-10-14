<script lang="ts">
  export let play;
  export let winner;
  $: won = winner === play;
</script>

<div class:winning={won} on:click>{play}</div>

<style>
  div {
    width: 150px;
    height: 150px;
    font-size: 5rem;
    padding: 1.2rem;
    border: 1px solid gray;
    cursor: pointer;
  }
  .winning {
    background-color: purple;
    color: #fff;
  }
</style>
