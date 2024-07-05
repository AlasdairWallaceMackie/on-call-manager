<script>
  import { isOnMainScreen } from '../store'
	import AuthorizedUsers from "./AuthorizedUsers.svelte"
	import OnCall from "./OnCall.svelte"
</script>


<main>
  {#if $isOnMainScreen}
    <OnCall/>
  {:else}
    <AuthorizedUsers/>
  {/if}
</main>