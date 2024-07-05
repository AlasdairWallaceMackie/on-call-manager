<script>
  import { fly } from 'svelte/transition'

  import { isOnMainScreen } from '../store'
  import Screen from "./Screen.svelte"
	import ArrowRightIcon from '../icons/ArrowRightIcon.svelte'

  let employeeNames = [
  "Tuomas Holopainen",
  "Emppu Vuorinen",
  "Troy Donockley",
  "Floor Jansen",
  "Kai Hahto",
  "Jukka Koskinen",
  ]

</script>

<div
  in:fly={{ duration: 300, x: -200, delay: 300}}
  out:fly={{ duration: 300, x: -200}}
>
  <Screen id="on-call-controls" heading="On Call Manager">
    <button on:click={isOnMainScreen.toggle} class="transition-icon btn btn-primary">
      <ArrowRightIcon />
    </button>

    <div class="row">
      <div class="col col-12-md">
        {#each employeeNames as name}
          <div class="draggable-row">
            {name}
          </div>
        {/each}
        
        <button class="btn btn-primary">Submit Changes</button>
      </div>
      <div class="col">
        <fieldset>
          <legend>Current Status</legend>
        
          All Ok
        </fieldset>
      </div>
    </div>
  </Screen>
</div>

<style>
  .draggable-row {
    border: 1px solid black;
    margin: 10px 0;
    padding: 10px;
  }

  .transition-icon {
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
