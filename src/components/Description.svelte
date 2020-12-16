<script>
  import { draw } from "svelte/transition";
  export let shown;
</script>

{#if shown}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:se="http://svg-edit.googlecode.com"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:cc="http://creativecommons.org/ns#"
    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
    xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
    width="777"
    height="480">
    <!-- Created with Vector Paint - http://www.vectorpaint.yaks.com/ https://chrome.google.com/webstore/detail/hnbpdiengicdefcjecjbnjnoifekhgdo -->
      <path
      transition:draw

        fill="none"
        fill-opacity="1"
        stroke="#222222"
        stroke-opacity="1"
        style="color: rgb(0, 0, 0);"
        stroke-width="2"
        stroke-dasharray="none"
        stroke-linejoin="round"
        stroke-linecap="butt"
        stroke-dashoffset=""
        fill-rule="nonzero"
        opacity="1"
        marker-start=""
        marker-mid=""
        marker-end=""
        id="svg_1"
        d="M653.1751491726543,207.37888317778493 " />
      <path

      transition:draw
        fill="none"
        fill-opacity="1"
        stroke="#222222"
        stroke-opacity="1"
        style="color: rgb(0, 0, 0);"
        stroke-width="2"
        stroke-dasharray="none"
        stroke-linejoin="round"
        stroke-linecap="butt"
        stroke-dashoffset=""
        fill-rule="nonzero"
        opacity="1"
        marker-start=""
        marker-mid=""
        marker-end=""
        id="svg_2"
        d="M 651.312 145.267 L 437.888 65.8385 L 437.267 323.602 L 84.472 322.981 L 83.8509 16.7702 L 439.752 16.1491 L 651.312 145.267 Z" />
   </svg>
{/if}
