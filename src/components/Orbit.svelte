<script>
  import Arc from "./Arc.svelte";
  import Logo from "./Logo.svelte";
</script>

<svg viewBox="-50 -50 100 100">
  {#each { length: 8 } as _, i}
    <!-- create evenly distributed radii arcs -->
    <Arc radius={i * 2.5 + 20} />
  {/each}

  <Logo />
</svg>
