<script>
  // List of Google accounts that are permitted to log in
  let users = [
    'amanager@company.com',
    'bmanager@company.com',
  ]

  let employeeNames = [
    "Tuomas Holopainen",
    "Emppu Vuorinen",
    "Troy Donockley",
    "Floor Jansen",
    "Kai Hahto",
    "Jukka Koskinen",
  ]
</script>


<main>
  <h1>On Call Manager</h1>

  {#each employeeNames as name}
    <div>
      {name}
    </div>
  {/each}

  <button>Submit Changes</button>

  <fieldset>
    <legend>Current Status</legend>

    All Ok
  </fieldset>

  <input class="form-control" type="text" />
</main>