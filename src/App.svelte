<script lang="ts">
  import Box from './components/Box.svelte';

  let numberOfPlayers = 1;
  let board = Array(9).fill(null);
  let player: string;
</script>

<main>
  <h1>Tic Tac Toe</h1>
  <h2>number of people playing {numberOfPlayers}</h2>
  <h3>Player {(player = 'X')}</h3>
  <div class="board">
    {#each board as box, index}
      <Box play={index} />
    {/each}
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ce2cce;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .board {
    width: 450px;
    height: 450px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
    align-content: center;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
