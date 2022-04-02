<script context = "module">
    export async function load({ params, fetch, session, stuff}) {
    const url = `/api/signup`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({hello:"world"})
    });
    //console.log(response)

    return {
      status: response.status,
      props: {
          wow: (await response.json().then(data => {
              return data.wow
          }))
    }
    };
  }
</script>

<script>
    export let wow
</script>

<h1>hi {wow[0].hello}</h1>

