<script>
  import work from "../data/work.json";
  import WorkGallery from "../components/WorkGallery.svelte";

  const data = work.posters;
</script>

<WorkGallery
  title={data.title}
  intro={data.intro}
  processTitle={data.processTitle}
  processText={data.processText}
  layout={data.layout}
  items={data.items}
/>
