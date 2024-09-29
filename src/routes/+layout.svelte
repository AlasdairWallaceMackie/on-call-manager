<script>
  import 'bootstrap/dist/css/bootstrap.min.css'
  import { onMount } from 'svelte'

  onMount(() => {
      import('bootstrap')
  })
</script>

<main class="p-5">
  <slot />
</main>

<style>
  main {
    height: 100vh;
    background: linear-gradient(
      315deg,
      #f3d54f,
      #f3c140,
      #f2ad34,
      #f0982b,
      #ed8328,
      #e96c28,
      #e4542a
    ); 
    /* made at https://learnui.design/tools/gradient-generator.html */
  }
</style>