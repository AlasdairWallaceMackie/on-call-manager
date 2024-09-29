<script>
  import { fly } from 'svelte/transition'
  import { flip } from 'svelte/animate';

  import Screen from '../components/Screen.svelte';
	import ArrowRightIcon from '../icons/ArrowRightIcon.svelte'
	import { dndzone } from 'svelte-dnd-action';

  let items = [
    { id: 1, name: "Tuomas Holopainen" },
    { id: 2, name: "Emppu Vuorinen" },
    { id: 3, name: "Troy Donockley" },
    { id: 4, name: "Floor Jansen" },
    { id: 5, name: "Kai Hahto" },
    { id: 6, name: "Jukka Koskinen" },
  ]

  let flipDurationMs = 100

  function setItems(e) {
    items = e.detail.items
  }

</script>

<div
  in:fly={{ duration: 300, x: -200, delay: 300}}
  out:fly={{ duration: 300, x: -200}}
>
  <Screen id="on-call-controls" heading="On Call Manager">
    <a href="authorized_users" class="transition-icon btn btn-primary">
      <ArrowRightIcon />
    </a>

    <div class="row">
      <div
        class="col col-12-md"
        use:dndzone="{{items, flipDurationMs}}"
        on:consider="{setItems}"
        on:finalize="{setItems}"
      >
        {#each items as item(item.id)}
          <div class="draggable-row" animate:flip={{duration:flipDurationMs}}>
            {item.name}
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
