<script lang="ts">
  import Box from './components/Box.svelte';
  import gameStore from './game-store';

  let numberOfPlayers = 0;
  let board = Array(9).fill('');
  let nextPlayer = '';
  let winner;
  // let player: string;

  gameStore.subscribe((state) => {
    if (!state) {
      return;
    }

    winner = state.winner;
    nextPlayer = state.nextPlayer;
    board = state.board;
    numberOfPlayers = state.numberOfPeeps;
  });
  // console.log(board);
</script>

<main>
  <h1>Tic Tac Toe</h1>
  <h2>number of people playing {numberOfPlayers}</h2>
  {#if winner === 'TIE'}
    <h3>Tie Game !!!</h3>
  {:else if winner}
    <h3>Player {winner} won !!!</h3>
  {:else}
    <h3>Player {nextPlayer}</h3>
  {/if}
  <div class="board">
    {#each board as box}
      <Box play={box} />
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
