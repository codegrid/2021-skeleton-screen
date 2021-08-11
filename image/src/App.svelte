<script>
  import { SkeletonImage } from 'skeleton-elements/svelte'
  import 'skeleton-elements/skeleton-elements.css'
</script>
<div>
  <SkeletonImage width={400} height={300} effect="wave" />
</div>
<div style="margin-top: 20px;">
  <SkeletonImage width={400} height={300} borderRadius="10px" showIcon={false} effect="wave" />
</div>
