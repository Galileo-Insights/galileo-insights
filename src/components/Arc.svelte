<script>
  import { describeArc } from "./maths.js";
  import { colors } from "./colors.js";

  // default to a random percent to fill up the circle
  export let percent = Math.floor(Math.random() * 80) + 15;
  // default to a random radius in "layers" so it is uniform
  export let radius = Math.floor(Math.random() * 20) * 1.5 + 16;
  // default to a random starting point in the circle
  export let start = Math.floor(Math.random() * 360);
  // get a random duration of at least 20 seconds
  const dur = Math.floor(Math.random() * 100) + 20 + "s";

  // get a random color to color path
  const color = colors[Math.floor(Math.random() * colors.length)];

  // parts is an array of commands to pass to the path
  $: parts = describeArc(0, 0, radius, 0, 0, percent * 3.6);
  // extract the start coords of the arc to make the start circle
  $: [, cx, cy] = parts;
  // command for path
  $: d = parts.join(" ");
</script>

<g style={`stroke: ${color};`}>
  <path {d} />
  <circle {cx} {cy} r=".5" />
  <animateTransform
    attributeName="transform"
    type="rotate"
    from={`${start} 0 0`}
    to="360 0 0"
    {dur}
    repeatCount="indefinite" />
</g>
