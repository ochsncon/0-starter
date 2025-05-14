<script>
    let { data, form } = $props();
</script>

<h1>Artist Details</h1>
<a href="/artists">Back</a>

<form method="POST" action="?/update">

    <input name = "id" type="hidden" value={data._id}>

    <div class="mb-3">
        <label class="form-label" for="">Name</label>
        <input value ={data.name} name="name" class="form-control" type="text" id="" />
    </div>

    <div class="mb-3">
        <label class="form-label" for="">Origin</label>
        <input value = {data.origin} name="origin" class="form-control" type="text" id="" />
    </div>

    <button class = "btn btn-primary">Update</button>
</form>

{#if form?.success}
    Artist {form} updated
{/if}

<!-- <p>{data._id}</p>
<p>{data.name}</p>
<p>{data.origin}</p> -->
