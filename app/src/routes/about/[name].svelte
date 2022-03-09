<script context="module">
  /** @type {import('./[slug]').Load} */
  export async function load({ params, fetch, session, stuff }) {
    const url = `/emoji`;
    const response = await fetch(url);

    return {
      status: response.status,
      props: {
        c: (await response.json().then(data => {
            return data.emoji
        }))
      }
    };
  }
</script>

<script>
  export let c
  import { page } from '$app/stores';
  const name = $page.params.name;
  
  
</script>
<h1>{name}</h1>
<br />
<br />
<br />
<p>{c}</p>