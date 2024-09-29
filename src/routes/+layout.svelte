<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import { onMount } from 'svelte'

  onMount(() => {
      import('bootstrap')
  })
</script>

<slot />
