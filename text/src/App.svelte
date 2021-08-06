<script>
  import { SkeletonText } from 'skeleton-elements/svelte'
  import 'skeleton-elements/skeleton-elements.css'
</script>

<div style="font-family: Arial, sans-serif; font-size: 14px;">

  <section>
    <h3>長いダミーテキスト</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <SkeletonText tag="p" effect="wave">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </SkeletonText>
  </section>

  <section>
    <h3>短いダミーテキスト</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
    <SkeletonText tag="p" effect="wave">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </SkeletonText>
  </section>

  <section>
    <h3>text-align: center</h3>
    <div style="text-align: center;">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <SkeletonText tag="p" effect="wave">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </SkeletonText>
    </div>
  </section>

  <section>
    <h3>line-height: 2</h3>
    <div style="line-height: 2;">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <SkeletonText tag="p" effect="wave">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </SkeletonText>
    </div>
  </section>

</div>
<style>
  section {
    margin: 25px 0;
    padding: 10px;
    border-bottom: solid 1px #999;
    line-height: 1.5;
  }
</style>
