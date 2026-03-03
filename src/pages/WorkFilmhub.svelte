<script>
  import { loadCollection } from "../lib/content";
  import { currentLocale } from "../router";
  import WorkGallery from "../components/WorkGallery.svelte";

  $: work = loadCollection("work", $currentLocale);
  $: data = work.filmhub;
</script>

<WorkGallery
  title={data.title}
  intro={data.intro}
  processTitle={data.processTitle}
  processText={data.processText}
  layout={data.layout}
  items={data.items}
/>
