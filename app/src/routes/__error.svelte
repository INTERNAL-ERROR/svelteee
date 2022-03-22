<script context = "module">
    export function load ({status, error}) {
        return {
            props: {
                status,
                error
            }
                
        }
    }
</script>
<script>
    export let status, error
</script>

<h1>{status}</h1>
{#if status === 418}
    <p>I'm <br/>a<br/>tea<br/>pot!</p>
{/if}