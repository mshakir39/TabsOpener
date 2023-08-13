<script lang="ts">
  let url = '';
  let numTabs: any= 1; // Default value

  const openTabs = () => {
    // Remove any leading/trailing whitespace from the URL
    url = url.trim();

    // Check if the URL starts with "http://" or "https://"
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = 'http://' + url; // Add "http://" prefix if missing
    }

    // Convert numTabs to a number
    const numTabsInt = parseInt(numTabs);

    // Open tabs
    for (let i = 0; i < numTabsInt; i++) {
      console.log("numTabsInt",i,numTabsInt)
      window.open(url, '_blank');
    }
  };
</script>

<main class="p-4">
  <label class="block mb-2 font-medium" for="urlInput">Enter URL:</label>
  <input
    class="w-full p-2 border rounded"
    type="url"
    id="urlInput"
    placeholder="https://example.com"
    bind:value={url}
  />

  <label class="block mt-4 mb-2 font-medium" for="numTabsInput">How Many Tabs To Open:</label>
  <input
    class="w-full p-2 border rounded"
    type="number"
    id="numTabsInput"
    min="1"
    step="1"
    bind:value={numTabs}
  />

  <button
    class="mt-4 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
    on:click={openTabs}
  >
    Open Tabs
  </button>
</main>

<style>
  main {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
