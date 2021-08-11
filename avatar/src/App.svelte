<script>
  import { SkeletonAvatar } from 'skeleton-elements/svelte'
  import 'skeleton-elements/skeleton-elements.css'
</script>
<div>
  <SkeletonAvatar effect="wave" />
</div>
<div style="margin-top: 10px">
  <SkeletonAvatar size={80} borderRadius="10px" showIcon={false} effect="wave" />
</div>
