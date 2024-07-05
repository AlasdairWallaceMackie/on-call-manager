<script>
  import { fly } from 'svelte/transition'

  import { isOnMainScreen } from '../store';

  import Screen from "./Screen.svelte";
	import ArrowLeftIcon from '../icons/ArrowLeftIcon.svelte';

  // List of Google accounts that are permitted to log in
  let users = [
    'amanager@company.com',
    'bmanager@company.com',
  ]
</script>

<div
  in:fly={{ duration: 300, x: 200, delay: 300}}
  out:fly={{ duration: 300, x: 200}}
>
  <Screen id="authorized-users" heading="Authorized Users">
    <button on:click={isOnMainScreen.toggle} class="transition-icon btn btn-primary">
      <ArrowLeftIcon />
    </button>
    <div class="row">
      <div class="col">
        <ul>
          {#each users as user}
            <li>{user}</li>
          {/each}
        </ul>
      </div>
    </div>
  
  </Screen>
</div>

<style>
  .transition-icon {
    position: absolute;
    left: 0;
    top: 0;
  }
</style>
