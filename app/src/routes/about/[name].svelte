<script>
  import { page } from '$app/stores';
  const name = $page.params.name;
  $: c = "";
  fetch("./emoji").then(function(response) {
      response.json().then((data) => {
          c = data.emoji
      })
  })
</script>
<h1>{name}</h1>
<p>{c}</p>