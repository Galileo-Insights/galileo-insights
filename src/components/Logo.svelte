<style>
  .moon,
  .planet-tail {
    fill: none;
    stroke: #52bd95;
    stroke-width: 2;
    stroke-linecap: round;
  }
  .moon {
    fill: #ffffff;
    stroke: #12424a;
  }

  .planet {
    fill: #12424a;
  }

  .planet-tail {
    stroke-width: 1;
  }
</style>

  <circle class="planet" cx="0" cy="0" r="7" />
  <path
    class="planet-tail"
    d="M12,0c0,6.63-5.37,12-12,12s-12-5.37-12-12s5.37-12,12-12c2.84,0,5.44,0.98,7.5,2.63" />
  <circle class="moon" cx="12.26" cy="0" r="1.62" />
