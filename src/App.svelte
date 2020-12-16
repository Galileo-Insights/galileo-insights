<script>
import Hero from './components/Hero.svelte';
import Description from './components/Description.svelte';
import Feature from './components/Feature.svelte';
let shown;
</script>

<Hero />
<button on:click={()=>shown=!shown}> hi </button> 
<Description {shown}/>
<Feature />