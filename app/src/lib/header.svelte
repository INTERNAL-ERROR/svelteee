<script>
    let name = ""
</script>

<input bind:value={name} />

<nav>
    <a sveltekit:prefetch href = {"about/" + name}>Home</a>
</nav>