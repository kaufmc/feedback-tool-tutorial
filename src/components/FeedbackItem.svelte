<script>
	export let item;
	import Card from './Card.svelte';
</script>

<Card>
	<div class="num-display">{item.rating}</div>
	<div class="close">╳</div>
  <p class="text-display">{item.text}</p>
</Card>

<style>
  .num-display{
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #ff6a95;
    color: #ffffff;
    border: 2px #ffd6e1 solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }
  .close{
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
  }
</style>