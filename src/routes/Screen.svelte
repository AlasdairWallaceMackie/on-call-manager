<script>
  export let id
  export let heading
</script>

<section {id} class="container text-center position-relative">
  <div class="row">
    <div class="col">
      <h1>{heading}</h1>
    </div>
  </div>

  <slot />
</section>


<style>

</style>
